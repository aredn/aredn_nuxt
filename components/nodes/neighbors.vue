<template>
  <div>
    <v-container multiple>
      <v-row class="accent" no-gutters>
        <v-col cols="3">Node</v-col>
        <v-col cols="1">Type</v-col>
        <v-col cols="1">LQ</v-col>
        <v-col cols="1">NLQ</v-col>
        <v-col cols="1">Thru Mb/s</v-col>
        <v-col cols="5">Services</v-col>
      </v-row>
    </v-container>

    <v-container v-for="(node, ip) in currentNeighbors" :key="ip">
      <v-row align="start">
        <v-col cols="3">{{ node.hostname }}</v-col>
        <v-col cols="1">{{ node.linkType }}</v-col>
        <v-col cols="1">{{ (node.linkQuality * 100).toFixed(0) }}%</v-col>
        <v-col cols="1">{{ (node.neighborLinkQuality * 100).toFixed(0) }}%</v-col>
        <v-col cols="1">{{ node.linkType === "RF" ? node.expected_throughput : "n/a" }}</v-col>
        <v-col cols="5">
          <nodes-servicechips :ip="ip" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/api?mesh=currentneighbors";

export default {
  data() {
    return {
      info: {},
    };
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
