import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    DIALOG : false
  }),
  // optional getters
  getters: {
    getDialog(){
      return this.DIALOG
    }
  },
  // optional actions
  actions: {
    showDialog(){
      this.DIALOG = true;
    },
    closeDialog(){
      this.DIALOG = false;
      
    },
    toggleDialog(){
      this.DIALOG = !this.DIALOG;
    },
  },
})


export const useAuthStore = defineStore('auth', {
  // a function that returns a fresh state
  state: () => ({
    authenticated:false
  }),
  getters: {
  },
  actions: {
    async logout(){
      await this.$axios.post('/api/logout')
      this.authenticated = false
      // Remove tokens from local storage or cookies
      this.$cookies.remove('access_token')
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
    }
  },
})
