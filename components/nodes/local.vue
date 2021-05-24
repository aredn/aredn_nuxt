<template>
  <div>
    <v-container>
      <v-row class="accent" justify="center" no-gutters>
        <v-col cols="6">Hostname</v-col>
        <v-col cols="3">IP</v-col>
        <v-col cols="3">Type</v-col>
      </v-row>
    </v-container>

    <v-expansion-panels multiple>
      <v-expansion-panel v-for="(host, key) in info" :key="key">
        <v-expansion-panel-header>
          <v-container>
            <v-row align="start">
              <v-col cols="6">{{ host.hostnames[0] }}</v-col>
              <v-col cols="3">{{ host.ip }}</v-col>
              <v-col cols="3">{{ host.cnxtype }}</v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <nodes-servicechips :ip="host.ip" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    info: {},
  },
  computed: {},
};
</script>
