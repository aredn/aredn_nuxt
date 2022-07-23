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
          <p class="label">RF:</p>
          <p class="label">LAN:</p>
          <p class="label">WAN:</p>
          <p class="label">Gateway:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ ip.wifi === '' ? 'Disabled' : ip.wifi }}</p>
          <p class="mb-0">{{ ip.lan }}</p>
          <p class="mb-0">{{ ip.wan === '' ? 'n/a' : ip.wan }}</p>
          <p class="mb-0">{{ ip.gateway }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IPAddresses',
  computed: {
    ...mapGetters(['ip']),
  },
}
</script>

<style scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
