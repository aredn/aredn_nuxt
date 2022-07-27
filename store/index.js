const scheme = 'http://'
const nodeDomainName = '.local.mesh'
const nodePort = ':8080'
const resourceList = {
  alerts: {
    endpoint: 'common',
    init: {},
  },
  allhosts: {
    endpoint: 'mesh',
    init: [],
  },
  archive: {
    endpoint: 'chart',
    init: [],
  },
  // bynode: { // FIXME: Bad Gateway?
  //   endpoint: 'services',
  //   init: {},   // FIXME:
  // },
  // byservice: { // FIXME: Bad Gateway?
  //   endpoint: 'services',
  //   init: {},   // FIXME:
  // },
  currentneighbors: {
    endpoint: 'mesh',
    init: {},
  },
  freqlist: {
    endpoint: 'status',
    init: [],
  },
  ip: {
    endpoint: 'status',
    init: {},
  },
  localhosts: {
    endpoint: 'mesh',
    init: [],
  },
  location: {
    endpoint: 'status',
    init: {},
  },
  memory: {
    endpoint: 'status',
    init: {},
  },
  meshrf: {
    endpoint: 'status',
    init: {},
  },
  olsr: {
    endpoint: 'status',
    init: {},
  },
  previousneighbors: {
    endpoint: 'mesh',
    init: [],
  },
  realtime: {
    endpoint: 'chart',
    init: [],
  },
  remotenodes: {
    endpoint: 'mesh',
    init: [],
  },
  scanlist: {
    endpoint: 'scan',
    init: [],
  },
  services: {
    endpoint: 'mesh',
    init: [],
  },
  storage: {
    endpoint: 'status',
    init: {},
  },
  sysinfo: {
    endpoint: 'common',
    init: {},
  },
  topology: {
    endpoint: 'mesh',
    init: {},
  },
}

const initNodeData = () => {
  const newNodeData = {}

  Object.entries(resourceList).forEach(([k, v]) => {
    const data = {}

    data.value = structuredClone(v.init)
    data.loaded = false
    data.noCache = false

    newNodeData[k] = data
  })

  return newNodeData
}

export const state = () => ({
  authenticated: false,

  loading: false,
  globalResources: [],
  pageResources: [],
  hasError: false,
  errorString: null,
  hasApiMismatch: null,

  nodeData: initNodeData(),
  nodeList: {},
})

export const getters = {
  loading(state) {
    return state.loading
  },
  isLoaded: (state) => (name) => {
    if (!state.nodeData.hasOwnProperty(name)) {
      throw 'unknown node data resource: ' + name
    }

    return state.nodeData[name].loaded
  },
  hasError(state) {
    return state.hasError
  },
  errorString(state) {
    return state.errorString
  },
  hasApiMismatch(state) {
    return state.hasApiMismatch
  },

  nodeName(state) {
    return state.nodeData.sysinfo.value.node
  },
  fQNodeName(state) {
    return state.nodeData.sysinfo.value.node + nodeDomainName
  },
  nodeDescription(state) {
    return state.nodeData.sysinfo.value.description
  },
  shortNodeDescription(state) {
    return String(state.nodeData.sysinfo.value.description).substring(0, 25)
  },
  isAuthenticated(state) {
    return state.authenticated
  },

  activeNode(state) {
    return state.nodeData.sysinfo.loaded ? state.nodeData.sysinfo.value.node : 'localnode'
  },
  apiUrl: (state) => (node, qs) => {
    return scheme + node + nodeDomainName + nodePort + '/cgi-bin/api?' + qs
  },
  legacyUrl: () => (node) => {
    return scheme + node + nodeDomainName + nodePort + '/cgi-bin/status'
  },

  alerts(state) {
    return state.nodeData.alerts.value
  },
  allhosts(state) {
    return state.nodeData.allhosts.value
  },
  archive(state) {
    return state.nodeData.archive.value
  },
  bynode(state) {
    return state.nodeData.bynode.value
  },
  byservice(state) {
    return state.nodeData.byservice.value
  },
  currentneighbors(state) {
    return state.nodeData.currentneighbors.value
  },
  freqlist(state) {
    return state.nodeData.freqlist.value
  },
  hosts(state) {
    return state.nodeData.allhosts.value
  },
  host: (state) => (hostname) => {
    return state.nodeData.allhosts.value.filter(host => host.name == hostname)
  },
  hostsFiltered: (state) => (hostname) => {
    return state.nodeData.allhosts.value.filter(host => host.name.includes(hostname))
  },
  ip(state) {
    return state.nodeData.ip.value
  },
  localhosts(state) {
    return state.nodeData.localhosts.value
  },
  location(state) {
    return state.nodeData.location.value
  },
  memory(state) {
    return state.nodeData.memory.value
  },
  meshrf(state) {
    return state.nodeData.meshrf.value
  },
  olsr(state) {
    return state.nodeData.olsr.value
  },
  previousneighbors(state) {
    return state.nodeData.previousneighbors.value
  },
  realtime(state) {
    return state.nodeData.realtime.value
  },
  remotenodes(state) {
    return state.nodeData.remotenodes.value
  },
  remotenodeNames(state) {
    return state.nodeData.remotenodes.value.map((node) => node.name).sort()
  },
  scanlist(state) {
    return state.nodeData.scanlist.value
  },
  services(state) {
    return state.nodeData.services.value
  },
  servicesByIp: (state) => (ip) => {
    const servicesByIp = state.nodeData.services.value.filter(service => service.ip == ip)
    return servicesByIp
  },
  servicesFiltered: (state) => (servicename) => {
    return state.nodeData.services.value.filter(service => service.name.includes(servicename))
  },
  storage(state) {
    return state.nodeData.storage.value
  },
  sysinfo(state) {
    return state.nodeData.sysinfo.value
  },
  topology(state) {
    return state.nodeData.topology.value
  },
  traceroute(state) {
    return state.nodeData.traceroute.value
  },
}

export const actions = {
  setLoading({ commit }, value) {
    commit('SET_LOADING', value)
  },
  globalResources({ commit }, resources) {
    commit('SET_GLOBAL_RESOURCES', resources)
  },
  pageResources({ commit }, resources) {
    commit('SET_PAGE_RESOURCES', resources)
  },
  clearError({ commit }) {
    commit('CLEAR_ERROR')
  },
  clearApiMismatch({ commit }) {
    commit('SET_API_MISMATCH', null)
  },
  loadNode({ getters, commit, state }, node) {

    // Collect all requested resources that are not loaded or not cacheable
    const resources = [...state.globalResources, ...state.pageResources]
    const rb = {}
    resources.forEach(r => {
      const ep = resourceList[r].endpoint
      rb[ep] = rb[ep] ? [...rb[ep], r] : [r]
    })

    const qs = Object.entries(rb).map(([k, v]) => k + '=' + v.join(',')).join('&')
    const url = getters.apiUrl(node, qs)
    console.log('loading resources:' + url)

    commit('SET_LOADING', true)
    this.$axios.get(url).then(({ data }) => {
      commit('SET_LOADING', false)

      // check api_version

      const apiVersion = data.hasOwnProperty('api_version') ? parseFloat(data.api_version) : 0.0
      if (apiVersion < 1.4) {
        commit('SET_API_MISMATCH', node)
        return
      }

      commit('INIT_NODE_DATA')

      Object.entries(data.pages).forEach(([k, v]) => {
        Object.entries(v).forEach(x => commit('SET_NODE_DATA', x))
      })
    }).catch(error => {
      commit('SET_LOADING', false)
      commit('SET_ERROR', error)
    })
  },
  loadResources({ getters, commit, state }, resources) {
    const nodeData = state.nodeData

    // Collect all requested resources that are not loaded or not cacheable
    if (!resources) {
      resources = [...state.globalResources, ...state.pageResources]
    }
    const rb = {}
    resources.forEach(r => {
      if (!nodeData.hasOwnProperty(r)) {
        throw 'unknown node data resource: ' + r
      }

      if (!nodeData[r].loaded || nodeData[r].noCache) {
        const ep = resourceList[r].endpoint
        rb[ep] = rb[ep] ? [...rb[ep], r] : [r]
      }
    })

    // Check if any resources need to be loaded
    if (Object.keys(rb).length === 0) {
      console.log('resources ' + resources.join(',') + ' already loaded')
      return
    }

    const qs = Object.entries(rb).map(([k, v]) => k + '=' + v.join(',')).join('&')
    const url = getters.apiUrl(getters.activeNode, qs)
    console.log('loading resources:' + url)

    commit('SET_LOADING', true)
    this.$axios.get(url).then(({ data }) => {
      commit('SET_LOADING', false)

      Object.entries(data.pages).forEach(([k, v]) => {
        Object.entries(v).forEach(x => commit('SET_NODE_DATA', x))
      })
    }).catch(error => {
      commit('SET_LOADING', false)
      commit('SET_ERROR', error)
    })
  },
  expireResource({ commit }, resource) {
    commit('EXPIRE_NODE_DATA', resource)
  },
  async traceroute({ commit, getters }, node) {
    const qs = 'traceroute=' + node
    const url = getters.apiUrl(getters.activeNode, qs)
    console.log('loading traceroute:' + url)

    let result;

    commit('SET_LOADING', true)
    await this.$axios.get(url).then(({ data }) => {
      commit('SET_LOADING', false)

      result = data.pages.traceroute[node]
    }).catch(error => {
      commit('SET_LOADING', false)
      commit('SET_ERROR', error)
    })

    return result
  }
}

export const mutations = {
  toggle(state) {
    state.authenticated = !state.authenticated
  },

  INIT_NODE_DATA(state) {
    state.nodeData = initNodeData()
  },
  EXPIRE_NODE_DATA(state, resource) {
    const nodeData = state.nodeData

    if (!nodeData.hasOwnProperty(resource)) {
      throw 'unknown node data resource: ' + resource
    }

    nodeData[resource].value = structuredClone(resourceList[resource].init)
    nodeData[resource].loaded = false
  },
  SET_API_MISMATCH(state, hasApiMismatch) {
    state.hasApiMismatch = hasApiMismatch
  },
  SET_ERROR(state, error) {
    state.hasError = true
    state.errorString = error.message
  },
  CLEAR_ERROR(state) {
    state.hasError = false
  },
  SET_GLOBAL_RESOURCES(state, resources) {
    state.globalResources = resources
  },
  SET_LOADING(state, value) {
    state.loading = value
  },
  SET_NODE_DATA(state, [resource, value]) {
    const nodeData = state.nodeData

    if (!nodeData.hasOwnProperty(resource)) {
      throw 'unknown node data resource: ' + resource
    }

    nodeData[resource].value = value
    nodeData[resource].loaded = true
  },
  SET_PAGE_RESOURCES(state, resources) {
    state.pageResources = resources
  },
}
