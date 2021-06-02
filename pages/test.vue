<template>
  <div>
    <div class="text-center">
      <h1>TESTING PAGE</h1>
    </div>
    <div class="text-left">
      <p>user: {{ user }}</p>
      <p>pass: {{ pass }}</p>
      <p>hash: {{ genBasicAuthHash }}</p>
      <p>header: {{ genHeader }}</p>
      <hr />
      <!-- <p>{{ this.getHostsFiltered("K5DLQ-HAP-1") }}</p> -->
      <!-- <nodes-traceroute node="KD0VWH-HAPAC01" /> -->
      <nodes-traceroute node="AC0EC-InternetHub" />
    </div>
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
    ...mapMutations({
      addHosts: "hosts/add",
    }),
    ...mapGetters({
      getHosts: "hosts/getHosts",
      getHost: "hosts/getHost",
      getHostsFiltered: "hosts/getHostsFiltered",
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
