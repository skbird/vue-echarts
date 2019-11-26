<template>
  <div id="myChart" :style="{width: '1000px', height: '1000px'}"></div>
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
              fontSize: 24
            }
          },
          backgroundColor: '#0B284C',
          legend: {
            show: false
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '6%',
            top:'0%',
          },
          xAxis: {
            data: ['标签标识', '商品质量', '过期', '价签价格', '安全管理', '版权侵犯', '工程设施','购物环境','设施设备','现场管理','宣传用语','其他'],
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 20
              },
              formatter:function(val){
                var strs = val.split(''); //字符串数组
                var str = ''
                for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                  str += s;
                  if (!(i % 2)) str += '\n';
                }
                return str
              }
            }
          },
          yAxis: {
            show: false
          },
          series: [
            {
              name:'Step Middle',
              type:'line',
              step: 'middle',
              symbolSize: 10,   //设定实心点的大小
              data:[220, 282, 201, 234, 290, 430, 410,100,33,220,339,239],
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#fff',
                  lineStyle: {        // 系列级个性化折线样式
                    width: 2,
                    type: 'solid',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#4AA9E5'
                    }])
                  }
                }
              },
              areaStyle:{
                normal:{
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(80,141,255,0.39)'
                  }, {
                    offset: .34,
                    color: 'rgba(56,155,255,0.25)'
                  },{
                    offset: 1,
                    color: 'rgba(38,197,254,0.00)'
                  }])
                }
              },//区域颜色渐变
            }
          ]
        });
      }
    },

  }
</script>

<style scoped>


</style>
