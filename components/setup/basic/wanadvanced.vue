<template>
  <v-card flat>
    <v-card-title>WAN Advanced</v-card-title>
    <v-card-subtitle>Define advanced WAN settings</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-checkbox label="Allow others to use my WAN connection" v-model="meshgw" />
        </v-col>
        <v-col>
          <v-checkbox
            label="Prevent LAN devices from accessing the WAN"
            v-model="preventlan2wan"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Setup-WAN-Advanced",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
