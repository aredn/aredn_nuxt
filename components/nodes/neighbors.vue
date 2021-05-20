<template>
  <div>
    <v-container>
      <v-row justify="center" no-gutters>
        <v-col cols="5">Node</v-col>
        <v-col cols="2">IP</v-col>
        <v-col cols="1">Type</v-col>
        <v-col cols="1">LQ</v-col>
        <v-col cols="1">NLQ</v-col>
        <v-col cols="2">TxMbps</v-col>
      </v-row>
    </v-container>

    <v-expansion-panels>
      <v-expansion-panel v-for="(node, ip) in info" :key="ip">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="5">{{ node.hostname }}</v-col>
              <v-col cols="2">{{ ip }}</v-col>
              <v-col cols="1">{{ node.linkType }}</v-col>
              <v-col cols="1">{{ node.linkQuality * 100 }}%</v-col>
              <v-col cols="1">{{ node.neighborLinkQuality * 100 }}%</v-col>
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
