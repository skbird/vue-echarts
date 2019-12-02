<template>
    <div class=""flex style="width: 100%">
      <div style="background: #001E44;color: #fff;width: 45%">
        <table>
          <tr>
            <td style="padding: 0;margin: 0">
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
      </div>

      <Border style="width: 33%;height: 400px">
        <div id="myChart_ycjsqsb" :style="{width: '100%', height: '400px'}"></div>
      </Border>

      <Border style="width: 33%;height: 400px">
        <div id="myChart_ycjsqtb" :style="{width: '100%', height: '400px'}"></div>
      </Border>

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

import Border from '@/components/report/Border'

export default {
  name: "feng-xian-jian-ce",
  mounted() {
    this.myChart_ycjsqsb();
    this.myChart_ycjsqtb();
  },
  components: {
    Border
  },
  methods: {
    myChart_ycjsqsb(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_ycjsqsb'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title:{
          text: '月抽检省区上报量TOP10',
          left: '20px',
          top: '10px',
          textStyle: {
            color: '#ffffff',
            fontSize: '16',
          }
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
            barMinWidth: 1,
            data: [150, 212, 201, 154, 190, 330, 410, 212, 201, 154],
            itemStyle: {
              normal: {color: "#5A9F46", barBorderRadius: 10,}
            }
          }
        ]
      });
    },
    myChart_ycjsqtb(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_ycjsqtb'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        title:{
          text: '月抽检省区通报量TOP10',
          left: '20px',
          top: '10px',
          textStyle: {
            color: '#ffffff',
            fontSize: '16',
          }
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
          data: ['\n','\n','\n','例外案件', '商品投诉','诉讼案件','食安舆情']
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
              fontSize: '14'
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
                  fontSize: '14',
                }
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
              normal: {color: "#A35156", barBorderRadius: 20}
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
              normal: {color: "#AA594B", barBorderRadius: 20}
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
            barMinWidth: 1,
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
    flex-direction: row;
  }
  table{
    width: 100%;
  }

  td {
    width: 25%;
  }

  .leftpart{
    font-size: 30px;
    background: #0066FF;
    text-align: center;
    border: 2px #797979 solid;
    margin-left: 3px;
    width: 90%;
    font-weight: bold;
  }

  .rightpart{
    display: flex;
    background: #0B284C;
    height: 50px;
    width: 90%;
    font-size: 20px;
    font-weight: bold;
    padding: 2px;
    margin: 2px;
    flex-direction: column;
    justify-content: center;
  }
</style>
