<script setup>
import BizningUstunligimiz from './components/bizningUstunligimiz.vue'
import Mahsulotlar from './components/Mahsulotlar.vue'
import Hamkorlar from './components/Hamkorlar.vue'
import About from './components/About.vue'
import Galery from './components/Galery.vue'
import Footer from './components/Footer.vue'
import BizHakimizda from './components/BizHakimizda.vue'
import Drawer from './components/Drawer.vue'
import Malumot from './components/Malumot.vue'
import { provide, ref } from 'vue'

const drawer = ref(false)
const malumot = ref(false)

const closeDrawer = () => {
  drawer.value = false
}
const openDrawer = () => {
  drawer.value = true
}

const openMalumot = () => {
  malumot.value = true
}
const closeMalumot = () => {
  malumot.value = false
}

provide('malumot', {
  openMalumot,
  closeMalumot
})

provide('drawer', {
  closeDrawer,
  openDrawer,
  
})


</script>

<template>
  <About/>
    <Drawer v-if="drawer"/>
    <Malumot v-if="malumot"/>
    <BizningUstunligimiz/>
    <BizHakimizda/>
    <Mahsulotlar @openMalumot="openMalumot" @openDrawer="openDrawer"/>
    <Galery/>
    <Hamkorlar/>
    <Footer/>
</template>

<style scoped>

</style>
