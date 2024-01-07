<template>
    <div class="container relative">
        <h2 class="text-center text-3xl font-bold mb-14 mt-14 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">Mahsulotlar</h2>
        <div class="grid xl:grid-cols-3 grid-cols-2 xl:gap-5 gap-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
            <div class="border border-gray-300 xl:px-5 py-5 px-3  rounded-lg hover:-translate-y-2 transition hover:shadow-2xl "  >
                <div class="xl:w-[290px] w-[150px]  rounded-full mx-auto p-[10px]">
                    <img  src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="product">
                </div>
                <p class="font-semibold text-[#4070f4] text-lg xl:text-xl text-center mt-2">Rotband <br class="block md:hidden"> uchun gips</p>
                <button @click="() => emit('openDrawer')" class="bg-[#007BFF] w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                    Malumot olish
                </button>
            </div>
            <div class="border border-gray-300 xl:px-5 py-5 px-3  rounded-lg hover:-translate-y-2 transition hover:shadow-2xl ">
                <div class="xl:w-[290px] w-[150px]  rounded-full mx-auto p-[10px]">
                    <img  src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="product">
                </div>
                <p class="font-semibold text-[#4070f4] text-lg xl:text-xl text-center mt-2">Shpaklofka <br class="block md:hidden">uchun gips </p>
                <button @click="() => emit('openDrawer')" class="bg-[#007BFF] w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                    Malumot olish
                </button>
            </div>
            <div class="border border-gray-300 xl:px-5 py-5 px-3  rounded-lg hover:-translate-y-2 transition hover:shadow-2xl " >
                <div class="xl:w-[290px] w-[150px]  rounded-full mx-auto p-[10px]">
                    <img  src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="product">
                </div>
                <p class="font-semibold text-[#4070f4] text-lg xl:text-xl text-center mt-2">Penablok <br class="block md:hidden"> uchun gips</p>
                <button @click="() => emit('openDrawer')"  class="bg-[#007BFF] w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                    Malumot olish
                </button>
            </div>
        </div>

        
    </div>
</template>
<script setup>
    const emit = defineEmits(['openDrawer'])
</script>
<style lang="">
    
</style>