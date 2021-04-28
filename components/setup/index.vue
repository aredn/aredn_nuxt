<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="primary darken-1"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-setup-basic">
        Basics
        <v-icon>mdi-cog</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-basic-meshrf">
        Mesh RF
        <v-icon>mdi-spider-web</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-basic-lan">
        LAN
        <v-icon>mdi-ethernet</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-basic-wan">
        WAN
        <v-icon>mdi-wan</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-basic-optional">
        Optional
        <v-icon>mdi-tune</v-icon>
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-setup-basic">
          <setup-basic />
        </v-tab-item>
        <v-tab-item value="tab-setup-basic-meshrf">
          <setup-basic-meshrf />
        </v-tab-item>
        <v-tab-item value="tab-setup-basic-lan">
          <setup-basic-lan />
        </v-tab-item>
        <v-tab-item value="tab-setup-basic-wan">
          <setup-basic-wan />
        </v-tab-item>
        <v-tab-item value="tab-setup-basic-optional">
          <setup-basic-optional />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
};
</script>
