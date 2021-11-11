<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>{{ $options.name }}</v-toolbar-title>
    </v-toolbar>
    <SetupTunnelsOut />
  </v-container>
</template>

<script>
export default {
  name: "Outbound Tunnels",
  middleware: "authenticated",
  data: () => ({}),
};
</script>
