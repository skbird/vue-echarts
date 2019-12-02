<template>
  <div id="main" class="box">

    <div id="top" class="head">
      <div width="40%">
        <!--<img class="flex" width="100%" src="../assets/images/u4.png"/>-->
      </div>
      <div width="20%">
        <span class="top-title">食安云网驾驶舱</span>
      </div>
      <div width="40%">
        <!--<img class="flex" width="100%" src="../assets/images/u5.png"/>-->
      </div>
    </div>

    <div id="panel_1" class="box-1">
      <div class="box-item">
        <ContainerTop></ContainerTop>
      </div>
    </div>

    <div id="panel_2" class="box-1" style="margin-top: 20px">
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

    <div class="tag">
      资质合规
    </div>

    <div id="panel_7" style="height: 1300px" class="box-1">
      <div class="box-2" style="height: 100%;width: 76.6%">
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
      <div class="box-2"  style="height: 100%;width: 22.8%">
        <div class="box-item" style="margin-bottom: 10px">
          <XinPinFuShenLv></XinPinFuShenLv>
        </div>
        <div class="box-item" style="margin-top: 10px">
          <ZhengJianYuQiLv></ZhengJianYuQiLv>
        </div>
      </div>
    </div>

    <div class="tag" style="margin-top: 20px">
      营运标准
    </div>

    <div id="panel_8" class="box-1">
      <div class="box-item">
        <ZhanQuChengJi></ZhanQuChengJi>
      </div>
    </div>

    <div id="panel_9" class="box-1">
      <div class="box-item" style="width: 24%">
        <MenDianChengJi></MenDianChengJi>
      </div>
      <div class="box-item" style="width: 76%">
        <ZhanQuChengJiMingXi></ZhanQuChengJiMingXi>
      </div>
    </div>
  </div>
</template>

<script>
  import ContainerTop from '@/components/report/ContainerTop'
  import JianYanJianCe from '@/components/report/JianYanJianCe'
  import JianCePiCi from '@/components/report/JianCePiCi'
  import FengXianJianCeLevel1 from '@/components/report/FengXianJianCeLevel1'
  import FengXianJianCeLevel2 from '@/components/report/FengXianJianCeLevel2'
  import FengXianJianCeLevel3 from '@/components/report/FengXianJianCeLevel3'
  import XinPinYinRuShenHe from '@/components/report/XinPinYinRuShenHe'
  import GongYingShangShenHe from '@/components/report/GongYingShangShenHe'
  import ZhengJianGengXinShenHe from '@/components/report/ZhengJianGengXinShenHe'
  import XinPinFuShenLv from  '@/components/report/XinPinFuShenLv'
  import ZhengJianYuQiLv from '@/components/report/ZhengJianYuQiLv'
  import ZhanQuChengJi from '@/components/report/ZhanQuChengJi'
  import MenDianChengJi from '@/components/report/MenDianChengJi'
  import ZhanQuChengJiMingXi from '@/components/report/ZhanQuChengJiMingXi'

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
      ZhengJianYuQiLv,
      ZhanQuChengJi,
      MenDianChengJi,
      ZhanQuChengJiMingXi
    }
  }
</script>

<style scoped>
  /*  flex-direction是子元素的主轴方向  默认是row  是横向的下边有图  */
  .box {
    display: flex;
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
    padding-top: 35px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .top-title{
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    margin: 10px;
  }
  /*  justify-content是主轴的对齐方式 值有flex-start | flex-end | center | space-between | space-around;
        这里用的space-around  控制了登陆按钮和导航的位置  其他属性下边有图*/
  /*  align-items 是交叉轴的对齐方式   如果定义了direction的话  主轴和交叉轴是会变的*/
  .head {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .box-1{
    flex-direction: row;
    width: 100%;
  }

  .box-2{
    flex-direction: column;
  }

  .box-item {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    font-size: 30px;
    color: white;
    text-align: center;
  }
  .tag{
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    background: #0066FF;
    text-align: center;
    border: 2px #797979 solid;
    width: 10%;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
