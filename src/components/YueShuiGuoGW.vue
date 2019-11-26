<template>
  <div id="myChart" :style="{width: '800px', height: '600px'}"></div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/funnel')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/theme/dark');

  export default {
    name: "YueShuiGuoGW",
    data() {

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
            trigger: 'item',
            show: false
          },
          toolbox: {
            feature: {
              dataView: {
                readOnly: false
              },
              show: false
            }
          },
          title:{
            text: '月抽检省区通报量TOP10'
          },
          backgroundColor: '#0B284C',
          legend: {
            show: false
          },
          calculable: true,
          series: [{
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 30,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                formatter: "{b}/{c}",
                position: 'inside'
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: [{
              value: 90,
              name: '韭菜'
              },{
                value: 45,
                name: '芹菜'
              }, {
                value: 34,
                name: '菠菜'
              }, {
                value: 22,
                name: '黄瓜'
              }, {
                value: 10,
                name: '韭菜'
              }, {
                value: 8,
                name: '芹菜'
              }, {
                value: 5,
                name: '菠菜'
              }, {
                value: 3,
                name: '黄瓜'
              }, {
                value: 2,
                name: '黄瓜'
              }
            ]
          }]
        });
      }
    },

  }
</script>
