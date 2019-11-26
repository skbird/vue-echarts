<template>
  <div>
    <div class="box" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}">
      <div id="myChart1"></div>
    </div>
    <div class="box" id="myChart2" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}"></div>
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
          backgroundColor:'#FFFFFF',
          title: {
            text: '门店成绩TOP5'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['1月','2月','3月','4月','5月']
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '检查企业数',
            type: 'bar',
            itemStyle:{
              normal:{color:'#01949B'},
            },
            data: [2031, 1793, 3640, 2593, 4377]
          }]
        })
      },
      myChart2() {

      }
    }
  }
</script>

<style scoped>
  .box{
    display: inline-block;
  }
</style>
