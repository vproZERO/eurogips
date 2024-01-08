<template>
    <div>
        <div class="flex flex-col">

            <img class=" mt-8 object-cover  float-left " src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="">
            <p class="text-xl capitalize mt-2"> <span class="text-[#4891ff]">Qo'llanilishi: </span> <br> <b> {{ name }}</b> </p>

            <div class="flex flex-1 flex-col mt-2 xl:w-[206px] ">
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Qotish Vaqti (boshlanishi):</p>
                    <b>{{ timemin }}</b>
                </div>
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Qotish Vaqti (tugashi):</p>
                    <b>{{ timemax }}</b>
                </div>
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Oqlik Darajasi:</p>
                    <b>{{ white }} </b>
                </div>
                <div class="mt-3">
                    <p class="text-[#4891ff] text-xl">Mayinligi:</p>
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