<template>
  <v-card>
    <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-localhosts">Local Hosts
        <v-icon>mdi-lan</v-icon>
      </v-tab>
      <v-tab href="#tab-currentneighbors">Current Neighbors
        <v-icon>mdi-signal-distance-variant</v-icon>
      </v-tab>
      <v-tab href="#tab-remotenodes">Remote Nodes
        <v-icon>mdi-map-marker-distance</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-localhosts"><meshnodes-localhosts /></v-tab-item>
      <v-tab-item value="tab-currentneighbors"><meshnodes-currentneighbors /></v-tab-item>
      <v-tab-item value="tab-remotenodes"><meshnodes-remotenodes /></v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
  created() {},
};
</script>
