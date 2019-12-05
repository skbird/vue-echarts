<template>
    <div class=""flex style="width: 100%">
      <div style="background: #001E44;color: #fff;width: 50.8%">
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
              <div class="rightpart blue-td">
                {{riskCountList[0].todayNum}}
              </div>
            </td>
            <td>
              <div class="rightpart yellow-td">
                {{riskCountList[0].monthNum}}
              </div>
            </td>
            <td>
              <div class="rightpart red-td">
                {{riskCountList[0].yearNum}}
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
              <div class="rightpart blue-td">
                {{riskCountList[1].todayNum}}
              </div>
            </td>
            <td>
              <div class="rightpart yellow-td">
                {{riskCountList[1].monthNum}}
              </div>
            </td>
            <td>
              <div class="rightpart red-td">
                {{riskCountList[1].yearNum}}
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
              <div class="rightpart blue-td">
                {{riskCountList[2].todayNum}}
              </div>
            </td>
            <td>
              <div class="rightpart yellow-td">
                {{riskCountList[2].monthNum}}
              </div>
            </td>
            <td>
              <div class="rightpart red-td">
                {{riskCountList[2].yearNum}}
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
              <div class="rightpart blue-td">
                {{riskCountList[3].todayNum}}
              </div>
            </td>
            <td>
              <div class="rightpart yellow-td">
                {{riskCountList[3].monthNum}}
              </div>
            </td>
            <td>
              <div class="rightpart red-td">
                {{riskCountList[3].yearNum}}
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
              <div class="rightpart blue-td">
                {{riskCountList[4].todayNum}}
              </div>
            </td>
            <td>
              <div class="rightpart yellow-td">
                {{riskCountList[4].monthNum}}
              </div>
            </td>
            <td>
              <div class="rightpart red-td">
                {{riskCountList[4].yearNum}}
              </div>
            </td>
          </tr>
        </table>
      </div>

      <Border style="width: 24.6%;height: 400px">
        <div id="myChart_ycjsqsb" :style="{width: '100%', height: '400px'}"></div>
      </Border>

      <Border style="width: 24.6%;height: 400px">
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

let initData={
  riskCountList:[],
  spotCheckList:[],
  riskSpotList:[]
}

export default {
  name: "feng-xian-jian-ce",
  data() {
    return initData
  },
  mounted() {
    this.refresh();
  },
  components: {
    Border
  },
  methods: {
    async refresh(){
      await this.getRiskCountReport();
      this.myChart_ycjsqsb();
      this.myChart_ycjsqtb();
    },
    async getRiskCountReport() {
      try {
        await Promise.race([
          this.$store.dispatch("ajaxRequest", {
            state: ['riskCountReportData'],
            type: 'getRiskCountReport',
            url: '/api/checking/dataReport/getRiskCountReport',
            params: {}
          }),
          this.Util.timeout()
        ]);
        let _result = this.$store.state.riskCountReportData;
        this.riskCountList = _result.riskCountList;
        this.spotCheckList = _result.spotCheckList;
        this.riskSpotList = _result.riskSpotList;

      }catch (ex) {
        this.Util.doException(this, ex)
      } finally {
      }
    },

    myChart_ycjsqsb(){
      let provinces = [];
      let data = [];
      this.spotCheckList.forEach((item,index,array)=>{
        provinces.push(item.provinceName);
        data.push(item.countValue);
      });
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
          left: '15%',
          right: '5%',
          top: '10%',
          bottom: '0%',
          containLabel:false
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
          data: provinces,
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: '14'
            }
          },
          inverse: true,//倒叙
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
            data: data,
            itemStyle: {
              normal: {color: "#5A9F46", barBorderRadius: 10}
            }
          }
        ]
      });
    },
    myChart_ycjsqtb(){
      let provinces = [];
      let lwajData = [];
      let sptsData = [];
      let ssajData = [];
      let saYqData = [];

      this.riskSpotList.forEach((item,index,array)=>{
        if(item.type==1){  //例外案件
          item.spotCheckList.forEach((item,index,array)=>{
            lwajData.push(item.countValue);
            provinces.push(item.provinceName);
          });
        }
        if(item.type==2){  //例外案件
          item.spotCheckList.forEach((item,index,array)=>{
            sptsData.push(item.countValue);
            provinces.push(item.provinceName);
          });
        }
        if(item.type==3){  //例外案件
          item.spotCheckList.forEach((item,index,array)=>{
            ssajData.push(item.countValue);
            provinces.push(item.provinceName);
          });
        }
        if(item.type==4){  //例外案件
          item.spotCheckList.forEach((item,index,array)=>{
            saYqData.push(item.countValue);
            provinces.push(item.provinceName);
          });
        }
      });

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
          left: '25%',
          right: '5%',
          top: '20%',
          bottom: '0%'
        },
        legend:{
          x: 'center',
          data: ['\n','\n','例外案件', '商品投诉','诉讼案件','食安舆情'],
          top:'3%',
          bottom:'3%'
        },
        xAxis: {
          show: false,
          type: 'value',
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          data: provinces,
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: '14'
            }
          },
          inverse: true,//倒叙
        },
        series: [{
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
            data: lwajData,
            itemStyle: {
              normal: {color: "#A35156", barBorderRadius: 10}
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
          data: sptsData,
            itemStyle: {
              normal: {color: "#AA594B", barBorderRadius: 10}
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
          data: ssajData,
            itemStyle: {
              normal: {color: "#B07267", barBorderRadius: 10}
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
            data: saYqData,
              itemStyle: {
                normal: {color: "#E6CBC6", barBorderRadius: 10}
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
    height: 100%;
  }

  td {
    width: 25%;
  }

  .leftpart{
    font-size: 30px;
    background: #0066FF;
    text-align: center;
    border: 2px #797979 solid;
    margin-left: 2px;
    width: 90%;
    font-weight: bold;
  }

  .rightpart{
    display: flex;
    background: #0B284C;
    height: 50px;
    width: 90%;
    font-size: 22px;
    font-weight: bold;
    padding: 2px;
    margin: 2px;
    flex-direction: column;
    justify-content: center;
  }


  .blue-td{
    color: #14F2F3;
  }
  .yellow-td{
    color: #F7C066;
  }
  .red-td{
    color: #FE7C72;
  }
</style>
