<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Parcial PNT2 - Tabla de Gastos/Importes</h1>
      <br>
      <Navbar />
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  color:beige
}
</style>
