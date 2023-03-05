import { useMainStore as mainStore } from './store/store';
import { defineNuxtConfig } from '@nuxt/bridge';




export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    // router: {
    //     options: {
    //         middleware: ['auth'],
    //     },
    // },
})