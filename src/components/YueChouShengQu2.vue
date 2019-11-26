<template>
  <div id="myChart" :style="{width: '800px', height: '400px'}"></div>
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
    name: "YueChouShengQu2",
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
            text: '月抽检省区通报量TOP10'
          },
          backgroundColor: '#0B284C',
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          legend:{
            x: 'center',
            data: ['例外案件', '商品投诉','诉讼案件','食安舆情']
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
            data: ["重庆", "广东", "广西", "安徽", "江苏", "河北", "河南"],
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: '20'
              }
            }
          },
          series: [
            {
              name: '例外案件',
              type: 'bar',
              stack: 'stack',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                  }
                }
              },
              data: [150, 212, 201, 154, 190, 330, 410],
              itemStyle: {
                normal: {color: "#A35156", barBorderRadius: 28}
              }
            },{
              name: '商品投诉',
              type: 'bar',
              stack: 'stack',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                  }
                }
              },
              data: [150, 212, 201, 154, 190, 330, 410],
              itemStyle: {
                normal: {color: "#AA594B", barBorderRadius: 28}
              }
            },{
              name: '诉讼案件',
              type: 'bar',
              stack: 'stack',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                  }
                }
              },
              data: [150, 212, 201, 154, 190, 330, 410],
              itemStyle: {
                normal: {color: "#B07267", barBorderRadius: 28}
              }
            },{
              name: '食安舆情',
              type: 'bar',
              stack: 'stack',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                  }
                }
              },
              data: [150, 212, 201, 154, 190, 330, 410],
              itemStyle: {
                normal: {color: "#E6CBC6", barBorderRadius: 28}
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
