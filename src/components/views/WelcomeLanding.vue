<template>

    <section class="container text-center">
        <img src="images/pikachu.webp" width="325px" class="img-responsive" />
        <br>
        <br>
        <br>
        <h3>Welcome to Pokédex</h3>
        <br>
        <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
        <br>
        <router-link to="/pokelist">
            <BtnCommon text='Get started' :disabled="false"/>
        </router-link>
    </section>

</template>

<script>
import BtnCommon from '../common/BtnCommon.vue'

export default{
    name: 'WelcomeLanding',
    components: {
        BtnCommon
    },
    props: {
        title: String,
        img: String,
        text: String,
        imgWidth: String
    }
}

</script>

<style>
</style>