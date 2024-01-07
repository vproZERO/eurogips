<template>
    <div class="container overflow-hidden">
        <h2 class="text-center text-3xl font-bold mb-14  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">Hamkorlar</h2>
        <div class="flex items-center gap-3  justify-between scrolling-container">
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
            items: ['https://eurogips.uz/assets/img/logos/AD.png' , 'https://eurogips.uz/assets/img/logos/ALIMIX.png' , 'https://eurogips.uz/assets/img/logos/astech.png' , 'https://eurogips.uz/assets/img/logos/BRAUS.png', 'https://eurogips.uz/assets/img/logos/FORUS.png', 'https://eurogips.uz/assets/img/logos/BRAUS.png']
        }
    },
}
</script>
<style scoped>
    .scrolling-container {
        white-space: nowrap;
        overflow: hidden;
        animation: scrollAnimation 30s linear infinite;
    }
    @media screen and (max-width: 400px) {
        .scrolling-container {
        white-space: nowrap;
        overflow: hidden;
        animation: scrollAnimation 15s linear infinite;
    }
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