<template>
  <div>
    <div>LOGIN PAGE</div>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
      @click="toggleAuthenticated()"
    >
      <v-icon v-if="isAuthenticated()" dark> mdi-lock-open-variant </v-icon>
      <v-icon v-else dark> mdi-lock </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Login',
  head() {
    return {
      title: this.$store.state.nodename + ' ' + this.$options.name,
    }
  },
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {
    ...mapActions(['loadResources', 'pageResources']),
    toggleAuthenticated() {
      this.toggle()
    },
    ...mapMutations({
      // addHosts: "hosts/add",
      toggle: 'toggle',
    }),
    ...mapGetters(['isAuthenticated']),
  },
  created() {
    this.pageResources(['allhosts'])
  },
  mounted() {
    this.loadResources()
  },
}
</script>

<style lang="scss" scoped></style>
