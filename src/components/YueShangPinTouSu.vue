<template>
  <div>
    <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
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
        let colors = ['#EEEC0D', '#E55125', '#5EA6FE', '#F94ED2', '#67D670', '#67FFFC']
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'), 'dark');

        // 绘制图表
        myChart.setOption({
          backgroundColor: '#0B284C',
          legend: {
            show: false
          },
          series : [{
            name:'访问来源',
            type:'pie',
            radius: ['100', '140'],
            hoverAnimation: false,
            avoidLabelOverlap: false,
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
            emphasis: {
              label: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data:[
              {
                value:12, name:'转介服务商',
                highlight: true,
                label: {
                  show: true
                },
                itemStyle: {
                  borderColor:'#FFF',
                  borderWidth:4
                }
              },
              {
                value:20, name:'外部代理人',
                itemStyle: {
                  borderColor:'#FFF',
                  borderWidth:4
                }
              },
              {
                value:10, name:'战略合作伙伴',
                itemStyle: {
                  borderColor:'#FFF',
                  borderWidth:4
                }
              },
              {
                value:68, name:'内部销售代表',
                itemStyle: {
                  borderColor:'#FFF',
                  borderWidth:4
                }
              },
            ]}
          ]
        });
      }
    }

  }
</script>

<style scoped>


</style>
