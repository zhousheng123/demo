<template>
  <div id="app">
  <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style  lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height 100%;
  min-width 900px
}

</style>
