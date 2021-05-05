<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Location
      <v-spacer />
      <v-icon color="green">mdi-map-marker</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">Latitude:</p>
          <p class="label">Longitude:</p>
          <p class="label">Grid Square:</p>
          <p class="label">&nbsp;</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ info.lat  === "" ? "Not set" : info.lat }}</p>
          <p class="mb-0">{{ info.lon  === "" ? "Not set" : info.lon }}</p>
          <p class="mb-0">{{ info.gridsquare === "" ? "Not set" : info.gridsquare }}</p>
          <p class="mb-0">&nbsp;</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MeshRF",
  created() {},
  data() {
    return {};
  },
  props: {
    info: {}
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}</style>
