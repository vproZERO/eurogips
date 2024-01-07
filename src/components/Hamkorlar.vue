<template>
    <div class="container overflow-hidden py-[20px] xl:pb-[50px]">
        <h2 class="text-center text-3xl font-bold xl:mb-14 mb-5  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">Hamkorlar</h2>
        <div class="flex items-center gap-3 aos-init aos-animate justify-between scrolling-container" data-aos="fade-up" data-aos-duration="1500">
            <div :key="index" v-for="(item , index) in items" class="w-[150px]">
                <img  :src="item" alt="hamkorlar">
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: ['https://eurogips.uz/assets/img/logos/AD.png' , 'https://eurogips.uz/assets/img/logos/ALIMIX.png' , 'https://eurogips.uz/assets/img/logos/astech.png' , 'https://eurogips.uz/assets/img/logos/BRAUS.png', 'https://eurogips.uz/assets/img/logos/FORUS.png', 'https://eurogips.uz/assets/img/logos/habba.png']
        }
    },
}
</script>
<style scoped>
    .scrolling-container {
        white-space: nowrap;
        overflow: hidden;
        animation: scrollAnimation 20s linear infinite;
    }
    
    
    .animated-item {
        display: block;
        opacity: 1;
        animation: fadeInAndSlide  5s ease infinite;
    }

    

    @keyframes scrollAnimation{
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(-100%);
        }
    }
</style>