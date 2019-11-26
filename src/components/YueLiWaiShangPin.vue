<template>
  <div>
    <div id="myChart" :style="{width: '800px', height: '600px'}"></div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入饼图组件
  require('echarts/lib/chart/pie')
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
          backgroundColor: '#0B284C',
          tooltip: {
            trigger: 'item'
          },
          title: {
            text: '月例外商品分布',
            left: '20px',
            textStyle: {
              fontSize: 16,
            }
          },
          visualMap: {
            show: false,
            min: 500,
            max: 600,
            inRange: {
              //colorLightness: [0, 1]
            }
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            color: ['#E9AF61', '#EA97FB', '#65E2A0', '#3ACDFD'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [{
              value: 1,
              name: '用品',
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            },{
              value: 6,
              name: '食品-生鲜',
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            },{
              value: 3,
              name: '食品-加工',
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            },{
              value: 3,
              name: '食品-食百',
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            }
            ].sort(function (a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              normal: {
                formatter: ['{c|{b}}', '{b|{d}}',].join('\n'),
                rich: {
                  c: {
                    color: '#ffffff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: 5
                  },
                  b: {
                    color: '#ffffff',
                    fontSize: 20,
                    height: 40
                  },
                },
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
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
