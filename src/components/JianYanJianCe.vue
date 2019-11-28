<template>
  <div class="flex" style="background: #001E44;color: #fff;width: 100%">
    <div style="margin: 10px 10px 10px 10px">
      <div class="leftpart">检测检验</div>
    </div>
    <div>
      <table>
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
          <td>
            <div class="rightpart">
              780190
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    import ElAside from "element-ui/packages/aside/src/main";

    export default {
      components: {ElAside},
      name: "jian-yan-jian-ce"
    }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
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
    width: 200px;
    height: 40px;
  }
</style>
