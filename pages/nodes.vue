<template>
  <v-card>
    <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-localhosts"
        >Local Hosts
        <v-icon>mdi-lan</v-icon>
      </v-tab>
      <v-tab href="#tab-currentneighbors"
        >Current Neighbors
        <v-icon>mdi-signal-distance-variant</v-icon>
      </v-tab>
      <v-tab href="#tab-remotenodes"
        >Remote Nodes
        <v-icon>mdi-map-marker-distance</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-localhosts"><nodes-local :info="localhosts" /></v-tab-item>
      <v-tab-item value="tab-currentneighbors"
        ><nodes-neighbors :info="currentneighbors"
      /></v-tab-item>
      <v-tab-item value="tab-remotenodes"
        ><nodes-remote :info="remotenodes" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
const dataService = process.env.apiROOT + "/api?mesh=localhosts,currentneighbors";

export default {
  name: "Nodes",
  head() {
    return {
      title: this.$store.state.nodename + " " + this.$options.name,
    };
  },
  data() {
    return {
      tab: null,
      localhosts: {},
      currentneighbors: {},
      remotenodes: {},
    };
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.localhosts = this.info.pages.mesh.localhosts;
      this.currentneighbors = this.info.pages.mesh.currentneighbors;
      this.remotenodes = this.info.pages.mesh.remotenodes;
    } catch (error) {
      console.log("`ERROR: ${error}`");
    }
  },
};
</script>
