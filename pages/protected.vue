<template>
    <div>
        hello this is proteced and unless you are logged in you shouldn't be able to login <br> <br>
        Auth = {{ isAuth }}
    </div>
</template>

<script setup lang="ts">
import {useAuthStore} from '../store/store';
const authStore = useAuthStore();

let isAuth = ref(authStore.$state.authenticated)

</script>

<style scoped>

</style>