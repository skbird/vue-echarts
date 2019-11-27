<template>
  <div class="flex" style="background: #001E44;color: #fff;height: 100%">
    <table>
      <tr>
        <td style="padding-right: 45px">
          <div class="leftpart">风险监测</div>
        </td>
        <td>
          <div class="rightpart">
            实时上报量
          </div>
        </td>
        <td>
          <div class="rightpart">
            月至今上报量
          </div>
        </td>
        <td>
          <div class="rightpart">
            年至今上报量
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="rightpart">
            抽检上报
          </div>
        </td>
        <td>
          <div class="rightpart">
            181
          </div>
        </td>
        <td>
          <div class="rightpart">
            298
          </div>
        </td>
        <td>
          <div class="rightpart">
            780
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="rightpart">
            例外案件
          </div>
        </td>
        <td>
          <div class="rightpart">
            181
          </div>
        </td>
        <td>
          <div class="rightpart">
            298
          </div>
        </td>
        <td>
          <div class="rightpart">
            780
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="rightpart">
            商品投诉
          </div>
        </td>
        <td>
          <div class="rightpart">
            181
          </div>
        </td>
        <td>
          <div class="rightpart">
            298
          </div>
        </td>
        <td>
          <div class="rightpart">
            780
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="rightpart">
            诉讼案件
          </div>
        </td>
        <td>
          <div class="rightpart">
            181
          </div>
        </td>
        <td>
          <div class="rightpart">
            298
          </div>
        </td>
        <td>
          <div class="rightpart">
            780
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="rightpart">
            食安舆情
          </div>
        </td>
        <td>
          <div class="rightpart">
            181
          </div>
        </td>
        <td>
          <div class="rightpart">
            298
          </div>
        </td>
        <td>
          <div class="rightpart">
            780
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ElAside from "element-ui/packages/aside/src/main";

  export default {
    name: "feng-xian-jian-ce"
  }
</script>

<style scoped>
  .flex{
    display: flex;
  }
  .leftpart{
    font-size: 28px;
    background: #0066FF;
    padding: 5px;
  }
  .rightpart{
    background: #0B284C;
    font-size: 20px;
    padding: 2px;
    margin: 2px;
    text-align: center;
    height: 40px;
  }
</style>
