<template>
  <div>
    <!-- ROW 1 -->
    <v-row justify="center" align="stretch">
      <v-col cols="8">
        <status-systeminfo />
      </v-col>
      <v-col cols="4">
        <status-location />
      </v-col>
    </v-row>
    <!-- ROW 2 -->
    <v-row justify="center" align="stretch">
      <v-col cols="4">
        <status-ipaddresses />
      </v-col>
      <v-col cols="4">
        <status-meshrf />
      </v-col>
      <v-col cols="4">
        <status-olsrinfo />
      </v-col>
    </v-row>
    <!-- ROW 3 -->
    <v-row justify="center" align="stretch">
      <v-col cols="4">
        <status-filesysteminfo />
      </v-col>
      <v-col cols="4">
        <status-memory />
      </v-col>
      <v-col cols="4">
        <status-performance />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Status',
  head() {
    return {
      title: this.nodeName + ' [' + this.$options.name + ']',
    }
  },
  computed: {
    ...mapGetters(['nodeName']),
  },
  created() {
    this.$store.dispatch('loadResources', [
      'ip',
      'meshrf',
      'location',
      'sysinfo',
      'olsr',
      'storage',
      'memory',
    ])
  },
}
</script>
