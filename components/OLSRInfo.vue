<template>
  <v-card height="100%">
    <v-card-title class="headline">
      OLSR
      <v-spacer />
      <v-icon color="blue">mdi-routes</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">OLSR Entries:</p>
          <p class="label">OLSR Nodes:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ info.entries }}</p>
          <p class="mb-0">{{ info.nodes }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SystemInfo",
  created() {},
  data() {
    return {};
  },
  props: {
    info: {}
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}</style>
