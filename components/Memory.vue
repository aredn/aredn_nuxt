<template>
  <v-card height="100%">
    <v-card-title class="headline">
      Memory
      <v-spacer />
      <v-icon color="amber">mdi-memory</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end">
          <p class="label">Total RAM:</p>
          <p class="label">Free RAM:</p>
          <p class="label">Shared RAM:</p>
          <p class="label">Buffer RAM:</p>
        </v-col>
        <v-col>
          <p class="mb-0">{{ info.totalram }} KB</p>
          <p class="mb-0">{{ info.freeram }} KB <v-progress-linear v-model="freerampctfree" /></p>
          <p class="mb-0">{{ info.sharedram }} KB</p>
          <p class="mb-0">{{ info.bufferram }} KB</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FilesystemInfo",
  created() {},
  data() {
    return {};
  },
  props: {
    info: {}
  },
  computed: {
    freerampctfree() {
      return ((this.info.freeram/this.info.totalram) * 100).toFixed(3);
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}</style>