<template>
  <div>
    <div class="flex" style="background: #001E44;color: #fff;height: 100%">
      <table>
        <tr>
          <td style="padding-right: 45px">
            <div class="leftpart">风险监测</div>
          </td>
          <td>
            <div class="rightpart">
              实时上报量
            </div>
          </td>
          <td>
            <div class="rightpart">
              月至今上报量
            </div>
          </td>
          <td>
            <div class="rightpart">
              年至今上报量
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="rightpart">
              抽检上报
            </div>
          </td>
          <td>
            <div class="rightpart">
              181
            </div>
          </td>
          <td>
            <div class="rightpart">
              298
            </div>
          </td>
          <td>
            <div class="rightpart">
              780
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="rightpart">
              例外案件
            </div>
          </td>
          <td>
            <div class="rightpart">
              181
            </div>
          </td>
          <td>
            <div class="rightpart">
              298
            </div>
          </td>
          <td>
            <div class="rightpart">
              780
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="rightpart">
              商品投诉
            </div>
          </td>
          <td>
            <div class="rightpart">
              181
            </div>
          </td>
          <td>
            <div class="rightpart">
              298
            </div>
          </td>
          <td>
            <div class="rightpart">
              780
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="rightpart">
              诉讼案件
            </div>
          </td>
          <td>
            <div class="rightpart">
              181
            </div>
          </td>
          <td>
            <div class="rightpart">
              298
            </div>
          </td>
          <td>
            <div class="rightpart">
              780
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="rightpart">
              食安舆情
            </div>
          </td>
          <td>
            <div class="rightpart">
              181
            </div>
          </td>
          <td>
            <div class="rightpart">
              298
            </div>
          </td>
          <td>
            <div class="rightpart">
              780
            </div>
          </td>
        </tr>
      </table>

      <div class="flex-column" id="myChart1" :style="{width: '520px', height: '400px'}"></div>
      <div class="flex-column" id="myChart2" :style="{width: '520px', height: '400px'}"></div>
    </div>
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
  name: "feng-xian-jian-ce",
  mounted() {
    this.myChart1();
    this.myChart2();
  },
  methods: {
    myChart1(){
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = echarts.init(document.getElementById('myChart1'), 'dark');

      // 绘制图表
      myChart1.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title:{
          text: '月抽检省区上报量TOP10',
        },
        backgroundColor: '#0B284C',
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value',
          splitLine: {
            show: false,
          }
        },
        yAxis: {
          type: 'category',
          data: ["福建", "重庆", "广东", "广西", "安徽", "江苏", "河北", "河南", "陕西", "江西"],
          axisTick: 'none',
          axisLine: 'none',
        },
        series: [
          {
            name: '蛋品',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410, 212, 201, 154],
            itemStyle: {
              normal: {color: "#5A9F46", barBorderRadius: 10,}
            }
          }
        ]
      });
    },
    myChart2(){
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = echarts.init(document.getElementById('myChart2'), 'dark');

      // 绘制图表
      myChart2.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title:{
          text: '月抽检省区通报量TOP10'
        },
        backgroundColor: '#0B284C',
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend:{
          x: 'center',
          data: ['例外案件', '商品投诉','诉讼案件','食安舆情']
        },
        xAxis: {
          show: false,
          type: 'value',
          splitLine: {
            show: false,
          }
        },
        yAxis: {
          type: 'category',
          data: ["重庆", "广东", "广西", "安徽", "江苏", "河北", "河南"],
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: '20'
            }
          }
        },
        series: [
          {
            name: '例外案件',
            type: 'bar',
            stack: 'stack',
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
              normal: {color: "#A35156", barBorderRadius: 28}
            }
          },{
            name: '商品投诉',
            type: 'bar',
            stack: 'stack',
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
              normal: {color: "#AA594B", barBorderRadius: 28}
            }
          },{
            name: '诉讼案件',
            type: 'bar',
            stack: 'stack',
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
              normal: {color: "#B07267", barBorderRadius: 28}
            }
          },{
            name: '食安舆情',
            type: 'bar',
            stack: 'stack',
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
              normal: {color: "#E6CBC6", barBorderRadius: 28}
            }
          }
        ]
      });
    }
  }
}
</script>

<style scoped>
  .flex{
    display: flex;
  }
  .leftpart{
    font-size: 28px;
    background: #0066FF;
    padding: 5px;
  }
  .rightpart{
    background: #0B284C;
    font-size: 20px;
    padding: 2px;
    margin: 2px;
    text-align: center;
    height: 40px;
  }
</style>
