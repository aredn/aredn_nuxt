export const state = () => ({
  hosts: [],
})

export const mutations = {
  add(state, hosts) {
    state.hosts = hosts
  }
}

export const actions = {}

export const getters = {
  getHosts(state) {
    return state.hosts;
  },
  getHost: (state) => (hostname) => {
    return state.hosts.filter(host => host.name == hostname);
  },
  getHostsFiltered: (state) => (hostname) => {
    return state.hosts.filter(host => host.name.includes(hostname));
  },
}
