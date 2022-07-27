<template>
  <v-dialog v-model="loading" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'loader',
  computed: {
    ...mapGetters(['loading']),
  },
}
</script>
