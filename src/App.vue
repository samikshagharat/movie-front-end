<template>
  <div id="app">
    <movies/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import movies from './components/movies.vue'

export default {
  name: 'App',
  components: {
   // HelloWorld,
    movies
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
