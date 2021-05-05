<template>
  <v-card height="100%">
    <v-card-title class="headline">
      System
      <v-spacer />
      <v-icon color="blue">mdi-information</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">Model:</p>
          <p class="label">Target Type:</p>
          <p class="label">Firmware Version:</p>
          <p class="label">Node Date/time: </p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ info.model }}</p>
          <p class="mb-0">{{ info.target_type }}</p>
          <p class="mb-0">{{ info.firmware_version }}</p>
          <p class="mb-0">{{ info.date }} {{ info.time }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SystemInfo",
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
