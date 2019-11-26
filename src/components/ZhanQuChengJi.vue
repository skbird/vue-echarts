<template>
  <div style="background-color:#0B284C">
    <div class="box" id="myChart1" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}"></div>
    <div class="box" id="myChart2" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}"></div>
    <div class="box" id="myChart3" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}"></div>
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

  export default {
      name: "zhan-qu-cheng-ji",
    mounted() {
      this.myChart1();
      this.myChart2();
      this.myChart3();
    },
    methods: {
      myChart1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = echarts.init(document.getElementById('myChart1'), 'dark');
        myChart1.setOption({
          backgroundColor: '#0B284C',
          title:{
            text: '战区成绩分布',
          },
          tooltip: {
            show: false
          },
          grid: {
            top: '18%',
            left: '0%',
            right: '0%',
            bottom: '25%',
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#d1e6eb',
                margin: 15,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['一区', '二区', '三区', '四区', '五区', '六区', '七区', '八区'],
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
            data: [150, 200, 259, 360, 378, 450, 450,330]
          }]
        })
      },
      myChart2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = echarts.init(document.getElementById('myChart2'), 'dark');
        myChart2.setOption({
          backgroundColor: '#0B284C',
          title:{
            text: '省区成绩分布',
          },
          tooltip: {
            show: false
          },
          grid: {
            top: '18%',
            left: '0%',
            right: '0%',
            bottom: '25%',
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#d1e6eb',
                margin: 15,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['一区', '二区', '三区', '四区', '五区', '六区', '七区', '八区'],
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
            data: [150, 200, 259, 360, 378, 450, 450,330]
          }]
        })
      },
      myChart3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart3 = echarts.init(document.getElementById('myChart3'), 'dark');
        myChart3.setOption({
          backgroundColor: '#0B284C',
          title:{
            text: '区域成绩分布',
          },
          tooltip: {
            show: false
          },
          grid: {
            top: '18%',
            left: '0%',
            right: '0%',
            bottom: '25%',
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#d1e6eb',
                margin: 15,
              },
            },
            axisTick: {
              show: false,
            },
            data: ['一区', '二区', '三区', '四区', '五区', '六区', '七区', '八区'],
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
            data: [150, 200, 259, 360, 378, 450, 450,330]
          }]
        })
      }
    }
  }
</script>

<style scoped>
  .box{
    display: inline-block;
  }
</style>
