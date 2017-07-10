<template>
  <div class="" id="app">
    <navBar></navBar>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
export default {
  name: 'app',
  components: { navBar }
}
</script>

<style lang="css">

</style>
