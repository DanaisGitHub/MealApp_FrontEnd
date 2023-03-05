import { useAuthStore } from '../store/store';
import { Middleware } from '@nuxt/types'

export const authMiddleware:Middleware = ({ redirect }) => {

    const authStore = useAuthStore();
    if (!authStore.$state.authenticated){
        // maybe ask the server to log you out aswell
        return redirect('/login');
    }
}