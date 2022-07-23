<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Location
      <v-spacer />
      <v-icon color="red">mdi-map-marker</v-icon>
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
          <p class="mb-0">{{ location.lat === '' ? 'Not set' : location.lat }}</p>
          <p class="mb-0">{{ location.lon === '' ? 'Not set' : location.lon }}</p>
          <p class="mb-0">
            {{ location.gridsquare === '' ? 'Not set' : location.gridsquare }}
          </p>
          <p class="mb-0">&nbsp;</p>
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
    ...mapGetters(['location']),
  },
}
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
