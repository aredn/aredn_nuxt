<template>
  <div>
    <v-row justify="center">
      <v-col class="text-center">
          <h1>Nodes</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
        <v-data-table
          :headers="headers"
          :items="nodes"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Interface', value: 'iface' },
          { text: 'ETX', value: 'etx' },
        ],
        nodes: [
          {
            name: 'node1',
            interface: 'tun1',
            etx: 1.0,
          },
          {
            name: 'node2',
            interface: 'tun1',
            etx: 15.0,
          },
          {
            name: 'node3',
            interface: 'tun1',
            etx: 1.3,
          },
          {
            name: 'node4',
            interface: 'tun1',
            etx: 1.1,
          },
          {
            name: 'node5',
            interface: 'tun1',
            etx: 1.2,
          },
          {
            name: 'node6',
            interface: 'tun1',
            etx: 4.0,
          },
        ],
      }
    },
  }
</script>