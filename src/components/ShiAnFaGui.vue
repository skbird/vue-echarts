<template>

  <div class="flex" style="height: 100%;background: #0B284C">
    <div class="flex-column" style="margin-left: 20px">食安安全法规</div>
    <div class="flex-column">
      <ul class="new-list">
        <li v-for="item in listData" style="list-style-type: none;font-size: 15px;text-decoration: underline;text-align: left;margin-left: 20px">
          <a class="title" v-text="item.title"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShiAnZiXun",
    data() {
      return {
        listData: [{
          'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
        }, {
          'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
        }, {
          'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
        }, {
          'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
        }, {
          'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
        }, {
          'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
        }],
      }
    }
  }
</script>


<style scoped>
  .flex{
    display: flex;
    flex-direction: column;
  }
  .flex-column{
    width: 100%;
    height: 100%;
    font-size: 18px;
    color: white;
    text-align: left;
    background-color: #0B284C;
  }
  a{color:#fff;}
  a:link{color:#fff;}
  .new-list {
    line-height: 28px;
    transition: top 0.5s;
    padding-left: 0px;
  }
</style>
