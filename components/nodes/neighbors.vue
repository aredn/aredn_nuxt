<template>
  <div>
    <v-container>
      <v-row class="accent" justify="center" no-gutters>
        <v-col cols="5">Node</v-col>
        <v-col cols="2">IP</v-col>
        <v-col cols="1">Type</v-col>
        <v-col cols="1">LQ</v-col>
        <v-col cols="1">NLQ</v-col>
        <v-col cols="2">Thru Mb/s</v-col>
      </v-row>
    </v-container>

    <v-expansion-panels>
      <v-expansion-panel v-for="(node, ip) in currentneighbors" :key="ip">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="5">{{ node.hostname }}</v-col>
              <v-col cols="2">{{ ip }}</v-col>
              <v-col cols="1">{{ node.linkType }}</v-col>
              <v-col cols="1">{{ (node.linkQuality * 100).toFixed(0) }}%</v-col>
              <v-col cols="1">
                {{ (node.neighborLinkQuality * 100).toFixed(0) }}%
              </v-col>
              <v-col cols="2">
                {{ node.linkType === 'RF' ? node.expected_throughput : 'n/a' }}
              </v-col>
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentneighbors']),
  },
}
</script>
