<template>
    <button @click="showDialog">safddsf</button>
    <div class="relative">
        <teleport to='body'>
            <div @click="exitButton" class="absolute h-full w-full opacity-50 bg-black  flex justify-center top-0 left-0 items-center flex-row"
                v-if="DIALOG"> <!--@click needs to be able to be toggled on/off-->
                <BaseCard>
                    HELLO MOTHER
                    <div v-if="hasXButton" class=" border-8 border-yellow-50"><button class="w-full h-full" @click="exitButton" >XX</button></div>
                </BaseCard>
                <slot></slot>
            </div>
        </teleport>

    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainStore } from '../store/store';
const mainStore = useMainStore();

const props = defineProps({
    hasXButton:{ type: Boolean, default: true},
})

let {DIALOG} = storeToRefs(mainStore) // not updating

const showDialog = ()=>{
    mainStore.showDialog();
    console.log(DIALOG)
    console.log(mainStore.DIALOG)
}

const exitButton = ()=>{
    mainStore.closeDialog();
    console.log(DIALOG)
}



</script>

<style scoped></style>