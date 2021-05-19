<template>
  <v-row>
    <v-col class="text-center">
      <h1>Services</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Services",
  components: {},
  head() {
    return {
      title: this.$store.state.nodename,
    };
  },
};
</script>
