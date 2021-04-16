<template>
  <v-card>
    <v-card-title class="headline">
      Performance
      <v-spacer />
      <v-icon color="green">mdi-gauge</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">Uptime:</p>
          <p class="label">Load Avg (1min):</p>
          <p class="label">Load Avg (5min):</p>
          <p class="label">Load Avg (15min):</p>
        </v-col>
        <v-col>
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