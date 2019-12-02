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
    border:1px solid #0A5270;
  }
  .horn>div{
    width: 16px;
    height: 16px;
    position:absolute;
  }
  .horn .lt{
    border-top: 1px solid #0399AA;
    border-left: 1px solid #0399AA;
    left: -1px;
    top: -1px;
  }
  .horn .rt{
    border-top: 1px solid #0399AA;
    border-right: 1px solid #0399AA;
    right: -1px;
    top: -1px;
  }
  .horn .rb{
    border-bottom:1px solid #0399AA;
    border-right: 1px solid #0399AA;
    right: -1px;
    bottom: -1px;
  }
  .horn .lb{
    border-bottom:1px solid #0399AA;
    border-left: 1px solid #0399AA;
    left: -1px;
    bottom: -1px;
  }

</style>
