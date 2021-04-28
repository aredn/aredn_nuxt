<template>
  <v-card flat>
    <v-card-text>
      <h3>LAN</h3>
      <p>Mode</p>
      <p>IP Address (read-only)</p>
      <p>Netmask (read-only)</p>
      <p>DHCP Server</p>
      <p>DHCP Start (read-only)</p>
      <p>DHCP End (read-only)</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "setup-basic-lan-basic",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
