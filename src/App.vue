<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height: 100%;
    width: 100%;
  }
  #app{
    height: 100%;
    width: 100%;
  }
    @import "assets/css/common.scss";
</style>
