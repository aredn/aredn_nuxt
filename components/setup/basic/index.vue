<template>
  <v-card flat>
    <v-card-title>Basic Info</v-card-title>
    <v-card-subtitle>Required info to setup this node.</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            :counter="25"
            label="Node Name"
            required
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="description"
            label="Node Description"
            :counter="50"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="password1"
            :type="password"
            label="Password"
            :counter="50"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="password2"
            :type="password"
            label="Verify Password"
            :counter="50"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "setup-basic",
  created() {},
  data() {
    return {
      name: "",
      description: "",
      password1: "",
      password2: "",
    };
  },
  props: {},
  computed: {},
  methods: {
    handleSubmit(d) {
      alert("submit!");
    },
    clear() {
      this.name = "";
      this.description = "";
      this.password1 = "";
      this.password2 = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
