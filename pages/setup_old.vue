<template>
  <!-- <v-row>
    <v-col class="text-center">
        <h1>Setup</h1>
    </v-col>
  </v-row> -->
  <v-card>
    <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-setup">
        Core Setup
        <v-icon>mdi-cog</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-advanced">
        Advanced Config
        <v-icon>mdi-application-cog</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-setup">
        <setup-basic />
        <v-divider />
        <setup-basic-meshrf />
        <v-divider />
        <setup-basic-lan />
        <v-divider />
        <setup-basic-wan />
      </v-tab-item>

      </v-tab-item>
      <v-tab-item value="tab-setup-advanced">
        <setup-advanced />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Setup",
  middleware: "authenticated",
  head() {
    return {
      title: this.nodeName + " [" + this.$options.name + "]",
    };
  },
  data() {
    return {
      tab: null,
    };
  },
  created() {},
  computed: {
    ...mapGetters(['nodeName']),
  },
};
</script>
