<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Performance
      <v-spacer />
      <v-icon color="amber">mdi-gauge</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end" cols="5">
          <p class="label">Uptime:</p>
          <p class="label">Load (1m):</p>
          <p class="label">Load (5m):</p>
          <p class="label">Load (15m):</p>
        </v-col>
        <v-col cols="7">
          <!-- {{ info.loads[0] }} -->
          <p class="mb-0">{{ info.uptime }}</p>
          <p v-for="(load, index) in info.loads"
            :key="`load${index}`"
            class="mb-0"
          >{{ load }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Performance",
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
