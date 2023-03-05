import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore({
  id: 'Main',
  state: () => ({
    DIALOG: false
  }),
  getters: {
  },
  actions: {
  }
})


export const useAuthStore = defineStore({
  id: 'Auth',
  // a function that returns a fresh state
  state: () => ({
    authenticated: false
  }),
  getters: {
    getAuth(): boolean {
      return this.authenticated;
    }
  },
  actions: {
    login() { // may need more to do.
      this.authenticated = true;
    },
    logout() {
      this.authenticated = false;
    }
  },
})
