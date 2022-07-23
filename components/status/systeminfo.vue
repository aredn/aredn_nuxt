<template>
  <v-card height="100%">
    <v-card-title class="headline">
      System
      <v-spacer />
      <v-icon color="blue">mdi-information</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col class="text-end" cols="4">
          <p class="label">Model:</p>
          <p class="label">Target Type:</p>
          <p class="label">Firmware Version:</p>
          <p class="label">API Version:</p>
          <p class="label">Node Date/time:</p>
          <p class="label">Description:</p>
        </v-col>
        <v-col cols="8">
          <p class="mb-0">
            {{ sysinfo.model === undefined ? 'N/A' : sysinfo.model }}
          </p>
          <p class="mb-0">
            {{ sysinfo.target_type === undefined ? 'N/A' : sysinfo.target_type }}
          </p>
          <p class="mb-0">
            {{
              sysinfo.firmware_version === undefined
                ? 'N/A'
                : sysinfo.firmware_version
            }}
          </p>
          <p class="mb-0">
            {{ sysinfo.api_version === undefined ? 'N/A' : sysinfo.api_version }}
          </p>
          <p class="mb-0">{{ sysinfo.date }} {{ sysinfo.time }}</p>
          <p class="mb-0">
            {{ sysinfo.description === undefined ? 'N/A' : sysinfo.description }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SystemInfo',
  methods: {},
  computed: {
    ...mapGetters(['sysinfo']),
  },
}
</script>

<style lang="css" scoped>
.label {
  margin-bottom: 0;
  font-weight: bold;
}
</style>
