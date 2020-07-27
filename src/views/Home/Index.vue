<template>
  <div class="home">
    <HomeTitle/>
    <HomeForm/>
  </div>
</template>

<script>
import HomeTitle from './HomeTitle'
import HomeForm from './HomeForm'

export default {
  name: 'Home',
  components: {
    HomeTitle,
    HomeForm
  }
}
</script>

<style lang="stylus">
  #app
    padding 60px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff // Le ponemos un color de letra blanco para que resalte
    background-color #15202b // Le cambiamos el color de fondo por un azul marino oscuro
</style>
