export const state = () => ({
  nodes: [],
  remotenodes: [],
  localnodes: [],
  currentneighbors: []
})

export const mutations = {
  addNodes(state, nodes) {
    state.nodes = nodes
  },
  addLocalNodes(state, nodes) {
    state.localnodes = nodes
  },
  addRemoteNodes(state, nodes) {
    state.remotenodes = nodes
  },
  addCurrentNeighbors(state, nodes) {
    state.currentneighbors = nodes
  }
}

export const actions = {}

export const getters = {
  getNodes(state) {
    return state.nodes;
  },
  getLocalNodes(state) {
    return state.localnodes;
  },
  getRemoteNodes(state) {
    return state.remotenodes;
  },
  getCurrentNeighbors(state) {
    return state.currentneighbors;
  },
  getNodesFiltered: (state) => (nodename) => {
    return state.nodes.filter(node => node.name.includes(nodename));
  },
}
