<template>
  <div>
    <!-- ROW 1 -->
    <v-row justify="center" align="stretch">
      <v-col cols="8">
        <status-systeminfo :info="sysinfo" />
      </v-col>
      <v-col cols="4">
        <status-location :info="location" />
      </v-col>
    </v-row>
    <!-- ROW 2 -->
    <v-row justify="center" align="stretch">
      <v-col cols="4">
        <status-ipaddresses :info="ip" />
      </v-col>
      <v-col cols="4">
        <status-meshrf :info="meshrf" />
      </v-col>
      <v-col cols="4">
        <status-olsrinfo :info="olsr" />
      </v-col>
    </v-row>
    <!-- ROW 3 -->
    <v-row justify="center" align="stretch">
      <v-col cols="4">
        <status-filesysteminfo :info="storage" />
      </v-col>
      <v-col cols="4">
        <status-memory :info="memory" />
      </v-col>
      <v-col cols="4">
        <status-performance :info="sysinfo" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
const dataService =
  process.env.apiROOT + "/api?status=ip,meshrf,location,sysinfo,olsr,storage,memory";

export default {
  name: "Status",
  components: {},
  head() {
    return {
      title: this.$store.state.nodename + " " + this.$options.name,
    };
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
