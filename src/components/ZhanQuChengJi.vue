<template>
  <div class="flex" style="width: 100%">
    <Border style="width: 33%;height: 420px">
      <div id="myChart_zqcj_1" :style="{width: '100%', height: '100%'}"></div>
    </Border>
    <Border style="width: 33%;height: 420px">
      <div id="myChart_zqcj_2" :style="{width: '100%', height: '100%'}"></div>
    </Border>
    <Border style="width: 33%;height: 420px">
      <div id="myChart_zqcj_3" :style="{width: '100%', height: '100%'}"></div>
    </Border>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/theme/dark');

  import Border from '@/components/Border'

  export default {
    name: "zhan-qu-cheng-ji",
    components: {
      Border
    },
    mounted() {
      this.myChart_zqcj_1();
      this.myChart_zqcj_2();
      this.myChart_zqcj_3();
    },
    methods: {
      myChart_zqcj_1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_zqcj_1'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        myChart.setOption({
          backgroundColor: '#0B284C',
          title:{
            left: '20px',
            top: '10px',
            text: '战区成绩分布',
          },
          tooltip: {
            show: false
          },
          grid: {
            top: '20%',
            left: '0%',
            right: '0%',
            bottom: '10%'
          },
          xAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#d1e6eb',
                margin: 5,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['一区', '二区', '三区', '四区', '五区', '六区', '七区', '八区', '九区', '十区'],
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#AC5A5D", // 线条颜色
              },
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff',
              }
            },
            itemStyle: {
              normal: {
                color: "#fff",
                borderColor: '#AC5A5D'
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#A5595D'
                },
                  {
                    offset: 1,
                    color: '#102E57'
                  }
                ], false)
              }
            },
            data: [60, 65, 78, 65, 81, 63, 86,65,90,73]
          }]
        })
      },
      myChart_zqcj_2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_zqcj_2'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        myChart.setOption({
          backgroundColor: '#0B284C',
          title:{
            left: '20px',
            top: '10px',
            text: '省区成绩分布',
          },
          tooltip: {
            show: false
          },
          grid: {
            top: '20%',
            left: '0%',
            right: '0%',
            bottom: '10%'
          },
          xAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#d1e6eb',
                margin: 5,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['江西', '江苏', '广西', '广东', '河南', '河北', '安徽'],
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#F7BA03", // 线条颜色
              },
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff',
              }
            },
            itemStyle: {
              normal: {
                color: "#fff",
                borderColor: '#F7BA03'
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#F7BA03'
                },
                  {
                    offset: 1,
                    color: '#102E57'
                  }
                ], false)
              }
            },
            data: [73, 78, 82, 78, 84, 79, 86]
          }]
        })
      },
      myChart_zqcj_3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_zqcj_3'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        myChart.setOption({
          backgroundColor: '#0B284C',
          title:{
            left: '20px',
            top: '10px',
            text: '区域成绩分布',
          },
          tooltip: {
            show: false
          },
          grid: {
            top: '20%',
            left: '0%',
            right: '0%',
            bottom: '10%'
          },
          xAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#d1e6eb',
                margin: 5,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['闽东', '闽南', '泉州', '鼓楼', '仓山', '莆田', '台江'],
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#0CBFD6", // 线条颜色
              },
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff',
              }
            },
            itemStyle: {
              normal: {
                color: "#fff",
                borderColor: '#0CBFD6'
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#0CBFD6'
                },
                  {
                    offset: 1,
                    color: '#102E57'
                  }
                ], false)
              }
            },
            data: [73, 78, 82, 78, 84, 79, 86]
          }]
        })
      }
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
</style>
