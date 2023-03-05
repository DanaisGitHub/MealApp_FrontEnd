import {useMainStore as mainStore} from './store/store';
export default defineNuxtConfig({
    modules:['@nuxtjs/tailwindcss','@pinia/nuxt'],
    // router: {// not working not protecting route
    //     middleware: 'authenticated',
    //     extendRoutes(resolve) {
    //       routes.push({
    //         name: 'login',
    //         path: '/login',
    //         component: resolve(__dirname, 'pages/login.vue')
    //       })
    //     }
    //   }
    
    
})