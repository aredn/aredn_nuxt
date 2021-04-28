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

      <v-tab href="#tab-setup-tunnels-in">
        Inbound Connections
        <v-icon>mdi-arrow-down-bold-circle</v-icon>
      </v-tab>

      <v-tab href="#tab-setup-tunnels-out">
        Outbound Connections
        <v-icon>mdi-arrow-up-bold-circle</v-icon>
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-setup-tunnels-in">
          <setup-tunnels-in />
        </v-tab-item>
        <v-tab-item value="tab-setup-tunnels-out">
          <setup-tunnels-out />
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
