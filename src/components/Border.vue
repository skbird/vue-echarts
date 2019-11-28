<template>
  <div class="BoxWrap">
    <div class="horn">
      <div class="lt"></div>
      <div class="rt"></div>
      <slot></slot>
      <div class="rb"></div>
      <div class="lb"></div>
    </div>
  </div>
</template>

<script>
  export default {
      name: "border"
  }
</script>

<style scoped>
  .BoxWrap{
    width: auto;
    height: auto;
    position: relative;
    margin: 8px;
    background-color: #0B284C;
  }
  .horn{
    position: absolute;
    width: 100%;
    height: 100%;
    border:1px solid #00d3e7;
  }
  .horn>div{
    width: 10px;
    height: 10px;
    position:absolute;
  }
  .horn .lt{
    border-top: 3px solid #00d3e7;
    border-left: 3px solid #00d3e7;
    left: -2px;
    top: -2px;
  }
  .horn .rt{
    border-top: 3px solid #00d3e7;
    border-right: 3px solid #00d3e7;
    right: -2px;
    top: -2px;
  }
  .horn .rb{
    border-bottom:3px solid #00d3e7;
    border-right: 3px solid #00d3e7;
    right: -2px;
    bottom: -2px;
  }
  .horn .lb{
    border-bottom:3px solid #00d3e7;
    border-left: 3px solid #00d3e7;
    left: -2px;
    bottom: -2px;
  }

</style>
