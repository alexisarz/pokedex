<template>
    <div class="pokecard">
        <h3>
            {{ pokename }}
        </h3>
        <StarFav :isFav="isFav"/>
    </div>
</template>

<script>
import StarFav from './StarFav.vue';


export default{
    name: 'PokemonCard',
    props: {
        pokename: String,
        isFav: Boolean
    },
    components: {
         StarFav
    }
}

</script>

<style scoped>
    div.pokecard{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--white);
        padding: 5px 20px;
        height: 60px;
        border-radius: 5px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    h3{
        margin: 0px;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 22px;
    }

    img{
        cursor: pointer;
    }
</style>