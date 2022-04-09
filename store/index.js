export const state = () => ({
  authenticated: false,
  nodeName: null,
  nodeDescription: null,
  activeNode: "localnode",
  apiRoot: null
})

export const mutations = {
  toggle(state) {
    state.authenticated = !state.authenticated;
  },
  setNodeName(state, nodename) {
    state.nodeName = nodename;
  },
  setNodeDescription(state, nodedesc) {
    state.nodeDescripion = nodedesc;
  },
  setActiveNode(state, nodename) {
    state.activeNode = nodename;
  },
}

export const getters = {
  getNodeName(state) {
    return state.nodeName;
  },
  getFQNodeName(state) {
    return `${state.nodeName}.local.mesh`;
  },
  getNodeDescription(state) {
    return state.nodeDescription;
  },
  getShortNodeDescription(state) {
    return String(state.nodeDescription).substring(0, 25);
  },
  isAuthenticated(state) {
    return state.authenticated;
  },
  getActiveNode(state) {
    return state.activeNode;
  },
  getApiRoot(state) {
    return "http://" + state.activeNode + ".local.mesh:8080/cgi-bin"
  }
}
