export const state = () => ({
  nodes: [],
})

export const mutations = {
  add(state, nodes) {
    state.nodes = nodes
  }
}

export const actions = {}

export const getters = {
  getNodes(state) {
    return state.nodes;
  },
  getNodesFiltered: (state) => (nodename) => {
    return state.nodes.filter(node => node.name.includes(nodename));
  },
}
