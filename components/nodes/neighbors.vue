<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(node, key) in info" :key="key">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="4">{{ node.hostname }}</v-col>
              <v-spacer></v-spacer>
              <v-col cols="2">{{ key }}</v-col>
              <v-spacer></v-spacer>
              <v-col cols="2">{{ node.linkQuality * 100 }}%</v-col>
              <v-spacer></v-spacer>
              <v-col cols="2">{{ node.neighborLinkQuality * 100 }}%</v-col>
              <v-spacer></v-spacer>
              <v-col cols="2">...TxMbps...</v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-chip class="ma-1" label href="http://host1.local.mesh/service1"
            >service1</v-chip
          >
          <v-chip class="ma-1" label href="http://host1.local.mesh/service2"
            >service2</v-chip
          >
          <v-chip class="ma-1" label href="http://host1.local.mesh/service3"
            >service3</v-chip
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: {
    info: {},
  },
};
</script>
