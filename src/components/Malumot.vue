<script setup>
import { inject } from "vue";
import MalumotlarHead from './MalumotlarHead.vue'
import MalumotlarItem from './MalumotlarItem.vue'

const items = [
    {
        id: 1,
        name: 'Qurilish Gipsi ',
        timeMin: '6-11 min',
        timeMax: '11-18 min',
        white: '86%',
        maydalanish:'0.8%'
    }
]

const {closeMalumot} = inject('malumot')
</script>
<template>
    <div @click="closeMalumot" class="bg-black fixed left-0 top-0 w-full h-full z-10 bg-opacity-40"></div>
    <div class="bg-white xl:w-96 w-9/12 h-full fixed right-0 top-0 px-8  z-20 overflow-y-auto">
        <MalumotlarHead/>

        <div class="flex flex-col flex-1 gap-4 pb-8">
            
            <MalumotlarItem v-for="item in items" :key="item.id" :timemax="item.timeMax" :name="item.name" :timemin="item.timeMin" :white="item.white" :maydalanish="item.maydalanish"/>

        </div>
    </div>
</template>