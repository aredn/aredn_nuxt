<template>
  <div>
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="(node, key) in nodes" :key="key">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="1">
                <v-chip :href="makeLink(node.name)">
                  {{ node.name }}
                </v-chip>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="1">ETX: {{ node.etx }}</v-col>
              <v-col cols="10">
                <v-chip class="ma-1" label>SERVICE1</v-chip>
                <v-chip class="ma-1" label>SERVICE2</v-chip>
                <v-chip class="ma-1" label>SERVICE3</v-chip>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          >Route: <v-chip :href="makeLink()">{{ $store.state.nodename }}</v-chip> 1.1
          <v-chip :href="makeLink('node675')">node675</v-chip> 2.0
          <v-chip :href="makeLink(node.name)">{{ node.name }}</v-chip>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes: [
        {
          name: "node1",
          etx: "1.0",
          services: [
            {
              name: "service10",
            },
            {
              name: "service11",
            },
          ],
        },
        {
          name: "node2",
          etx: "2.0",
          services: [
            {
              name: "service20",
            },
            {
              name: "service21",
            },
          ],
        },
      ],
    };
  },
  props: {
    info: {},
  },
  methods: {
    makeLink(nodename) {
      if (nodename) {
        return `http://${nodename}.local.mesh:8080`;
      } else {
        return `http://${this.$store.state.nodename}.local.mesh:8080`;
      }
    },
  },
};
</script>
