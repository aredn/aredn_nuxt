<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-col cols="2">
        <BaseAlert 
          color="red" 
          title="AREDN Alert"
          icon="mdi-alert"
          v-show="alert.aredn !== ''"
          >{{ alert.aredn }}</BaseAlert>
      </v-col>
      <v-col cols="2">
        <BaseAlert
          color="amber" 
          title="Local Alert"
          icon="mdi-alert-outline" 
          class="darken-2"
          v-show="alert.local !== ''"
        >{{ alert.local }}</BaseAlert>
      </v-col>
      <v-col cols="1">
        <v-icon color="red">mdi-wifi</v-icon>
      </v-col>
      <v-col cols="1">
        <v-switch @click="toggleTheme" v-model="darkmode" label="Dark" />
      </v-col>
      <v-col cols="1">
      <a href="http://www.arednmesh.org">
        <v-img
          src="/aredn_logo.png"
          max-height="40"
          max-width="80"
          alt="AREDNMesh.org"
          class="ma-2 pa-2 grey rounded"
        />
      </a>
      </v-col>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Amateur Radio Emergency Data Network, Inc.</span>
    </v-footer>
  </v-app>
</template>

<script>
import BaseAlert from "~/components/common/BaseAlert";

// const dataService = "/api?common=sysinfo,alerts";

export default {
  components: {
    // AREDNAlert,
    BaseAlert
  },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-information',
          title: 'Status',
          to: '/'
        },
        {
          icon: 'mdi-spider-web',
          title: 'Nodes',
          to: '/nodes'
        },
        {
          icon: 'mdi-apps',
          title: 'Services',
          to: '/services'
        },
        {
          icon: 'mdi-signal',
          title: 'Signal Chart',
          to: '/signal'
        },
        {
          icon: 'mdi-wifi',
          title: 'WiFi Scan',
          to: '/wifiscan'
        },
        {
          icon: 'mdi-arrow-down-bold-circle',
          title: 'Inbound Tunnels',
          to: '/tunnelsin'
        },
        {
          icon: 'mdi-arrow-up-bold-circle',
          title: 'Outbound Tunnels',
          to: '/tunnelsout'
        },
        {
          icon: 'mdi-cog',
          title: 'Setup',
          to: '/setup'
        },
        {
          icon: 'mdi-account-supervisor',
          title: 'About',
          to: '/about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "[nodename]",
      info: {},
      alert: {
        aredn: "",
        local: ""
      },
      darkmode: true
    }
  },
  computed: {
    isMeshConnected() {
      return true;
    },
    hasLocalAlert() {
      return (this.aredn.local ==="" ? true : false)
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = this.darkmode;
    }
  },
  async fetch() {
    // this.info = await $http.$get('http://localnode.local.mesh:8080/cgi-bin/api?common=sysinfo,alerts')
    // this.info = await fetch(dataService)
    this.info = await fetch('http://localnode.local.mesh:8080/cgi-bin/api?common=sysinfo,alerts')
      .then(res => res.json());
    this.title = this.info.pages.common.sysinfo.node;
    this.alert.aredn = this.info.pages.common.alerts.aredn;
    this.alert.local = this.info.pages.common.alerts.local;
    console.log(this.info);
  }
}
</script>
