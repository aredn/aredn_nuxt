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
        <v-list-item to="/index2" router exact>
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Status</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 
        <v-list-item to="/nodes" router exact>
          <v-list-item-action>
            <v-icon>mdi-spider-web</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mesh Nodes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/services" router exact>
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mesh Services</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          prepend-icon="mdi-cloud-outline"
          no-action
          v-show="isAuthenticated()"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Tunnels</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item to="/tunnelsin" router exact>
            <v-list-item-action>
              <v-icon>mdi-arrow-down-bold-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Inbound</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/tunnelsout" router exact>
            <v-list-item-action>
              <v-icon>mdi-arrow-up-bold-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Outbound</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group prepend-icon="mdi-tools" no-action v-show="isAuthenticated()">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Setup</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item to="/setup" router exact>
            <v-list-item-action>
              <v-icon>mdi-star-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Basic</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/setupopt" router exact>
            <v-list-item-action>
              <v-icon>mdi-star-cog-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Optional</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/setupadv" router exact>
            <v-list-item-action>
              <v-icon>mdi-database-cog-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Advanced</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        -->
        <v-list-item to="/about" router exact>
          <v-list-item-action>
            <v-icon>mdi-account-supervisor</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="nodeName" />&nbsp;
      <!-- [<v-toolbar-title class="font-weight-thin" v-text="desc" />] -->
      <v-spacer />
      <v-col cols="1">
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
      </v-col>
      <v-col cols="2">
        <v-btn small light :href="legacyUrl">Go to Legacy UI</v-btn>
      </v-col>
      <v-col cols="1">
        <v-switch @click="toggleTheme" v-model="darkmode" label="Dark" />
      </v-col>
      <v-col cols="2">
        <v-select
          dense
          label="Active Node"
          no-data-text="Click the Refresh icon to load this list"
          :items="nodelist"
          @change="changeActiveNode()"
          v-model="selectedNode"
        ></v-select>
        <!-- 
        <v-btn class="mx-2" fab dark small color="primary" @click="toggleAuthenticated()">
          <v-icon v-if="isAuthenticated()" dark> mdi-lock </v-icon>
          <v-icon v-else dark> mdi-lock-open-variant </v-icon>
        </v-btn>
        -->
      </v-col>
      <v-col cols="1">
        <v-btn
          class="mx-2"
          fab
          dark
          x-small
          color="primary"
          @click="getListOfRemoteNodes()"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <a href="http://www.arednmesh.org">
          <v-img
            src="/aredn_logo.svg"
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
        >&copy; {{ new Date().getFullYear() }} Amateur Radio Emergency Data
        Network, Inc.</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import BaseAlert from '~/components/common/BaseAlert'
import { mapMutations, mapGetters } from 'vuex'

const dataService = process.env.apiROOT + '/api?common=sysinfo,alerts'
const dataUrl = '/api?common=sysinfo,alerts'
// const dataService = "http://localnode.local.mesh:8080/cgi-bin/api?common=sysinfo,alerts";

export default {
  components: {
    // AREDNAlert,
    BaseAlert,
  },
  data() {
    return {
      selectedNode: 'localnode',

      clipped: true,
      drawer: true,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      info: {},
      alert: {
        aredn: '',
        local: '',
      },
      authenticated: false,
      darkmode: true,
      olsrnodes: 0,
      nodelist: [],
    }
  },
  computed: {
    isMeshConnected() {
      return true
    },
    legacyUrl() {
      return this.getApiRoot() + '/status'
    },
    ...mapGetters({
      nodeName: 'getNodeName',
      nodeDescription: 'getNodeDescription',
      shortNodeDescription: 'getShortNodeDescription',
    }),
  },
  methods: {
    debug() {
      return JSON.stringify(process.env.apiROOT)
    },
    toggleTheme() {
      this.$vuetify.theme.dark = this.darkmode
    },
    isAuthenticated() {
      return this.$store.state.authenticated
    },
    toggleAuthenticated() {
      this.toggle()
    },
    changeActiveNode() {
      this.setActiveNode(this.selectedNode)
      this.$fetch()
      this.$nuxt.refresh()
    },
    async getListOfRemoteNodes() {
      var nlist = []
      var fulllist = await fetch(
        'http://localnode.local.mesh:8080/cgi-bin/api?mesh=remotenodes'
      ).then((res) => res.json())
      this.nodelist = fulllist.pages.mesh.remotenodes
        .map(function (node) {
          return node.name
        })
        .sort()
      this.addRemoteNodes(this.nodelist)
    },
    ...mapGetters({
      getApiRoot: 'getApiRoot',
      getRemoteNodes: 'nodes/getRemoteNodes',
    }),
    ...mapMutations({
      toggle: 'toggle',
      setNodeName: 'setNodeName',
      setNodeDescription: 'setNodeDescription',
      setActiveNode: 'setActiveNode',
      addRemoteNodes: 'nodes/addRemoteNodes',
    }),
  },
  async fetch() {
    //   this.info = await fetch(dataService).then((res) => res.json())
    this.info = await fetch(this.getApiRoot() + dataUrl).then((res) =>
      res.json()
    )
    try {
      this.alert.aredn = this.info.pages.common.alerts.aredn
      this.alert.local = this.info.pages.common.alerts.local
    } catch (error) {}
    this.setNodeName(this.info.pages.common.sysinfo.node)
    this.setNodeDescription(this.info.pages.common.sysinfo.description)
  },
}
</script>

<style>
/* roboto-100 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: url('/fonts/roboto-v27-latin-100.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('/fonts/roboto-v27-latin-100.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('/fonts/roboto-v27-latin-100.woff2') format('woff2'),
    /* Super Modern Browsers */ url('/fonts/roboto-v27-latin-100.woff')
      format('woff'),
    /* Modern Browsers */ url('/fonts/roboto-v27-latin-100.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('/fonts/roboto-v27-latin-100.svg#Roboto')
      format('svg'); /* Legacy iOS */
}

/* roboto-300 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/roboto-v27-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('/fonts/roboto-v27-latin-300.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('/fonts/roboto-v27-latin-300.woff2') format('woff2'),
    /* Super Modern Browsers */ url('/fonts/roboto-v27-latin-300.woff')
      format('woff'),
    /* Modern Browsers */ url('/fonts/roboto-v27-latin-300.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('/fonts/roboto-v27-latin-300.svg#Roboto')
      format('svg'); /* Legacy iOS */
}

/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/roboto-v27-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('/fonts/roboto-v27-latin-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('/fonts/roboto-v27-latin-regular.woff2') format('woff2'),
    /* Super Modern Browsers */ url('/fonts/roboto-v27-latin-regular.woff')
      format('woff'),
    /* Modern Browsers */ url('/fonts/roboto-v27-latin-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('/fonts/roboto-v27-latin-regular.svg#Roboto')
      format('svg'); /* Legacy iOS */
}

/* roboto-500 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/roboto-v27-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('/fonts/roboto-v27-latin-500.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('/fonts/roboto-v27-latin-500.woff2') format('woff2'),
    /* Super Modern Browsers */ url('/fonts/roboto-v27-latin-500.woff')
      format('woff'),
    /* Modern Browsers */ url('/fonts/roboto-v27-latin-500.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('/fonts/roboto-v27-latin-500.svg#Roboto')
      format('svg'); /* Legacy iOS */
}

/* roboto-700 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/roboto-v27-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('/fonts/roboto-v27-latin-700.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('/fonts/roboto-v27-latin-700.woff2') format('woff2'),
    /* Super Modern Browsers */ url('/fonts/roboto-v27-latin-700.woff')
      format('woff'),
    /* Modern Browsers */ url('/fonts/roboto-v27-latin-700.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('/fonts/roboto-v27-latin-700.svg#Roboto')
      format('svg'); /* Legacy iOS */
}

/* roboto-900 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url('/fonts/roboto-v27-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('/fonts/roboto-v27-latin-900.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('/fonts/roboto-v27-latin-900.woff2') format('woff2'),
    /* Super Modern Browsers */ url('/fonts/roboto-v27-latin-900.woff')
      format('woff'),
    /* Modern Browsers */ url('/fonts/roboto-v27-latin-900.ttf')
      format('truetype'),
    /* Safari, Android, iOS */ url('/fonts/roboto-v27-latin-900.svg#Roboto')
      format('svg'); /* Legacy iOS */
}
</style>
