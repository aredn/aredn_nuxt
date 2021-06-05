<template>
  <div>
    <v-container>
      <v-row class="accent" justify="center" no-gutters>
        <v-col cols="3">Hostname</v-col>
        <v-col cols="2">IP</v-col>
        <v-col cols="1">ETX</v-col>
        <v-col cols="6">Services</v-col>
      </v-row>
    </v-container>
    <div v-if="$fetchState.pending">Loading...</div>
    <v-expansion-panels v-else multiple>
      <v-expansion-panel v-for="(node, key) in remoteNodes" :key="key">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="3">{{ node.name }}</v-col>
              <v-col cols="2">{{ node.ip }}</v-col>
              <v-col cols="1">{{ node.etx }}</v-col>
              <v-col cols="6">
                <nodes-servicechips :ip="node.ip" />
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          ><nodes-traceroute :node="node.name" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/api?mesh=remotenodes";

export default {
  methods: {
    makeLink(nodename) {
      if (nodename) {
        return `http://${nodename}.local.mesh:8080`;
      } else {
        return `http://${this.$store.state.nodename}.local.mesh:8080`;
      }
    },
  },
  methods: {
    ...mapMutations({
      addRemoteNodes: "nodes/addRemoteNodes",
    }),
    ...mapGetters({
      getServicesByHost: "services/getServicesByHost",
      getFQNodeName: "getFQNodeName",
      getNodeName: "getNodeName",
    }),
  },
  computed: {
    ...mapGetters({
      remoteNodes: "nodes/getRemoteNodes",
    }),
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.addRemoteNodes(this.info.pages.mesh.remotenodes);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  },
};
</script>
