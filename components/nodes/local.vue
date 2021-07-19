<template>
  <div>
    <v-container>
      <v-row class="accent" no-gutters>
        <v-col cols="3">Hostname</v-col>
        <v-col cols="2">IP</v-col>
        <v-col cols="1">Type</v-col>
        <v-col cols="6">Services</v-col>
      </v-row>
    </v-container>

    <v-container v-for="(host, key) in info" :key="key">
      <v-row align="start">
        <v-col cols="3">{{ host.hostname }}</v-col>
        <v-col cols="2">{{ host.ip }}</v-col>
        <v-col cols="1">{{ host.cnxtype }}</v-col>
        <v-col cols="6"><nodes-servicechips :ip="host.ip" /></v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  props: {
    info: {},
  },
  computed: {},
};
</script>
