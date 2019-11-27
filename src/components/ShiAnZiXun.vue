<template>

  <div class="flex" style="height: 100%;background: #0B284C">
    <div class="flex-column" style="margin-left: 20px">食安最新资讯</div>
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
