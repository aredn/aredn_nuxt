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
      <v-tab-item value="tab-localhosts">
        <div v-if="$fetchState.pending">Loading...</div>
        <nodes-local v-else :info="localNodes" />
      </v-tab-item>
      <v-tab-item value="tab-currentneighbors">
        <div v-if="$fetchState.pending">Loading...</div>
        <nodes-neighbors v-else :info="currentNeighbors"
      /></v-tab-item>
      <v-tab-item value="tab-remotenodes">
        <div v-if="$fetchState.pending">Loading...</div>
        <nodes-remote v-else />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/api?mesh=localhosts,services";

export default {
  name: "Nodes",
  head() {
    return {
      title: this.getNodeName() + " " + this.$options.name,
    };
  },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    ...mapMutations({
      addServices: "services/add",
      addNodes: "nodes/addNodes",
      addLocalNodes: "nodes/addLocalNodes",
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
      localNodes: "nodes/getLocalNodes",
      currentNeighbors: "nodes/getCurrentNeighbors",
    }),
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.addLocalNodes(this.info.pages.mesh.localhosts);
      this.addCurrentNeighbors(this.info.pages.mesh.currentneighbors);
      this.addServices(this.info.pages.mesh.services);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  },
};
</script>
