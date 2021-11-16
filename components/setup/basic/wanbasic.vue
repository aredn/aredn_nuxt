<template>
  <v-card flat>
    <v-card-title>WAN</v-card-title>
    <v-card-subtitle>Define the settings for WAN interface</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-radio-group label="Protocol/Mode" v-model="mode" row dense>
            <v-radio label="DHCP" value="dhcp"></v-radio>
            <v-radio label="Static" value="static"></v-radio>
            <v-radio label="Disabled" value="disabled"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col>
          <v-text-field v-model="dns1" label="DNS Server 1"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="dns2" label="DNS Server 2"></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Setup-WAN-Basic",
  created() {},
  data() {
    return {
      mode: "dhcp",
      dns1: "8.8.8.8",
      dns2: "8.8.4.4",
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
