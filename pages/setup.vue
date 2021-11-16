<template>
  <div>
    <v-form @submit.prevent="handleSubmit" method="POST">
      <v-toolbar flat>
        <v-toolbar-title>{{ $options.name }}</v-toolbar-title>
        <v-spacer />
        <v-btn class="mr-4" light type="submit"> Save </v-btn>
        <v-btn light @click="clear"> Clear </v-btn>
      </v-toolbar>
      <!-- ROW 1 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasic :info="basic" />
        </v-col>
      </v-row>
      <!-- ROW 2 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasicMeshrf :info="meshrf" />
        </v-col>
      </v-row>
      <!-- ROW 3 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasicLan :info="lan" />
        </v-col>
      </v-row>
      <!-- ROW 4 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasicLanap :info="lanap" />
        </v-col>
      </v-row>
      <!-- ROW 5 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasicWanbasic :info="wan" />
        </v-col>
      </v-row>
      <!-- ROW 6 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasicWanadvanced :info="wanadv" />
        </v-col>
      </v-row>
      <!-- ROW 7 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasicWanwificlient :info="wanclient" />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/apiprotected?topic=setup_basic";

export default {
  name: "Setup",
  // middleware: "authenticated",
  components: {},
  head() {
    return {
      title: this.getNodeName() + " [" + this.$options.name + "]",
    };
  },
  methods: {
    ...mapGetters(["getNodeName"]),
    handleSubmit() {
      alert("submit!");
    },
  },
  data() {
    return {
      info: {},
      basic: {},
      meshrf: {},
      lan: {},
      lanap: {},
      wan: {},
      wanadv: {},
      wanclient: {},
    };
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.info = this.info.data;
      this.basic = this.info.basic;
      this.meshrf = this.info.meshrf;
      this.lan = this.info.lan;
      this.lanap = this.info.lanap;
      this.wan = this.info.wan;
      this.wanadv = this.info.wanadv;
      this.wanclient = this.info.wanclient;
    } catch (error) {
      console.log("ERROR: " + error);
    }
  },
};
</script>
