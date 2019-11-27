<template>
  <div>
    <div id="myChart1" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}"></div>
    <div id="myChart2" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}"></div>
  </div>
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
    name: "men-dian-cheng-ji",
    mounted() {
      this.myChart1();
      this.myChart2();
    },
    methods: {
      myChart1() {
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = echarts.init(document.getElementById('myChart1'), 'dark');
        myChart1.setOption({
          backgroundColor:'#0B284C',
          title: {
            text: '门店成绩TOP5'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
          },
          xAxis: [{
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false
            },
            type: 'category',
            data: ['象园店','屏西店','华林店','鼓楼店','黎明店']
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '门店成绩',
            type: 'bar',
            itemStyle:{
              normal:{color:'#F8BB52'},
            },
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            markPoint : {
              data: [
                {type: 'max', name: '最大值'}
              ]
            },
            data: [2031, 1793, 3640, 2593, 4377]
          }]
        })
      },
      myChart2() {
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = echarts.init(document.getElementById('myChart2'), 'dark');
        myChart2.setOption({
          backgroundColor:'#0B284C',
          title: {
            text: '门店成绩BOTTOM5'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
          },
          xAxis: [{
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false
            },
            data: ['象园店','屏西店','华林店','鼓楼店','黎明店']
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '门店成绩',
            type: 'bar',
            itemStyle:{
              normal:{color:'#AE5557'},
            },
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            markPoint : {
              data: [
                {type: 'min', name: '最小值'}
              ]
            },
            data: [2031, 1793, 3640, 2593, 4377]
          }]
        })
      }
    }
  }
</script>

<style scoped>

</style>
