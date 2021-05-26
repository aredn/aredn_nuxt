<template>
  <div>
    <v-container multiple>
      <v-row class="accent" justify="center" no-gutters>
        <v-col cols="5">Node</v-col>
        <v-col cols="2">IP</v-col>
        <v-col cols="1">Type</v-col>
        <v-col cols="1">LQ</v-col>
        <v-col cols="1">NLQ</v-col>
        <v-col cols="2">Est.Thru</v-col>
      </v-row>
    </v-container>

    <v-expansion-panels>
      <v-expansion-panel v-for="(node, ip) in currentNeighbors" :key="ip">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="5">{{ node.hostname }}</v-col>
              <v-col cols="2">{{ ip }}</v-col>
              <v-col cols="1">{{ node.linkType }}</v-col>
              <v-col cols="1">{{ (node.linkQuality * 100).toFixed(0) }}%</v-col>
              <v-col cols="1">{{ (node.neighborLinkQuality * 100).toFixed(0) }}%</v-col>
              <v-col cols="2">{{ node.expected_throughput }}MB/s</v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <nodes-servicechips :ip="ip" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/api?mesh=currentneighbors";

export default {
  data: {
    info: {},
  },
  methods: {
    ...mapMutations({
      addCurrentNeighbors: "nodes/addCurrentNeighbors",
    }),
    ...mapGetters({
      getServicesByHost: "services/getServicesByHost",
      getFQNodeName: "getFQNodeName",
      getNodeName: "getNodeName",
    }),
  },
  computed: {
    ...mapGetters({
      currentNeighbors: "nodes/getCurrentNeighbors",
    }),
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.addCurrentNeighbors(this.info.pages.mesh.currentneighbors);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  },
};
</script>
