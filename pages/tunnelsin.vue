<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>{{ $options.name }}</v-toolbar-title>
    </v-toolbar>
    <SetupTunnelsIn />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Inbound Tunnels",
  middleware: "authenticated",
  head() {
    return {
      title: this.getNodeName() + " [" + this.$options.name + "]",
    };
  },
  data: () => ({}),
  methods: {
    ...mapGetters(["getNodeName"]),
  },
};
</script>
