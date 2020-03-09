<template>
  <div id="app">
    <home-page />
    <router-view/>
  </div>
</template>

<script>
import HomePage from './pages/HomePage'

export default {
  components: {
    HomePage
  }
}
</script>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
  background-color: #f2f3f7;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
