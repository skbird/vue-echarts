<template>

  <div style="width: 428px;height: 373px;background: #0B284C">
    <div style="margin-bottom: 10px;color: #fff;margin-left: 40px;padding-top: 10px">食安最新资讯</div>
    <ul class="new-list">
      <li v-for="item in listData" style="list-style-type: none;font-size: 14px;text-decoration: underline;text-align: left;margin-left: 40px">
        <a class="title" v-text="item.title"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ShiAnZiXun",
    data() {
      return {
        listData: [{
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }, {
          'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中\n' +
          '\n' +
          '乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
        }, {
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }, {
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }, {
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }, {
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }, {
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }, {
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }, {
          'title': '云南抽检2大类148批次食品样品    4批次样品检出不合格'
        }],
      }
    }
  }
</script>


<style scoped>
  a{color:#fff;}
  a:link{color:#fff;}
  .new-list {
    line-height: 28px;
    transition: top 0.5s;
    padding-left: 0px;
  }
</style>
