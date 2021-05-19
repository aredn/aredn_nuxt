<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(node, key) in nodes" :key="key">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="6">{{ node.name }}</v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">ETX: {{ node.etx }}</v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          >Route: <v-chip>thisnode</v-chip> 1.1 <v-chip>node675</v-chip> 2.0
          <v-chip>{{ node.name }}</v-chip>
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
};
</script>
