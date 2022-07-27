<template>
  <v-dialog persistent v-model="hasError" max-width="400">
    <v-card>
      <v-card-title>
        <h2>Error</h2>
      </v-card-title>
      <v-card-text>
        An error has occured: <b>{{ errorString }}</b>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn small right @click="clearError()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'error',
  methods: {
    ...mapActions(['clearError']),
  },
  computed: {
    ...mapGetters(['errorString', 'hasError', 'nodeName']),
  },
}
</script>
