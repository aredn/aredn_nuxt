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
          v-show="!item.auth || (isAuthenticated() && item.auth)"
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />&nbsp;[
      <v-toolbar-title class="font-weight-thin" v-text="desc" />]
      <v-spacer />
      <v-col cols="2">
        <BaseAlert
          color="red"
          title="AREDN Alert"
          icon="mdi-alert"
          v-show="alert.aredn !== ''"
          >{{ alert.aredn }}</BaseAlert
        >
      </v-col>
      <v-col cols="2">
        <BaseAlert
          color="amber"
          title="Local Alert"
          icon="mdi-alert-outline"
          class="darken-2"
          v-show="alert.local !== ''"
          >{{ alert.local }}</BaseAlert
        >
        <BaseAlert
          color="amber"
          title="DEBUG"
          icon="mdi-alert-outline"
          class="darken-2"
          >{{ debug }}</BaseAlert
        >
      </v-col>
      <v-col cols="1">
        <v-switch @click="toggleTheme" v-model="darkmode" label="Dark" />
      </v-col>
      <v-col cols="1">
        <v-btn class="mx-2" fab dark small color="primary" @click="toggleAuthenticated()">
          <v-icon v-if="isAuthenticated()" dark> mdi-lock </v-icon>
          <v-icon v-else dark> mdi-lock-open </v-icon>
        </v-btn>
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
    <v-footer :absolute="!fixed" app>
      <span
        >&copy; {{ new Date().getFullYear() }} Amateur Radio Emergency Data Network,
        Inc.</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import BaseAlert from "~/components/common/BaseAlert";
import { mapMutations } from "vuex";

// const dataService = "/api?common=sysinfo,alerts";
// const dataService = process.env.apiROOT + "/api?common=sysinfo,alerts";
const dataService = "http://localnode.local.mesh:8080/cgi-bin/api?common=sysinfo,alerts";

export default {
  components: {
    // AREDNAlert,
    BaseAlert,
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "mdi-information",
          title: "Status",
          to: "/",
          auth: false,
        },
        {
          icon: "mdi-spider-web",
          title: "Nodes",
          to: "/nodes",
          auth: false,
        },
        {
          icon: "mdi-apps",
          title: "Services",
          to: "/services",
          auth: false,
        },
        {
          icon: "mdi-signal",
          title: "Signal Chart",
          to: "/signal",
          auth: false,
        },
        {
          icon: "mdi-wifi",
          title: "WiFi Scan",
          to: "/scan",
          auth: false,
        },
        {
          icon: "mdi-arrow-down-bold-circle",
          title: "Inbound Tunnels",
          to: "/tunnelsin",
          auth: true,
        },
        {
          icon: "mdi-arrow-up-bold-circle",
          title: "Outbound Tunnels",
          to: "/tunnelsout",
          auth: true,
        },
        {
          icon: "mdi-cog",
          title: "Setup",
          to: "/setup",
          auth: false,
        },
        {
          icon: "mdi-file-upload",
          title: "Administration",
          to: "/admin",
          auth: false,
        },
        {
          icon: "mdi-account-supervisor",
          title: "About",
          to: "/about",
          auth: false,
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "...",
      desc: "...",
      info: {},
      alert: {
        aredn: "",
        local: "",
      },
      authenticated: false,
      darkmode: true,
      olsrnodes: 0,
    };
  },
  computed: {
    isMeshConnected() {
      return true;
    },
    debug() {
      return `apiROOT: ${process.env.apiROOT} process.env.NODE_ENV: ${
        process.env.NODE_ENV
      } process.env: ${JSON.stringify(process.env)}`;
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = this.darkmode;
    },
    isAuthenticated() {
      return this.$store.state.authenticated;
    },
    toggleAuthenticated() {
      this.toggle();
    },
    ...mapMutations({
      toggle: "toggle",
    }),
  },
  async fetch() {
    // this.info = await $http.$get('http://localnode.local.mesh:8080/cgi-bin/api?common=sysinfo,alerts')
    // this.info = await fetch('http://localnode.local.mesh:8080/cgi-bin/api?common=sysinfo,alerts')
    // this.info = await fetch('/api?common=sysinfo,alerts')
    this.info = await fetch(dataService).then((res) => res.json());
    this.title = this.info.pages.common.sysinfo.node;
    this.desc = this.info.pages.common.sysinfo.description;
    this.alert.aredn = this.info.pages.common.alerts.aredn;
    this.alert.local = this.info.pages.common.alerts.local;
  },
};
</script>

<style>
/* roboto-100 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 100;
  src: url("/fonts/roboto-v27-latin-100.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/roboto-v27-latin-100.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v27-latin-100.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v27-latin-100.woff") format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v27-latin-100.ttf") format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v27-latin-100.svg#Roboto") format("svg"); /* Legacy iOS */
}

/* roboto-300 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: url("/fonts/roboto-v27-latin-300.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/roboto-v27-latin-300.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v27-latin-300.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v27-latin-300.woff") format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v27-latin-300.ttf") format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v27-latin-300.svg#Roboto") format("svg"); /* Legacy iOS */
}

/* roboto-regular - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: url("/fonts/roboto-v27-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/roboto-v27-latin-regular.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v27-latin-regular.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v27-latin-regular.woff") format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v27-latin-regular.ttf") format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v27-latin-regular.svg#Roboto")
      format("svg"); /* Legacy iOS */
}

/* roboto-500 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: url("/fonts/roboto-v27-latin-500.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/roboto-v27-latin-500.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v27-latin-500.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v27-latin-500.woff") format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v27-latin-500.ttf") format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v27-latin-500.svg#Roboto") format("svg"); /* Legacy iOS */
}

/* roboto-700 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: url("/fonts/roboto-v27-latin-700.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/roboto-v27-latin-700.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v27-latin-700.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v27-latin-700.woff") format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v27-latin-700.ttf") format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v27-latin-700.svg#Roboto") format("svg"); /* Legacy iOS */
}

/* roboto-900 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: url("/fonts/roboto-v27-latin-900.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("/fonts/roboto-v27-latin-900.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v27-latin-900.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v27-latin-900.woff") format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v27-latin-900.ttf") format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v27-latin-900.svg#Roboto") format("svg"); /* Legacy iOS */
}
</style>
