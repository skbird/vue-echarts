<template>
  <div id="myChart" :style="{width: '520px', height: '400px'}"></div>
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
            text: '实时检测批次分布',
            left: '20px',
            textStyle: {
              fontSize: 16,
            }
          },
          backgroundColor: '#0B284C',
          grid: {
            left: '4%',
            right: '4%',
            bottom: '10%',
            top:'4%',
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            itemWidth: 15,
            itemHeight: 15,
            data: ['水果', '蔬菜','水产','蛋品'],
          },
          xAxis: {
            data: ["一区", "二区", "三区", "四区", "五区", "六区", "七区", "八区", "九区", "十区", "产地", "彩食鲜"],
            splitLine: {
              show: false,
            },
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              interval:0,
              rotate:0
            },
            max: 11
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '水果',
            type: 'bar',
            stack: 'stack',
            data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
            itemStyle: {
              normal: {color: "#ffd840", barBorderRadius: 1,}
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          },{
            name: '蔬菜',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40, 22, 18, 35, 42, 40],
            itemStyle: {
              normal: {color: "#0BB2CA", barBorderRadius: 1,}
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          },{
            name: '水产',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40, 22, 18, 35, 42, 40],
            itemStyle: {
              normal: {color: "#436EEE", barBorderRadius: 1,}
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          },{
            name: '蛋品',
            type: 'bar',
            stack: 'stack',
            barWidth: '25',
            data: [40, 22, 18, 35, 42, 40, 40, 22, 18, 35, 42, 40],
            itemStyle: {
              normal: {color: "#3FBB49", barBorderRadius: 1,},
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
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
