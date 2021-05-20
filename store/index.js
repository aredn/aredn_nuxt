export const state = () => ({
  authenticated: false,
  nodename: null
})

export const mutations = {
  toggle(state) {
    this.authenticated = !this.authenticated
  },
  setNodeName(state, nodename) {
    state.nodename = nodename
  }
}
