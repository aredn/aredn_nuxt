export const state = () => ({
  authenticated: false,
  nodeName: null,
  tacticalName: null,
  nodeDescription: null
})

export const mutations = {
  toggle(state) {
    state.authenticated = !state.authenticated;
  },
  setNodeName(state, nodename) {
    state.nodeName = nodename;
  },
  setTacticalName(state, tacname) {
    state.tacName = tacname
  },

  setNodeDescription(state, nodedesc) {
    state.nodeDescripion = nodedesc;
  }
}

export const getters = {
  getNodeName(state) {
    return state.nodeName;
  },
  getTacticalName(state) {
    return state.tacName;
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
}
