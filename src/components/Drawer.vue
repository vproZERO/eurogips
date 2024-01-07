<template>
    <div>
        <div @click="closeDrawer" class="bg-black fixed left-0 top-0 w-full h-full z-10 bg-opacity-40"></div>
        <div class="bg-white xl:w-1/2 xl:h-3/5 fixed xl:right-1/4 xl:top-1/4 z-20 p-8 rounded w-4/5 h-1/2 top-1/4 right-[10%]">
            <button @click="closeDrawer" class="absolute top-5 right-5">
                <i class="fas fa-times text-white text-xl absolute right-[-40px] top-[-50px] xl:right-[-50px] xl:top-[-50px] hover:-translate-y-1 transition"></i>
            </button>
            <h2 class="text-center font-bold xl:text-3xl mt-2">Telefon raqamingizni qoldiring</h2>
            <p class="text-center text-slate-500 xl:text-xl text-sm">Biz siz bilan albatta bog'lanamiz</p>
            <DrawerForm />
            
        </div>
    </div>
</template>
<script setup>
import DrawerForm from './DrawerForm.vue'
import { inject, ref } from "vue";


    const {closeDrawer} = inject('drawer')


    
</script>
<style lang="">
    
</style>