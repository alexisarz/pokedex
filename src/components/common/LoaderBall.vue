<template>
<section class="loader">
    <img src="images/pokeball.png" :width="imgWidth"/>
</section>
</template>

<script>
export default{
    name: 'LoaderBall',
    props: {
        imgWidth: String
    }
}
</script>

<style scoped>
    img{
        animation: loaderball 1s infinite;
        max-width: 100%;
    
    }
     .loader{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    @keyframes loaderball {
        0%{
            transform: rotate(0deg)
        }

        100%{
            transform: rotate(360deg);
        }
    }

</style>