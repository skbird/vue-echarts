<template>
  <div class="flex-row" style="color: #fff;width: 100%">
    <div class="flex" style="width: 15%">
      <div class="leftpart">检验检测</div>
    </div>
    <div class="flex" style="width: 60%">
      <table class="flex-column" style="width: 100%">
        <tr>
          <td>
            <div class="rightpart">
              检测站点分布
            </div>
          </td>
          <td>
            <div class="rightpart">
              实时检测批次
            </div>
          </td>
          <td>
            <div class="rightpart">
              月至今检测批次
            </div>
          </td>
          <td>
            <div class="rightpart">
              年至今检测批次
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style="color: #00FF33" class="rightpart">
              181
            </div>
          </td>
          <td>
            <div style="color: #14F2F3" class="rightpart">
              298
            </div>
          </td>
          <td>
            <div style="color: #F7C066" class="rightpart">
              780
            </div>
          </td>
          <td>
            <div style="color: #FE7C72" class="rightpart">
              780190
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: "jian-yan-jian-ce"
}

</script>

<style scoped>
  .flex{
    display: flex;
  }
  .flex-row{
    display: flex;
    flex-direction: row;
  }
  .flex-column{
    display: flex;
    flex-direction: column;
  }

  .leftpart{
    width: 100%;
    height: 50%;
    font-size: 30px;
    background: #0066FF;
    margin-left: 10px;
    margin-right: 50px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px #797979 solid;
  }

  .rightpart{
    background: #0B284C;
    font-size: 30px;
    padding: 2px;
    margin: 2px;
    text-align: center;
    width: 100%;
    height: 40px;
  }
  tr{
    width: 100%;
  }
  td{
    width: 25%;
  }
  tr,td{
    display: flex;
  }

</style>
