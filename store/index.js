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

  nodeData: initNodeData(),
  nodeList: {},
})

export const getters = {
  isLoaded: (state) => (name) => {
    if (!state.nodeData.hasOwnProperty(name)) {
      throw 'unknown node data resource: ' + name
    }

    return state.nodeData[name].loaded
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
  apiUrl: (state, getters) => (qs) => {
    return scheme + getters.activeNode + nodeDomainName + nodePort + '/cgi-bin/api?' + qs
  },
  legacyUrl(state, getters) {
    return scheme + getters.activeNode + nodeDomainName + nodePort + '/cgi-bin/status'
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
  async loadResources({ getters, commit, state }, resources) {
    const nodeData = state.nodeData

    // Collect all requested resources that are not loaded or not cacheable
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
    const url = getters.apiUrl(qs)
    console.log('loading resources:' + url)

    const data = (await this.$axios.get(url)).data

    Object.entries(data.pages).forEach(([k, v]) => {
      Object.entries(v).forEach(x => commit('SET_NODE_DATA', x))
    })
  },
  expireResource({ commit }, resource) {
    commit('EXPIRE_NODE_DATA', resource)
  },
  async traceroute({ commit, getters }, node) {
    const url = getters.apiUrl('traceroute=' + node)
    console.log('loading traceroute:' + url)

    const data = (await this.$axios.get(url)).data

    return data.pages.traceroute[node]
  }
}

export const mutations = {
  toggle(state) {
    state.authenticated = !state.authenticated
  },
  setActiveNode(state, nodename) {
  },

  EXPIRE_NODE_DATA(state, resource) {
    const nodeData = state.nodeData

    if (!nodeData.hasOwnProperty(resource)) {
      throw 'unknown node data resource: ' + resource
    }

    nodeData[resource].value = structuredClone(resourceList[resource].init)
    nodeData[resource].loaded = false
  },

  SET_NODE_DATA(state, [resource, value]) {
    const nodeData = state.nodeData

    if (!nodeData.hasOwnProperty(resource)) {
      throw 'unknown node data resource: ' + resource
    }

    nodeData[resource].value = value
    nodeData[resource].loaded = true
  }
}
