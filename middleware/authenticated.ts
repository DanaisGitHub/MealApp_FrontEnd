import {useAuthStore} from '../store/store.ts'

export default function ({ redirect }) {
    const authStore = useAuthStore()
   
    // If user is not authenticated, redirect to login page
    if (!authStore.authenticated) {
        return redirect('/login')
      }
  }