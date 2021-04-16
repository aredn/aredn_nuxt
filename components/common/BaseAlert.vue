<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          :color="color"
          v-bind="attrs"
          v-on="on"
        ><v-icon>{{ icon }}</v-icon>{{ title }}
        </v-btn>
      </template>
      <v-card class="white" light>
        <v-card-title class="headline lighten-1" :class="color">
          {{ title }}
        </v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  name: "BaseAlert",
  inheritAttrs: false,
  created() {},
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    title: "",
    color: "",
    icon: ""
  }
};
</script>

<style lang="scss" scoped></style>