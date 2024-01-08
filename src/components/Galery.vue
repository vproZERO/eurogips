<template>
    <div class="container xl:py-14 py-10 overflow-hidden">
        <div class="grid xl:grid-cols-3  grid-cols-2 xl:gap-5 gap-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-25-28.jpg"   alt="img">
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-25-33.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-25-36.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-26-14.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-26-11.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-25-46.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-25-55.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-25-57.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
            <div class="xl:h-[305px] rounded hover:shadow-xl hover:-translate-y-2 transition">
                <img src="https://eurogips.uz/assets/img/gallery/photo_2023-11-13_10-25-51.jpg" class="clickable-image" @click="openModal" alt="img">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data: () => {
        return {
            openModal: false,
        }
    },
   
}
</script>
<style scoped>
    
</style>