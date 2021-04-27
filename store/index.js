export const state = () => ({
    authenticated: false
  })
  
  export const mutations = {
    toggle(state) {
      this.authenticated=!this.authenticated
    }
  }
  