<template>
  <div id="main" class="box">
    <div id="top" class="head">
      <img class="flex" src="../assets/u4.png"/>
      <h1 class="flex" style="color: #fff;font-size: 40px;">食安云网驾驶舱</h1>
      <img class="flex" src="../assets/u5.png"/>
    </div>

    <div id="panel_1" class="box-1">
      <div class="box-item">
        <ShiAnZiXun></ShiAnZiXun>
      </div>
      <div class="box-item" style="background-color: #001E44">
        <ChinaScatterDemo></ChinaScatterDemo>
      </div>
      <div class="box-item">
        <ShiAnFaGui></ShiAnFaGui>
      </div>
    </div>

    <div id="panel_2" class="box-1">
      <JianYanJianCe></JianYanJianCe>
    </div>

    <div id="panel_3" class="box-1">
      <div class="box-item">
        <JianCePiCi></JianCePiCi>
      </div>
      <div class="box-item">
        月果蔬高危风险商品TOP10
      </div>
      <div class="box-item">月水产高危风险商品TOP10</div>
    </div>

    <div id="panel_4" class="box-1">
      <div class="box-item">
        <FengXianJianCe></FengXianJianCe>
      </div>
      <div class="box-item">
        <!--<YueChouShengQu1></YueChouShengQu1>-->
      </div>
      <div class="box-item">

      </div>
    </div>

    <div id="panel_5" class="box-1">
      <div class="box-item">月例外商品分布</div>
      <div class="box-item">月例外案件问题分布</div>
      <div class="box-item">月商品投诉问题分布</div>
      <div class="box-item">月诉讼案件门店分布</div>
    </div>

    <div id="panel_6" class="box-1">
      <div class="box-item">月食安舆情问题分布</div>
      <div class="box-item">月高危风险商品</div>
      <div class="box-item">月高危风险供应商</div>
    </div>

    <div id="panel_7" class="box-1">
      <div class="box-2">
        <div class="box-item">新品引入审核</div>
        <div class="box-item">供应商审核</div>
        <div class="box-item">证件更新审核</div>
      </div>
      <div class="box-2">
        <div class="box-item">新品审核复审率TOP10</div>
        <div class="box-item">证件更新逾期率TOP10</div>
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
  import ShiAnZiXun from '@/components/ShiAnZiXun'
  import ChinaScatterDemo from '@/components/ChinaScatterDemo'
  import ShiAnFaGui from '@/components/ShiAnFaGui'
  import JianYanJianCe from '@/components/JianYanJianCe'
  import JianCePiCi from '@/components/JianCePiCi'
  import YueShuiGuoGW from '@/components/YueShuiGuoGW'
  import FengXianJianCe from '@/components/FengXianJianCe'
  import YueChouShengQu1 from '@/components/YueChouShengQu1'
  import YueChouShengQu2 from '@/components/YueChouShengQu2'
  import YueLiWaiShangPin from '@/components/YueLiWaiShangPin'
  import YueLiWaiAnJian from '@/components/YueLiWaiAnJian'
  import YueShangPinTouSu from '@/components/YueShangPinTouSu'
  import YueSuSongAnJian from '@/components/YueSuSongAnJian'
  import YuQingWenTi from '@/components/YuQingWenTi'
  import YueGaoWeiShangPin from  '@/components/YueGaoWeiShangPin'
  import YueGaoWeiGongYingShang from '@/components/YueGaoWeiGongYingShang'
  import XinPinYinRuShenHe from '@/components/XinPinYinRuShenHe'
  import GongYingShangShenHe from '@/components/GongYingShangShenHe'
  import ZhengJianGengXinShenHe from '@/components/ZhengJianGengXinShenHe'
  import ZhengJianYuQiLv from '@/components/ZhengJianYuQiLv'
  import XinPinFuShenLv from  '@/components/XinPinFuShenLv'
  import ZhanQuChengJi from '@/components/ZhanQuChengJi'
  import MenDianChengJi from '@/components/MenDianChengJi'
  import ZhanQuChengJiMingXi from '@/components/ZhanQuChengJiMingXi'

  export default {
    name: "index",
    components: {
      ShiAnZiXun,
      ChinaScatterDemo,
      ShiAnFaGui,
      JianYanJianCe,
      JianCePiCi,
      YueShuiGuoGW,
      FengXianJianCe,
      YueChouShengQu1,
      YueChouShengQu2
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
