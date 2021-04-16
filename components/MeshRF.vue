<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Mesh RF
      <v-spacer />
      <v-icon color="blue">mdi-wifi</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">SSID:</p>
          <p class="label">Channel:</p>
          <p class="label">Bandwidth:</p>
          <p class="label">Frequency:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ info.ssid }}</p>
          <p class="mb-0">{{ info.channel }}</p>
          <p class="mb-0">{{ info.chanbw }} MHz</p>
          <p class="mb-0">{{ info.frequency }}</p>
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