<template>
  <div>
    <span
      v-for="(s, idx) in servicesByIp(ip)"
      :key="idx"
      v-show="servicesByIp(ip)"
    >
      <v-chip
        v-show="s.link"
        class="ma-1"
        label
        small
        link
        :href="s.link"
        target="_blank"
      >
        {{ s.name }}
      </v-chip>
      <v-chip v-show="s.link == ''" class="ma-1" label small outlined>
        {{ s.name }}
      </v-chip>
    </span>
    <span v-show="servicesByIp(ip).length == 0">
      No services available
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    ip: null,
  },
  computed: {
    ...mapGetters(['servicesByIp']),
  },
}
</script>
