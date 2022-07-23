<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Memory
      <v-spacer />
      <v-icon color="blue">mdi-memory</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">Total RAM:</p>
          <p class="label">Free RAM:</p>
          <p class="label">Shared RAM:</p>
          <p class="label">Buffer RAM:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ memory.totalram }} KB</p>
          <p class="mb-0">
            {{ memory.freeram }} KB <v-progress-linear v-model="freerampctfree" />
          </p>
          <p class="mb-0">{{ memory.sharedram }} KB</p>
          <p class="mb-0">{{ memory.bufferram }} KB</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FilesystemInfo',
  computed: {
    ...mapGetters(['memory']),
    freerampctfree() {
      return ((this.memory.freeram / this.memory.totalram) * 100).toFixed(3)
    },
  },
}
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
