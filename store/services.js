export const state = () => ({
  services: [],
})

export const mutations = {
  add(state, services) {
    state.services = services
  }
}

export const actions = {}

export const getters = {
  getServices(state) {
    return state.services;
  },
  getServicesByHost: (state) => (host) => {
    return state.services.filter(service => service.hostname == host);
  },
  getServicesByIp: (state) => (ip) => {
    return state.services.filter(service => service.ip == ip);
  },
}
