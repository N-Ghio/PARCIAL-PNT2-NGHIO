<template>
    <section class="src-components-navbar">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <router-link to="/">
                <a class="navbar-brand" href="#">Inicio</a>
            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>    
        </nav>
    </section>
</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>