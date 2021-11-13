<template>
  <v-card flat>
    <v-form>
      <v-row>
        <v-col>
          <v-slider label="Channel" thumb-label="always"></v-slider>
          <!-- <v-select :items="channels" label="Channel" /> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-radio-group label="Bandwidth" v-model="row" row>
            <v-radio label="5 Mhz" value="5"></v-radio>
            <v-radio label="10 Mhz" value="10"></v-radio>
            <v-radio label="20 Mhz" value="20"></v-radio>
          </v-radio-group>
          <!-- <v-select :items="channelbw" label="Channel Width"></v-select -->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider label="Power" thumb-label="always"></v-slider>
          <!-- <v-select :items="power" label="TX Power (in dBm)"></v-select> -->
        </v-col>
        <v-col>
          <v-slider v-model="distance" label="Distance" thumb-label="always"></v-slider>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "Setup-Basic",
  created() {},
  data() {
    return {
      enabled: true,
      ip: "",
      netmask: "",
      ssid: "AREDN",
      distance: 0,
      channels: [-2, -1, 0, 1, 2, 3, 4, 5, 6],
      channelbw: [5, 10, 20],
      power: [3, 4, 5, 6, 7, 8, 9, 10, 20, 21, 22],
    };
  },
  props: {},
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
