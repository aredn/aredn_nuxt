<template>
  <v-card flat>
    <v-card-title>Mesh RF</v-card-title>
    <v-card-subtitle>Define the basic settings for mesh RF</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col><v-checkbox v-model="enabled" label="Mesh RF Enable"></v-checkbox></v-col>
        <v-col><v-spacer /></v-col>
        <v-col>
          <v-text-field
            v-model="ssid"
            label="SSID Prefix"
            :counter="20"
            placeholder="AREDN"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Generated SSID" readonly v-model="fullSSID" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="ip"
            label="IP Address"
            :counter="15"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="netmask"
            label="Netmask"
            :counter="15"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select :items="channels" label="Channel" />
        </v-col>
        <v-col>
          <v-radio-group label="Bandwidth" v-model="bw" row dense>
            <v-radio label="5" value="5"></v-radio>
            <v-radio label="10" value="10"></v-radio>
            <v-radio label="20" value="20"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col>
          <v-slider label="Power" thumb-label="always"></v-slider>
          <!-- <v-select :items="power" label="TX Power (in dBm)"></v-select> -->
        </v-col>
        <v-col>
          <v-slider v-model="distance" label="Distance" thumb-label="always"></v-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Setup-Basic",
  created() {},
  data() {
    return {
      enabled: true,
      ip: "10.10.20.30",
      netmask: "255.0.0.0",
      ssid: "AREDN",
      distance: 0,
      channel: "",
      bw: "5",
      channels: [
        { text: "-2 (2397 Mhz)", value: "-2" },
        { text: "-1 (2402 Mhz)", value: "-1" },
        { text: "0 (2407 Mhz)", value: "0" },
        { text: "1 (24xx Mhz)", value: "1" },
        { text: "2 (24xx Mhz)", value: "2" },
        { text: "3 (24xx Mhz)", value: "3" },
        { text: "4 (24xx Mhz)", value: "4" },
        { text: "5 (24xx Mhz)", value: "5" },
        { text: "6 (24xx Mhz)", value: "6" },
      ],
      channelbws: [5, 10, 20],
      power: [3, 4, 5, 6, 7, 8, 9, 10, 20, 21, 22],
    };
  },
  props: {},
  computed: {
    fullSSID() {
      return this.ssid + "-" + this.bw + "-v3";
    },
  },
  methods: {
    submit() {
      alert("submit");
    },
    clear() {
      this.enabled = "";
      this.ip = "";
      this.netmask = "";
      this.ssid = "AREDN";
      this.distance = 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
