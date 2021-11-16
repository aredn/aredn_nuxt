<template>
  <div>
    <v-form @submit.prevent="handleSubmit" method="POST">
      <v-toolbar flat>
        <v-toolbar-title>{{ $options.name }}</v-toolbar-title>
        <v-spacer />
        <v-btn class="mr-4" light type="submit"> Save </v-btn>
        <v-btn light @click="clear"> Clear </v-btn>
      </v-toolbar>
      <!-- ROW 1 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasic :info="info" />
        </v-col>
      </v-row>
      <!-- ROW 2 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <SetupBasicMeshrf :info="info" />
        </v-col>
      </v-row>
      <!-- ROW 3 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12"><SetupBasicLan :info="info" /></v-col>
      </v-row>
      <!-- ROW 4 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12"><SetupBasicLanap :info="info" /></v-col>
      </v-row>
      <!-- ROW 5 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12"><SetupBasicWanbasic :info="info" /></v-col>
      </v-row>
      <!-- ROW 6 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12"><SetupBasicWanadvanced :info="info" /></v-col>
      </v-row>
      <!-- ROW 7 -->
      <v-row justify="center" align="stretch">
        <v-col cols="12"><SetupBasicWanwificlient :info="info" /></v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/apiprotected?topic=setup_basic";

export default {
  name: "Setup",
  components: {},
  head() {
    return {
      title: this.getNodeName() + " [" + this.$options.name + "]",
    };
  },
  methods: {
    ...mapGetters(["getNodeName"]),
    handleSubmit() {
      alert("submit!");
    },
  },
  data() {
    return {
      info: {},
    };
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.info = this.info.data;
    } catch (error) {
      console.log("`ERROR: ${error}`");
    }
  },
};
</script>
