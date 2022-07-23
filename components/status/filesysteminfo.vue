<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Filesystem
      <v-spacer />
      <v-icon color="green">mdi-harddisk</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">Total space in /:</p>
          <p class="label">Freespace in /:</p>
          <p class="label">Total space in /tmp:</p>
          <p class="label">Freespace in /tmp:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ storage.roottotal }} KB</p>
          <p class="mb-0">{{ storage.rootfree }} KB <v-progress-linear v-model="rootpctfree" /></p>
          <p class="mb-0">{{ storage.tmptotal }} KB</p>
          <p class="mb-0">{{ storage.tmpfree }} KB <v-progress-linear v-model="tmppctfree" /></p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "FilesystemInfo",
  computed: {
    ...mapGetters(['storage']),
    rootpctfree() {
      return ((this.storage.rootfree/this.storage.roottotal) * 100).toFixed(3);
    },
    tmppctfree() {
      return ((this.storage.tmpfree/this.storage.tmptotal) * 100).toFixed(3);
    }
  },
};
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}</style>
