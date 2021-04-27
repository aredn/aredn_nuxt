<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
            <v-row no-gutters>
              <v-col cols="4"> Connection #1: {{ trip.name }} </v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open" key="0">
                    Enter a name for this tunnel connection
                  </span>
                  <span v-else key="1">
                    {{ trip.name }}
                  </span>
                </v-fade-transition>
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            v-model="trip.name"
            placeholder="AREDN Global Tunnel"
          ></v-text-field>
          <v-text-field v-model="trip.ip" placeholder="172.73.32.123"></v-text-field>
          <v-text-field v-model="trip.pass" placeholder="password"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
            <v-row no-gutters>
              <v-col cols="4"> Connection #2: {{ trip.name }} </v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open" key="0">
                    Enter a name for this tunnel connection
                  </span>
                  <span v-else key="1">
                    {{ trip.name }}
                  </span>
                </v-fade-transition>
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            v-model="trip.name"
            placeholder="AREDN Global Tunnel"
          ></v-text-field>
          <v-text-field v-model="trip.ip" placeholder="172.73.32.123"></v-text-field>
          <v-text-field v-model="trip.pass" placeholder="password"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    date: null,
    trip: {
      name: "",
      location: null,
      start: null,
      end: null,
    },
    locations: ["Australia", "Barbados", "Chile", "Denmark", "Ecuador", "France"],
  }),
};
</script>
