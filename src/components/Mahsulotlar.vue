<template>
    <div class="container relative">
        <h2 class="text-center text-3xl font-bold mb-14 mt-14 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">Mahsulotlar</h2>
        <div class="grid xl:grid-cols-3 grid-cols-2 xl:gap-5 gap-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
            <div class="border border-gray-300 xl:px-5 py-5 px-3  rounded-lg hover:-translate-y-2 transition hover:shadow-2xl "  >
                <div class="xl:w-[290px] w-[150px]  rounded-full mx-auto p-[10px]">
                    <img  src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="product">
                </div>
                <p class="font-semibold text-[#4070f4] text-lg xl:text-xl text-center mt-2">Rotband <br class="block md:hidden"> uchun gips</p>
                <div class="xl:flex items-center justify-between gap-2 mt-2">
                    <button @click="() => emit('openMalumot')" class="bg-green-500 text-sm xl:text-lg w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                        Malumot olish
                    </button>
                    <button @click="() => emit('openDrawer')" class="bg-[#007BFF] text-sm xl:text-lg w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                        Ariza qoldirish
                    </button>
                </div>
            </div>
            <div class="border border-gray-300 xl:px-5 py-5 px-3  rounded-lg hover:-translate-y-2 transition hover:shadow-2xl ">
                <div class="xl:w-[290px] w-[150px]  rounded-full mx-auto p-[10px]">
                    <img  src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="product">
                </div>
                <p class="font-semibold text-[#4070f4] text-lg xl:text-xl text-center mt-2">Shpaklofka <br class="block md:hidden">uchun gips </p>
                <div class="xl:flex items-center justify-between gap-2 mt-2">
                    <button @click="() => emit('openMalumot')" class="bg-green-500 text-sm xl:text-lg w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                        Malumot olish
                    </button>
                    <button @click="() => emit('openDrawer')" class="bg-[#007BFF] text-sm xl:text-lg w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                        Ariza qoldirish
                    </button>
                </div>
            </div>
            <div class="border border-gray-300 xl:px-5 py-5 px-3  rounded-lg hover:-translate-y-2 transition hover:shadow-2xl " >
                <div class="xl:w-[290px] w-[150px]  rounded-full mx-auto p-[10px]">
                    <img  src="https://eurogips.uz/assets/img/product/shpaklofka%20uchun%20gips.jpg" alt="product">
                </div>
                <p class="font-semibold text-[#4070f4] text-lg xl:text-xl text-center mt-2">Penablok <br class="block md:hidden"> uchun gips</p>
                <div class="xl:flex items-center justify-between gap-2 mt-2">
                    <button @click="() => emit('openMalumot')" class="bg-green-500 text-sm xl:text-lg w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                        Malumot olish
                    </button>
                    <button @click="() => emit('openDrawer')" class="bg-[#007BFF] text-sm xl:text-lg w-full px-5 py-2 flex items-center justify-center text-white rounded-lg mt-2 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                        Ariza qoldirish
                    </button>
                </div>
            </div>
        </div>

        
    </div>
</template>
<script setup>
    const emit = defineEmits(['openDrawer', 'openMalumot'])
</script>
<style lang="">
    
</style>