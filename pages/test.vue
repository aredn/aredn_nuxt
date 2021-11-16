<template>
  <div>
    <div class="text-center">
      <h1>TESTING PAGE</h1>
    </div>
    <div class="text-left">
      <v-btn class="mx-2" fab dark small color="primary" @click="toggleAuthenticated()">
        <v-icon v-if="isAuthenticated()" dark> mdi-lock-open-variant </v-icon>
        <v-icon v-else dark> mdi-lock </v-icon>
      </v-btn>
      <p>user: {{ user }}</p>
      <p>pass: {{ pass }}</p>
      <p>hash: {{ genBasicAuthHash }}</p>
      <p>header: {{ genHeader }}</p>
      <hr />
      <!-- <p>{{ this.getHostsFiltered("K5DLQ-HAP-1") }}</p> -->
      <!-- <nodes-traceroute node="KD0VWH-HAPAC01" /> -->
      <nodes-traceroute node="AC0EC-InternetHub" />
    </div>

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Open Map </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5"> Online Map </v-card-title>
          <v-card-text>foo</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false"> OK </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/api?mesh=allhosts";

export default {
  data() {
    return {
      user: "root",
      pass: "1234",
      dialog: false,
    };
  },
  computed: {
    genBasicAuthHash() {
      return btoa(this.user + ":" + this.pass);
    },
    genHeader() {
      return "Basic " + this.genBasicAuthHash;
    },
  },
  methods: {
    toggleAuthenticated() {
      this.toggle();
    },
    // isAuthenticated() {
    //   return this.$store.state.authenticated;
    // },
    ...mapMutations({
      addHosts: "hosts/add",
      toggle: "toggle",
    }),
    ...mapGetters({
      getHosts: "hosts/getHosts",
      getHost: "hosts/getHost",
      getHostsFiltered: "hosts/getHostsFiltered",
      isAuthenticated: "isAuthenticated",
    }),
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.addHosts(this.info.pages.mesh.allhosts);
      $nuxt.$root.$loading.finish();
    } catch (error) {
      console.log("ERROR: " + error);
    }
  },
};
</script>
