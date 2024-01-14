<template>
    <div class="d-flex align-items-center">
        <i class="fa fa-search"></i>
        <input class="form-control" :type="typeInput" :placeholder="placeholderInput" v-model="searchPokemon"/>
    </div>
    
</template>

<script>
export default{
    name: 'InputCommon',
    props: {
        typeInput: String,
        placeholderInput: String
    },

    data(){
        return {
            searchPokemon: ''
        }
    },

    emits:['sendPokemon'],

    watch: {
        searchPokemon(pokemon){
            this.$emit('sendPokemon', pokemon);
        }
    }

}
</script>

<style scoped>

    div{
        box-shadow: 0px 2px 10px 0px #0000000A;
    }

    .form-control:focus{
        box-shadow: none;
        border-color: #dee2e6;
    }

    .form-control{
        border-left: none;
        padding: 10px;
        border: none;
        border-radius: 0px 5px 5px 0px;
    }

    .form-control::placeholder{
        color: var(--gray);
    }

    i{
        color: var(--gray);
        background-color: #fff;
        border: none;
        border-right: none;
        padding: 14px;
        border-radius: 5px 0px 0px 5px;
    }
</style>