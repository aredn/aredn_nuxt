<template>
  <v-card height="100%">
    <v-card-title class="headline">
      IP Addresses
      <v-spacer />
      <v-icon color="amber">mdi-ip-network</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <p class="label">Wifi:</p>
          <p class="label">LAN:</p>
          <p class="label">WAN:</p>
          <p class="label">Gateway:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ info.wifi === "" ? "DISABLED" : info.wifi }}</p>
          <p class="mb-0">{{ info.lan }}</p>
          <p class="mb-0">{{ info.wan === "" ? "N/A" : info.wan }}</p>
          <p class="mb-0">{{ info.gateway }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "IPAddresses",
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

<style scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
