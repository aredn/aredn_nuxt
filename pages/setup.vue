<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>{{ $options.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn class="mr-4" light type="submit"> Save </v-btn>
      <v-btn light @click="clear"> Clear </v-btn>
    </v-toolbar>
    <!-- ROW 1 -->
    <v-row justify="center" align="stretch">
      <v-col cols="12">
        <SetupBasic />
      </v-col>
    </v-row>
    <!-- ROW 2 -->
    <v-row justify="center" align="stretch">
      <v-col cols="6">
        <SetupBasicMeshrf />
      </v-col>
      <v-col cols="6">
        <SetupBasicMeshrfSettings />
      </v-col>
    </v-row>
    <!-- ROW 3 -->
    <v-row justify="center" align="stretch">
      <v-col cols="6"><SetupBasicLan /></v-col>
      <v-col cols="6"><SetupBasicLanap /></v-col>
    </v-row>
    <!-- ROW 4 -->
    <v-row justify="center" align="stretch">
      <v-col cols="4"><SetupBasicWanbasic /></v-col>
      <v-col cols="4"><SetupBasicWanadvanced /></v-col>
      <v-col cols="4"><SetupBasicWanwificlient /></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const dataService =
  process.env.apiROOT + "/api?status=ip,meshrf,location,sysinfo,olsr,storage,memory";

export default {
  name: "Basic Setup",
  components: {},
  head() {
    return {
      title: this.getNodeName() + " [" + this.$options.name + "]",
    };
  },
  methods: {
    ...mapGetters(["getNodeName"]),
  },
  data() {
    return {
      info: {},
      ip: {},
      meshrf: {},
      location: {},
      sysinfo: {},
      olsr: {},
      storage: {},
      memory: {},
    };
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.ip = this.info.pages.status.ip;
      this.meshrf = this.info.pages.status.meshrf;
      this.location = this.info.pages.status.location;
      this.sysinfo = this.info.pages.status.sysinfo;
      this.olsr = this.info.pages.status.olsr;
      this.storage = this.info.pages.status.storage;
      this.memory = this.info.pages.status.memory;
    } catch (error) {
      console.log("`ERROR: ${error}`");
    }
  },
};
</script>
