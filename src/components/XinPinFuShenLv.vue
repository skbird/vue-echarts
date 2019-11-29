<template>
  <Border class="flex" style="width: 100%;height: 100%">
    <div class="flex-column" style="width: 100%;height: 100%">
      <div class="flex-row top">
        <img src="../assets/tool-button.png"/>
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
  import Border from '@/components/Border'

  export default {
    name: "echarts-demo",
    components: {
      Border
    },
    data() {
      return {
        url: '././assets/tool-button.png'
      };
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_xpfsl'), 'dark');

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
          barWidth: 40,
          backgroundColor: '#0B284C',
          grid: {
            left: '10%',
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
      },
      searchDilog() {
        console.log("xi")
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
