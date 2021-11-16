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
          <SetupOptional />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/apiprotected?setup=optional";

export default {
  name: "Optional Setup",
  components: {},
  head() {
    return {
      title: this.getNodeName() + " [" + this.$options.name + "]",
    };
  },
  methods: {
    ...mapGetters(["getNodeName"]),
  },
  data() {
    return {
      info: {},
      basic: {},
      meshrf: {},
      lan: {},
      lanap: {},
      wan: {},
      wanadv: {},
      wanclient: {},
    };
  },
  async fetch() {
    try {
      this.info = await fetch(dataService).then((res) => res.json());
      this.basic = this.info.pages.setup.basic;
      this.meshrf = this.info.pages.setup.meshrf;
      this.lan = this.info.pages.setup.lan;
      this.lanap = this.info.pages.setup.lanap;
      this.wan = this.info.pages.setup.wan;
      this.wanadv = this.info.pages.setup.wanadv;
      this.wanclient = this.info.pages.setup.wanclient;
    } catch (error) {
      console.log("`ERROR: ${error}`");
    }
  },
};
</script>
