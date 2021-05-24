<template>
  <div>
    <span v-for="(s, idx) in servicesByIp(ip)" :key="idx" v-show="servicesByIp(ip)">
      <v-chip class="ma-1" label :href="s.link">
        {{ s.name }}
      </v-chip>
    </span>
    <span v-hide="servicesByIp(ip)">No services available</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    ip: null,
  },
  computed: {
    ...mapGetters({
      servicesByIp: "services/getServicesByIp",
    }),
  },
};
</script>
