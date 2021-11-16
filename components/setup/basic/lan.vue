<template>
  <v-card flat>
    <v-card-title>LAN</v-card-title>
    <v-card-subtitle>Define the settings for LAN</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <v-radio-group label="Mode" v-model="mode" row dense>
            <v-radio label="NAT" value="0"></v-radio>
            <v-radio label="1 Host direct" value="2"></v-radio>
            <v-radio label="5 Host direct" value="3"></v-radio>
            <v-radio label="13 Host direct" value="4"></v-radio>
            <v-radio label="29 Host direct" value="5"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="lanip" label="IP Address" readonly></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="lanmask" label="Netmask" readonly></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-checkbox label="DHCP Server" v-model="dhcpserver" />
        </v-col>
        <v-col>
          <v-spacer />
        </v-col>
        <v-col>
          <v-text-field v-model="dhcpstart" label="Start Address" readonly></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="dhcpend" label="End Address" readonly></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "setup-basic-lan",
  created() {},
  data() {
    return {
      mode: "3",
      dhcpserver: true,
    };
  },
  props: {},
  methods: {},
  computed: {
    lanip() {
      return "10.1.2.3";
    },
    lanmask() {
      return "255.255.255.248";
    },
    dhcpstart() {
      return "50";
    },
    dhcpend() {
      return "54";
    },
  },
};
</script>

<style lang="scss" scoped></style>
