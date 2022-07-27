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
    <v-expansion-panels>
      <v-expansion-panel v-for="(node, key) in remotenodes" :key="key">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="3">
                <a :href="makeLink(node.name)" target="_new">{{ node.name }}</a>
              </v-col>
              <v-col cols="2">{{ node.ip }}</v-col>
              <v-col cols="1">{{ node.etx }}</v-col>
              <v-col cols="6">
                <nodes-servicechips :ip="node.ip" />
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <nodes-traceroute :node="node.name" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    makeLink(nodename) {
      if (nodename) {
        return `http://${nodename}.local.mesh:8080`
      } else {
        return `http://${this.$store.state.nodename}.local.mesh:8080`
      }
    },
  },
  computed: {
    ...mapGetters(['remotenodes']),
  },
}
</script>
