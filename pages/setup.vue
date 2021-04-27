<template>
  <!-- <v-row>
    <v-col class="text-center">
        <h1>Setup</h1>
    </v-col>
  </v-row> -->
  <v-card>
    <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-setup-basic">
        BASIC Setup
        <v-icon>mdi-cog</v-icon>
      </v-tab>

      <v-tab href="#tab-setup-meshrf">
        Mesh RF
        <v-icon>mdi-spider-web</v-icon>
      </v-tab>

      <v-tab href="#tab-setup-lan">
        LAN
        <v-icon>mdi-ethernet</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-wan">
        WAN
        <v-icon>mdi-cloud</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-optional">
        Optional
        <v-icon>mdi-tune</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-tunnels-in">
        Inbound Tunnels
        <v-icon>mdi-arrow-down-bold-circle</v-icon>
      </v-tab>
      <v-tab href="#tab-setup-tunnels-out">
        Outbound Tunnels
        <v-icon>mdi-arrow-up-bold-circle</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-setup-basic">
        <setup-basic />
      </v-tab-item>
      <v-tab-item value="tab-setup-meshrf">
        <setup-meshrf />
      </v-tab-item>
      <v-tab-item value="tab-setup-lan">
        <setup-lan />
      </v-tab-item>
      <v-tab-item value="tab-setup-wan">
        <setup-wan />
      </v-tab-item>
      <v-tab-item value="tab-setup-optional">
        <setup-optional />
      </v-tab-item>
      <v-tab-item value="tab-setup-tunnels-in">
        <setup-tunnels-in />
      </v-tab-item>
      <v-tab-item value="tab-setup-tunnels-out">
        <setup-tunnels-out />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
  created() {},
};
</script>
