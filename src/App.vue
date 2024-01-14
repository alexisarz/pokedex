<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap');

:root{
  --gray_dark: #5E5E5E;
  --gray:#BFBFBF;
  --white_gray: #E8E8E8;
  --white_gray_two: #F5F5F5;
  --white: #F9F9F9;
  --red: #F22539;
}


body{
  background-color: var(--white_gray_two);
}


#app {
  font-family:'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--white_gray_two);
  height: 100vh;
}

h3{
  font-weight: 700;
}

p{
  font-weight: 500;
  font-size: 18px;
  max-width: 570px;
  margin: auto;
  color: var(--gray_dark);
}

.custom_container{
  max-width: 570px;
  margin: auto;
  padding: 20px;
}

.btn-danger{
  background-color: var(--red);
}

/*The only way to modify Swal button*/
.swal2-confirm{
  padding: 7px 20px!important;
  border-radius: 20px!important;
  font-weight: 500!important;
  background-color: var(--red)!important;
  box-shadow: none!important;
}

</style>
