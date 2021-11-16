<template>
  <v-card flat>
    <v-card-title>LAN</v-card-title>
    <v-card-subtitle>Define the settings for LAN</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <v-radio-group
            label="Mode"
            v-model="info.mode"
            @change="changeLanMode()"
            row
            dense
          >
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
          <v-text-field
            v-model="lanip"
            label="IP Address"
            :readonly="info.mode != 0"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="lanmask"
            label="Netmask"
            :readonly="info.mode != 0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-checkbox label="DHCP Server" v-model="info.dhcp" />
        </v-col>
        <v-col>
          <v-spacer />
        </v-col>
        <v-col>
          <v-text-field
            v-model="dhcpstart"
            label="Start Address"
            readonly
            v-show="info.dhcp == true"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="dhcpend"
            label="End Address"
            readonly
            v-show="info.dhcp == true"
          ></v-text-field>
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
      lanip: "",
      lanmask: "",
    };
  },
  props: {
    info: {},
  },
  methods: {
    changeLanMode() {
      switch (parseInt(this.info.mode)) {
        case 0: // NAT
          this.lanip = "172.27.0.1";
          this.lanmask = "255.255.255.0";
          break;
        case 2: // 1 host
          this.lanip = "";
          this.lanmask = "";
          break;
        case 3: // 5 host
          this.lanip = "";
          this.lanmask = "";
          break;
        case 4: // 13 host
          this.lanip = "";
          this.lanmask = "";
          break;
        case 5: // 29 host
          this.lanip = "";
          this.lanmask = "";
          break;
        default:
          break;
      }
    },
  },
  computed: {
    dhcpstart() {
      return "xx";
    },
    dhcpend() {
      return "yy";
    },
  },
};
</script>

<style lang="scss" scoped></style>
