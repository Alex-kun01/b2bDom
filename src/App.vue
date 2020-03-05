<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="box">我是一段测试less语法的文字</div>
    <el-button type="primary">按钮</el-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  .box{
    color: green;
    font-size: 30px;
    font-weight: blod;
  }
}
</style>
