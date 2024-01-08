<template>
    <div>
        <div class="flex flex-col">

            <img class="h-[250px] mt-8 object-contain  float-left " src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="">
            <p class="text-xl capitalize mt-2"> <span class="text-[#4891ff]">Nomi</span> <br> <b> {{ name }}</b> </p>

            <div class="flex flex-1 flex-col mt-2 xl:w-[206px] ">
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Qotish Vaqti (min) :</p>
                    <b>{{ timemin }}</b>
                </div>
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Qotish Vaqti (max) :</p>
                    <b>{{ timemax }}</b>
                </div>
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Oqlik Darajasi :</p>
                    <b>{{ white }} </b>
                </div>
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Maydalanish Darajasi :</p>
                    <b>{{ maydalanish }} </b>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
 defineProps({
     id: Number,
     name: String,
     timemin: Number,
     timemax: Number,
     white: Number,
     maydalanish: Number
 })
</script>