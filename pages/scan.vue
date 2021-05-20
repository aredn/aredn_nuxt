<template>
  <v-row>
    <v-col class="text-center">
      <h1>WiFi Scan</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Scan",
  components: {},
  head() {
    return {
      title: this.$store.state.nodename + " " + this.$options.name
    };
  },
};
</script>
