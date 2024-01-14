<template>
    <section class="bottomnav fixed-bottom w-100">
        <div class="custom_container d-flex justify-content-between align-items-center gap-3 ">
            <BtnCommon :text="btn1.text" :icon="btn1.icon" @click="statusBtn('btn1')" :disabled="btn1Status"/>
            <BtnCommon :text="btn2.text" :icon="btn2.icon" @click="statusBtn('btn2')" :disabled="btn2Status"/>
        </div>
    </section>
</template>

<script>
import BtnCommon from './BtnCommon.vue';

export default{
    name: 'BottomNav',
    components: {
        BtnCommon
    },

    props:{
        btn1: Object,
        btn2: Object
    },

    data(){
        return{
            btn1Status: false,
            btn2Status: true
        }
    },

    emits: ['showFavList'],

    methods: {
        statusBtn(btn){
            if(btn == 'btn1' && this.btn1Status !== false){
                this.btn1Status = !this.btn1Status
                this.btn2Status = !this.btn2Status
                this.$emit('showFavList', !this.btn2Status)
            }
            else if(btn == 'btn2' && this.btn2Status !== false){
                this.btn2Status = !this.btn2Status
                this.btn1Status = !this.btn1Status
                this.$emit('showFavList', !this.btn2Status)
            }
        }
    }   
}


</script>

<style scoped>

    button{
        width: 50%;
    }

    .bottomnav{
        background-color: var(--white);
    }
</style>