<template>
  <div>
    <v-chip class="ma-1" small>{{ getNodeName }}</v-chip>
    <span v-if="$fetchState.pending" class="text-caption">Measuring...</span>
    <span v-for="(r, idx) in route" :key="idx" class="text-caption">
      {{ r.timedelta }}ms<v-chip
        link
        :href="makeLink(r.nodename)"
        :color="getColor(r.timedelta)"
        class="ma-1"
        small
        >{{ r.nodename }}</v-chip
      >
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const dataService = process.env.apiROOT + "/api?traceroute=";

export default {
  props: {
    node: null,
  },
  data() {
    return {
      route: {},
    };
  },
  computed: {
    ...mapGetters(["getNodeName"]),
  },
  methods: {
    getColor(td) {
      console.log(td);
      if (td > 400) {
        return "red";
      } else if (td > 200) {
        return "amber ";
      } else {
        return "";
      }
    },
    makeLink(nodename) {
      if (nodename) {
        return `http://${nodename}.local.mesh:8080`;
      } else {
        return `http://${this.$store.state.nodename}.local.mesh:8080`;
      }
    },
  },
  async fetch() {
    try {
      this.info = await fetch(dataService + this.node).then((res) => res.json());
      this.route = this.info.pages.traceroute[this.node];
    } catch (error) {
      console.log("ERROR: " + error);
    }
  },
};
</script>
