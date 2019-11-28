<template>
  <Border class="flex" style="width: 100%;height: 550px">
    <div class="flex" style="width: 100%;height: 100%">
      <div id="myChart_mdcj_1" :style="{width: '100%', height: '100%'}"></div>
      <div id="myChart_mdcj_2" :style="{width: '100%', height: '100%'}"></div>
    </div>
  </Border>
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

  import Border from '@/components/Border'

  export default {
    name: "men-dian-cheng-ji",
    components: {
      Border
    },
    mounted() {
      this.myChart_mdcj_1();
      this.myChart_mdcj_2();
    },
    methods: {
      myChart_mdcj_1() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_mdcj_1'), 'dark');
        myChart.setOption({
          backgroundColor:'#0B284C',
          title: {
            left: 20,
            top: 10,
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
            barWidth: 60,
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
      myChart_mdcj_2() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_mdcj_2'), 'dark');
        myChart.setOption({
          backgroundColor:'#0B284C',
          title: {
            left: 20,
            top: 10,
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
            barWidth: 60,
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
  .flex{
    display: flex;
    flex-direction: column;
  }
</style>
