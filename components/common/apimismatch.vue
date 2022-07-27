<template>
  <v-dialog persistent v-model="hasApiMismatch" max-width="400">
    <v-card>
      <v-card-title>
        <h2>Out of date firmware</h2>
      </v-card-title>
      <v-card-text>
        {{ hasApiMismatch }}'s firmware is out of date and cannot be used with
        this app. Use the legacy web interface or upgrade the firmware.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn small right class="warning" :href="legacyUrl(hasApiMismatch)">
          Use Legacy UI
        </v-btn>
        <v-btn small right class="error" @click="clearApiMismatch()"
          >Cancel</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'apimismatch',
  methods: {
    ...mapActions(['clearApiMismatch']),
  },
  computed: {
    ...mapGetters(['hasApiMismatch', 'nodeName', 'legacyUrl']),
  },
}
</script>
