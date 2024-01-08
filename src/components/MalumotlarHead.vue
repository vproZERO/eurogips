<script setup>
import { inject } from "vue";

    const {closeMalumot} = inject('malumot')
</script>
<template>
    <div class="flex items-center gap-5 fixed bg-white w-full py-2 ">
        <i class="fas fa-arrow-left text-slate-500 hover:-translate-x-1 transition cursor-pointer" @click="closeMalumot"></i>
        <h2 class="font-bold text-2xl">Malumotlar</h2>
    </div>
</template>