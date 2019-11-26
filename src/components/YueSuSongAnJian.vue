<template>
  <div id="myChart" :style="{width: '520px', height: '520px'}"></div>
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
    name: "jianCePiCi",
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'), 'dark');

        // 绘制图表
        myChart.setOption({
          title: {
            text: '月诉讼案件门店分布',
            left: '20px',
            textStyle: {
              fontSize: 24,
            }
          },
          backgroundColor: '#0B284C',
          tooltip: {
            trigger: "axis",
          },
          legend: {
            show: false
          },
          xAxis: {
            data: ["黎明店", "象园店", "黎明店", "象园店", "黎明店"],
            splitLine: {
              show: false,
            },
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 20
              }
            }
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '月诉讼案件',
            type: 'bar',
            stack: 'stack',
            barWidth: 35,
            data: [20, 40, 78, 50, 30],
            itemStyle: {
              normal: {color: "#0DEDEE", barBorderRadius: 40}
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 24,
                }
              }
            }
          }]
        });
      }
    },

  }
</script>

<style scoped>


</style>
