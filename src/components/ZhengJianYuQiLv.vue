<template>
  <div id="myChart" :style="{width: '800px', height: '600px'}"></div>
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

  export default {
    name: "echarts-demo",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'), 'dark');

        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          title:{
            text: '证件更新逾期率TOP10',
          },
          backgroundColor: '#0B284C',
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
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
                normal: {color: "#E0AD52"}
              }
            }
          ]
        });
      }
    },

  }
</script>

<style scoped>


</style>
