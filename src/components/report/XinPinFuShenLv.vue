<template>
  <Border class="flex" style="width: 100%;height: 100%">
    <div class="flex-column" style="width: 100%;height: 100%">
      <div class="flex-row top">
        <el-popover
          placement="bottom-start"
          :visible-arrow="false"
          trigger="click">
          <div style="color: #3F8CE8;font-size: 16px;margin-left: 10px;margin-bottom: 5px">数据</div>
          <div style="width:30%;height:4px;margin-left: 3px;margin-bottom: 5px;overflow:hidden;background-color: #3F8CE8"></div>
          <div ><el-image style="height: 2px;width: 100%" :src="lineImgUrl" ></el-image></div>
          <el-tree
            :data="data"
            show-checkbox
            style="color: #B9BDC3;background-color: #194473;margin: 5px;margin-bottom: 50px"
            node-key="id"
            :props="defaultProps">
          </el-tree>
          <el-image slot="reference" :src="imgUrl" ></el-image>
        </el-popover>

        <span class="top-title">新品审核复审率TOP10</span>
      </div>
      <div id="myChart_xpfsl" :style="{height: '600px'}"></div>
    </div>
  </Border>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/theme/dark');
  import Border from '@/components/report/Border'

  export default {
    name: "echarts-demo",
    components: {
      Border
    },
    data() {
      return {
        checkList: ['选中且禁用','复选框 A'],
        imgUrl: require("@/assets/images/tool-button.png"),
        lineImgUrl: require("@/assets/images/u513.png"),
        data: [{
          id: 1,
          label: '省区',
          children: [{
            id: 4,
            label: '二级 1-1'
          }]
        }, {
          id: 2,
          label: '商行',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '供应商',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_xpfsl'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          title:{
            show: false
          },
          barMinWidth: 1,
          backgroundColor: '#0B284C',
          grid: {
            left: '15%',
            right: '4%',
            bottom: '3%',
            top:'3%'
          },
          xAxis: {
            show: false,
            type: 'value',
            splitLine: {
              show: false,
            }
          },
          yAxis: {
            type: 'category',
            data: ["福建", "重庆", "广东", "广西", "安徽", "江苏", "河北", "河南", "陕西", "江西"],
            axisTick: 'none',
            axisLine: 'none',
          },
          series: [
            {
              name: '蛋品',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                  }
                }
              },
              data: [150, 212, 201, 154, 190, 330, 410, 212, 201, 154],
              itemStyle: {
                normal: {color: "#9F5055"}
              }
            }
          ]
        });
      }
    }
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
    font-size: 18px;
    color: white;
    text-align: left;
  }
  .top{
    margin-left: 20px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
  .top-title{
    color: #949DA7;
    font-weight: bold;
    font-size: 18px;
    margin-right: 10px;
    text-align: right;
    flex: 1;
  }
</style>
<style>
  .el-popover{
    color: #fff;
    background-color: #242640;
    border-radius: 0;
    border: 1px solid #797979;
    padding: 0;
    width:15%
  }
  .el-tree-node:focus > .el-tree-node__content {
    background-color: #194473 !important;
  }
</style>
