<template>
  <v-card flat>
    <v-form>
      <v-checkbox v-model="enabled" label="Mesh RF Enable"></v-checkbox>
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
          <v-text-field
            v-model="ssid"
            label="SSID Prefix"
            :counter="20"
            placeholder="AREDN"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col><v-select :items="channels" label="Channel" /></v-col>
        <v-col><v-select :items="channelbw" label="Channel Width"></v-select></v-col>
        <v-col><v-select :items="power" label="TX Power (in dBm)"></v-select></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider v-model="distance" label="Distance" thumb-label="always"></v-slider>
        </v-col>
      </v-row>
      <v-btn class="mr-4" @click="submit"> Save </v-btn>
      <v-btn @click="clear"> Clear </v-btn>
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
