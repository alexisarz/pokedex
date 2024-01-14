<template>
    <div>
        <img v-if="isFav !== true"  src="images/star_dis.webp"/>
        <img v-else-if="isFav == true"  src="images/star_on.webp"/>
    </div>
</template>

<script>
    export default{
        name: 'StarFav',
        props: {
            isFav: Boolean
        }
    }
</script>

<style scoped>
    div{
        cursor: pointer;
    }

    .modal-body{
        padding: 0px 15px;
    }
</style>