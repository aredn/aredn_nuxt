<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-localhosts">
        Local Hosts
        <v-icon>mdi-lan</v-icon>
      </v-tab>
      <v-tab href="#tab-currentneighbors">
        Current Neighbors
        <v-icon>mdi-signal-distance-variant</v-icon>
      </v-tab>
      <v-tab href="#tab-remotenodes">
        Remote Nodes
        <v-icon>mdi-map-marker-distance</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-localhosts">
        <div v-if="!isLoaded('localhosts')">Loading...</div>
        <nodes-local v-else />
        <!-- <nodes-local /> -->
      </v-tab-item>
      <v-tab-item value="tab-currentneighbors">
        <div v-if="!isLoaded('currentneighbors')">Loading...</div>
        <nodes-neighbors v-else />
        <!-- <nodes-neighbors /> -->
      </v-tab-item>
      <v-tab-item value="tab-remotenodes">
        <div v-if="!isLoaded('remotenodes')">Loading...</div>
        <nodes-remote v-else />
        <!-- <nodes-remote /> -->
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

const requiredResources = [
  'currentneighbors',
  'localhosts',
  'remotenodes',
  'services',
]

export default {
  name: 'Nodes',
  head() {
    return {
      title: this.nodeName + ' [' + this.$options.name + ']',
    }
  },
  data() {
    return {
      tab: null,
    }
  },
  computed: {
    ...mapGetters(['isLoaded', ...requiredResources]),
  },
  created() {
    this.$store.dispatch('loadResources', requiredResources)
  },
}
</script>
