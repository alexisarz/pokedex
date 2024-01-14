<template>
<section class="errorCommon">
    <h2>{{ title }}</h2>
    <br>
    <p>{{ text }}</p>
    <br>
    <router-link to="/">
        <BtnCommon :text="btntext" :disabled="false"/>
    </router-link>
</section>
</template>

<script>
import BtnCommon from './BtnCommon.vue';

export default{
    name: 'ErrorCommon',
    components: {
        BtnCommon
    },

    props: {
        title: String,
        text: String,
        btntext: String
    }
}

</script>

<style>

h2{
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 0px;
}



</style>