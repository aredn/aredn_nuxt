<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="clients"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:item.enabled="{ item }">
        <v-simple-checkbox v-model="item.enabled"></v-simple-checkbox>
      </template>
      <template v-slot:item.active="{ item }">
        <v-icon v-show="item.active">mdi-cloud-check-outline</v-icon>
        <v-icon v-show="item.active === false">mdi-cloud-outline</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: "Enabled", value: "enabled" },
      { text: "Server", value: "server" },
      { text: "Password", value: "password" },
      { text: "Net", value: "net" },
      { text: "Active", value: "active" },
      { text: "Action", value: "action" },
      { text: "Comment", value: "comment" },
    ],
    clients: [
      {
        enabled: true,
        server: "server1.noip.me",
        password: "12345",
        net: "172.31.x.x",
        active: true,
        action: "",
        comment: "",
      },
      {
        enabled: false,
        server: "server2.noip.me",
        password: "12345",
        net: "172.31.x.y",
        active: false,
        action: "",
        comment: "",
      },
      {
        enabled: true,
        server: "server3.noip.me",
        password: "12345",
        net: "172.31.x.z",
        active: false,
        action: "",
        comment: "",
      },
    ],
  }),
};
</script>
