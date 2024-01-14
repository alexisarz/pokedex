<template>
    <LoaderBall v-if="loading === true"/>
    <section v-if="loading === false" class="pokelist">
        <div class="custom_container">
            <SearchCommon typeInput="text" placeholderInput="Search" @sendPokemon="pokemonValue" @change="isMatch()"/>
            <br>
            <ErrorCommon v-if="error == true" title="Uh-oh!" text="You look lost on your journey!" btntext="Go back home"/>
            <main v-if="showFavList == false"  class="pokelist_cont">
                <div v-for="(pokemon, index) in pokemonList" :key="index" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + '_' + pokemon.name">
                    <PokemonCard v-if="pokemon.name.includes(pokeShowMe)" :isFav="favList.includes(pokemon.name)? true : false" :pokename="pokemon.name" />
                    <ModalBox :pokename="pokemon.name" @favHandler="toggleFavPokemon" :isFav="favList.includes(pokemon.name)? true : false"/>
                </div>
            </main>
            <main v-else-if="showFavList == true"  class="pokelist_cont">
                <div v-for="(pokemon, index) in pokemonList" :key="index" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + '_' + pokemon.name">
                    <PokemonCard v-if="favList.includes(pokemon.name) && pokemon.name.includes(pokeShowMe)" :isFav="favList.includes(pokemon.name)? true : false" :pokename="pokemon.name" />
                    <ModalBox :pokename="pokemon.name" @favHandler="toggleFavPokemon" :isFav="favList.includes(pokemon.name)? true : false"/>
                </div>
            </main>
        </div>
        <BottomNav :btn1="{text: 'All', icon: 'fa fa-list'}" :btn2="{text: 'Favorites', icon: 'fa fa-star'}" @showFavList='handleFavList'/>
    </section>
</template>

<script>
import BottomNav from '../common/BottomNav.vue';
import LoaderBall from '../common/LoaderBall.vue';
import PokemonCard from '../common/PokemonCard.vue';
import SearchCommon from '../common/SearchCommon.vue';
import ErrorCommon from '../common/ErrorCommon.vue';
import axios from 'axios';
import ModalBox from '../common/ModalBox.vue';

export default{
    name: 'PokemonList',
    components: {
    SearchCommon,
    LoaderBall,
    PokemonCard,
    BottomNav,
    ErrorCommon,
    ModalBox
},

    data(){

        return {
            pokeShowMe: '',
            pokemonList: [],
            loading: true,
            favList: [],
            showFavList: false,
            error: false
        }
    },

    methods: {
         pokemonValue(pokemon) {
            this.pokeShowMe = pokemon
         },

         toggleFavPokemon(favPokemon){
            if(!this.favList.includes(favPokemon)){
                this.favList.push(favPokemon)
            }else{
                this.favList = this.favList.filter(e => e !== favPokemon)
            }
         },

         handleFavList(statusFavList){
            this.showFavList = statusFavList
         },

         isMatch(){
            if (this.pokeShowMe) {
                const isMatching = this.pokemonList.some(pokemon => pokemon.name.includes(this.pokeShowMe));

                this.error = !isMatching;
            } else {
                this.error = false;
                }
        
         }
    },
    
    watch: {
        pokeShowMe: 'isMatch'
    },

    mounted(){
        setTimeout(() => {
            axios.get('https://pokeapi.co/api/v2/pokemon')
        .then (res => {
            this.pokemonList = res.data.results;
            this.loading = false;
        })
        }, 1000);
    }
}

</script>

<style>

</style>