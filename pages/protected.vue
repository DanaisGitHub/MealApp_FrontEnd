<template>
    <div>
        hello this is proteced and unless you are logged in you shouldn't be able to login <br> <br>
        Auth = 
    </div>
</template>

<script setup lang="ts"> 
// the setup thing is fucking you up
import { useAuthStore } from '../store/store';
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore();

let isAuth = computed(()=>authStore.getAuth)
console.log(`SDLKJFLSAKNLKDSAGLKSAGNLKKL${isAuth.value}`);
const beforeRouteEnter = () => {
  if (!isAuth.value) {
    router.replace('/login')
  }
}
beforeRouteEnter()
</script>



<style scoped></style>