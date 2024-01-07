<template>
    <div>
        <form  @submit.prevent="submitForm">

            <div class="relative mt-8">
                <input required v-model="name" id="name" name="name" type="text" class="relative w-full border border-slate-500 rounded-lg mt-5 pl-10 p-3" placeholder="Ismingizni kiriting">
                <i class="fas fa-user-alt text-slate-500 xl:text-xl absolute xl:left-[10px] xl:top-[30px] top-[35px] left-[15px]"></i>
            </div>
            <div class="relative">
                <input required v-model="tel" id="tel" name="tel" type="tel" class="relative w-full border border-slate-500 rounded-lg mt-5 pl-10 p-3" placeholder="Telefon raqamingizni kiriting">
                <i class="fas fa-phone-alt text-slate-500 xl:text-xl absolute xl:left-[10px] xl:top-[30px] top-[35px] left-[15px]"></i>
            </div>
            <button @click="submitData" class="text-white bg-[#007BFF] w-full px-5 py-2 flex items-center justify-center text-white rounded-lg xl:mt-14 mt-10 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50">
                Ariza yuborish
            </button>

        </form>
    </div>
</template>
<script>

import axios from 'axios'
import Swal from 'sweetalert2';
export default {
    data : () => {
        return {
            name: "",
            tel: "",
            validationErrors: {},
            isSubmitting: false,

            telegramBotToken: '6759172233:AAGRTTni5aSpI5flaMzPhlJMZUvq_BGqYeE',
            chatId: 410846910,
        }
    },


    // https://api.telegram.org/bot6759172233:AAGRTTni5aSpI5flaMzPhlJMZUvq_BGqYeE/sendMessage?chat_id=&text=salom Abdulloh akaniki 
    methods: {
        submitForm() {
            const fullMessage = `Full name: ${this.name}
                                 \n Tel: ${this.tel}
                                 `
            axios.post(`https://api.telegram.org/bot${this.telegramBotToken}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`, {
                name: this.name,
                tel: this.tel,
                chatId: this.chatId,
                telegramBotToken: this.telegramBotToken
            })
            .then(response => {
                console.log(response.data);
                
            })
            .catch(error => {
                console.log(error);
                
            })
        },
            submitData(){
                console.log( name.value , tel.value);
                Swal.fire({
                    icon: 'success',
                    title: 'Ariza yuborildi',
                    timer: 1500,
                    showConfirmButton: false
                })

                closeDrawer()
            }
    },
}
</script>
<style lang="">
    
</style>