<template>
  <v-row>
    <v-col class="text-center">
      <h1>Services</h1>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Services",
  components: {},
  head() {
    return {
      title: this.getNodeName() + " [" + this.$options.name + "]",
    };
  },
  methods: {
    ...mapGetters(["getNodeName"]),
  },
};
</script>
