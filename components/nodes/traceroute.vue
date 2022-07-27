<template>
  <div>
    <!-- <v-chip class="ma-1" small>{{ nodeName }}</v-chip> -->
    <span v-if="!route" class="text-caption"> Measuring... </span>
    <span v-for="(r, idx) in route" :key="idx" class="text-caption">
      {{ r.timedelta }}ms
      <v-chip
        link
        :href="makeLink(r.nodename)"
        :color="getColor(r.timedelta)"
        class="ma-1"
        small
      >
        {{ r.nodename }}
      </v-chip>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    node: null,
  },
  data() {
    return {
      route: null,
    }
  },
  computed: {
    ...mapGetters(['nodeName']),
  },
  methods: {
    ...mapActions(['traceroute']),
    getColor(td) {
      console.log(td)
      if (td > 200) {
        return 'red'
      } else if (td > 100) {
        return 'amber '
      } else {
        return ''
      }
    },
    makeLink(nodename) {
      if (nodename) {
        return `http://${nodename}.local.mesh:8080`
      } else {
        return `http://${this.$store.state.nodename}.local.mesh:8080`
      }
    },
  },
  async created() {
    const result = await this.traceroute(this.node)
    this.route = result
  },
}
</script>
