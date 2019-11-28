<template>
  <div id="main" class="box">
    <div id="top" class="head">
      <img class="flex" src="../assets/u4.png"/>
      <h1 class="flex" style="color: #fff;font-size: 40px;">食安云网驾驶舱</h1>
      <img class="flex" src="../assets/u5.png"/>
    </div>

    <div id="panel_1" class="box-1">
      <div class="box-item">
        <ContainerTop></ContainerTop>
      </div>
    </div>

    <div id="panel_2" class="box-1">
      <JianYanJianCe></JianYanJianCe>
    </div>

    <div id="panel_3" class="box-1">
      <div class="box-item">
        <JianCePiCi></JianCePiCi>
      </div>
    </div>

    <div id="panel_4" class="box-1">
      <div class="box-item">
        <FengXianJianCeLevel1></FengXianJianCeLevel1>
      </div>
    </div>

    <div id="panel_5" class="box-1">
      <div class="box-item">
        <FengXianJianCeLevel2></FengXianJianCeLevel2>
      </div>
    </div>

    <div id="panel_6" class="box-1">
      <div class="box-item">
        <FengXianJianCeLevel3></FengXianJianCeLevel3>
      </div>
    </div>

    <div id="panel_7" class="box-1">
      <div class="box-2" style="width: 75%">
        <div class="box-item">
          <XinPinYinRuShenHe></XinPinYinRuShenHe>
        </div>
        <div class="box-item">
          <GongYingShangShenHe></GongYingShangShenHe>
        </div>
        <div class="box-item">
          <ZhengJianGengXinShenHe></ZhengJianGengXinShenHe>
        </div>
      </div>
      <div class="box-2"  style="width: 25%">
        <div class="box-item">
          <XinPinFuShenLv></XinPinFuShenLv>
        </div>
        <div class="box-item">
          <ZhengJianYuQiLv></ZhengJianYuQiLv>
        </div>
      </div>
    </div>

    <div id="panel_8" class="box-1">
      <div class="box-item">战区成绩分布</div>
      <div class="box-item">省区成绩分布</div>
      <div class="box-item">区域成绩分布</div>
    </div>

    <div id="panel_9" class="box-1">
      <div class="box-item">门店成绩TOP5</div>
      <div class="box-item">战区成绩明细</div>
    </div>
  </div>
</template>

<script>
  import ContainerTop from '@/components/ContainerTop'
  import JianYanJianCe from '@/components/JianYanJianCe'
  import JianCePiCi from '@/components/JianCePiCi'
  import FengXianJianCeLevel1 from '@/components/FengXianJianCeLevel1'
  import FengXianJianCeLevel2 from '@/components/FengXianJianCeLevel2'
  import FengXianJianCeLevel3 from '@/components/FengXianJianCeLevel3'
  import XinPinYinRuShenHe from '@/components/XinPinYinRuShenHe'
  import GongYingShangShenHe from '@/components/GongYingShangShenHe'
  import ZhengJianGengXinShenHe from '@/components/ZhengJianGengXinShenHe'
  import XinPinFuShenLv from  '@/components/XinPinFuShenLv'
  import ZhengJianYuQiLv from '@/components/ZhengJianYuQiLv'
  import ZhanQuChengJi from '@/components/ZhanQuChengJi'
  import MenDianChengJi from '@/components/MenDianChengJi'
  import ZhanQuChengJiMingXi from '@/components/ZhanQuChengJiMingXi'

  export default {
    name: "index",
    components: {
      ContainerTop,
      JianYanJianCe,
      JianCePiCi,
      FengXianJianCeLevel1,
      FengXianJianCeLevel2,
      FengXianJianCeLevel3,
      XinPinYinRuShenHe,
      GongYingShangShenHe,
      ZhengJianGengXinShenHe,
      XinPinFuShenLv,
      ZhengJianYuQiLv
    }
  }
</script>

<style scoped>
  /*  flex-direction是子元素的主轴方向  默认是row  是横向的下边有图  */
  .box {
    flex-direction: column;
  }
  .flex {
    display: flex;
  }
  div {
    display: flex;
  }
  #main{
    background-color: #001E44;
    padding: 15px;
  }
  /*  justify-content是主轴的对齐方式 值有flex-start | flex-end | center | space-between | space-around;
        这里用的space-around  控制了登陆按钮和导航的位置  其他属性下边有图*/
  /*  align-items 是交叉轴的对齐方式   如果定义了direction的话  主轴和交叉轴是会变的*/
  .head {
    height: 50px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .box-1{
    flex-direction: row;
    width: 100%;
    border: red 1px solid;
  }

  .box-2{
    flex-direction: column;
    border: red 1px solid;
  }

  .box-item {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    margin: 5px;
    font-size: 30px;
    color: white;
    text-align: center;
    background-color: #0B284C;
  }

</style>
