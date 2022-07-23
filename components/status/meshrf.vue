<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Mesh RF
      <v-spacer />
      <v-icon color="green">mdi-wifi</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">SSID:</p>
          <p class="label">Channel:</p>
          <p class="label">Bandwidth (MHz):</p>
          <p class="label">Frequency (MHz):</p>
        </v-col>
        <v-col>
          <p class="mb-0">
            {{ meshrf.ssid === undefined ? 'Disabled' : meshrf.ssid }}
          </p>
          <p class="mb-0">
            {{ meshrf.channel === undefined ? 'Disabled' : meshrf.channel }}
          </p>
          <p class="mb-0">
            {{ meshrf.chanbw === undefined ? 'Disabled' : meshrf.chanbw }}
          </p>
          <p class="mb-0">
            {{ meshrf.frequency === undefined ? 'Disabled' : meshrf.frequency }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MeshRF',
  computed: {
    ...mapGetters(['meshrf']),
  },
}
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
