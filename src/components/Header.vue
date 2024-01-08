<template>
    <div class="container xl:py-5 py-5 relative overflow-x-auto">
        <div class="w-[96%] mx-auto">

            <img class="xl:w-[140px] w-[120px]" src="https://turon-eco.uz/wp-content/uploads/2021/01/Eurogips-logo.png" alt="">
        </div>

        <button @click="scrollToTop" class="fixed bottom-[5%] right-[20px] xl:w-[60px] z-20 w-[40px] h-[40px] xl:h-[60px] p-[8px] hover:-translate-y-2 transition hover:shadow-xl bg-[#407BFF] rounded-[12px]">
            <i class="fas fa-arrow-up text-white"></i>
        </button>
    </div>
</template>
<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
                
            })
        }
    },
}
</script>
<style lang="">
    
</style>