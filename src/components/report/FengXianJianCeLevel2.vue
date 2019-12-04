<template>
  <div class="flex" style="width: 100%">

    <Border style="width: 25%;height: 400px">
      <div id="myChart_ylwsp" :style="{width: '100%', height: '100%'}"></div>
    </Border>
    <Border style="width: 25%;height: 400px">
      <div id="myChart_ylwwt" :style="{width: '100%', height: '100%'}"></div>
    </Border>

    <Border style="width: 25%;height: 400px">
      <div id="myChart_ylwts" :style="{width: '100%', height: '100%'}"></div>
    </Border>

    <Border style="width: 25%;height: 400px">
      <div id="myChart_ylwaj" :style="{width: '100%', height: '100%'}"></div>
    </Border>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/theme/dark');

import Border from '@/components/report/Border'

let initData={
  complaintCategory:[],
  complaintProblem:[],
  complaints:[],
  complaintStores:[]
}

export default {
  name: "feng-xian-jian-ce-level2",
  components: {
    Border
  },
  data() {
    return initData
  },
  mounted() {
    this.refresh();
  },
  methods: {
    async refresh(){
      await this.getMonthComplaintReport();
      this.myChart_ylwsp();
      this.myChart_ylwwt();
      this.myChart_ylwts();
      this.myChart_ylwaj();
    },
    async getMonthComplaintReport() {
      try {
        await Promise.race([
          this.$store.dispatch("ajaxRequest", {
            state: ['monthComplaintReportData'],
            type: 'getMonthComplaintReportData',
            url: '/api/checking/dataReport/getMonthComplaintReport',
            params: {}
          }),
          this.Util.timeout()
        ]);
        let _result = this.$store.state.monthComplaintReportData;
        this.complaintCategory = _result.complaintCategory;
        this.complaintProblem = _result.complaintProblem;
        this.complaints = _result.complaints;
        this.complaintStores = _result.complaintStores;

      }catch (ex) {
        this.Util.doException(this, ex)
      } finally {
      }
    },
    myChart_ylwsp() {
      let data = [];
      this.complaintCategory.forEach((item,index,array)=>{
        data.push({
          value: item.countValue,
          name: item.bigCategoryName,
          itemStyle: {
            borderColor:'#FFF',
            borderWidth:4
          }
        });
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_ylwsp'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#0B284C',
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: '月例外商品分布',
          left: '20px',
          top: '10px',
          textStyle: {
            fontSize: 16,
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          top: '10%'
        },
        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        series: [{
          name: '',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          color: ['#61AA45', '#14F2F3', '#F7C066', '#FE7C72'],
          data: data.sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            normal: {
              formatter: ['{c|{b}}', '{b|{d}}%',].join('\n'),
              rich: {
                c: {
                  color: '#fff',
                  fontSize: 14,
                  lineHeight: 5
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  height: 40
                },
              },
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              shadowColor: 'rgba(0, 0, 0, 0.8)',
              shadowBlur: 50,
            }
          }
        }]
      });
    },
    myChart_ylwwt() {
      let data = [];
      this.complaintProblem.forEach((item,index,array)=>{
        data.push({
          value: item.countValue,
          name: item.comProAttr,
          itemStyle: {
            borderColor:'#FFF',
            borderWidth:4
          }
        });
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_ylwwt'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#0B284C',
        legend: {
          show: false
        },
        title: {
          text: '月例外案件问题分布',
          left: '20px',
          top: '10px',
          textStyle: {
            fontSize: 16,
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          top: '10%'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var color = params.color;//图例颜色
            var htmlStr ='<div>';
            htmlStr += params.name + '：'+params.value + '件';//x轴的名称
            //为了保证和原来的效果一样，这里自己实现了一个点的效果
            htmlStr += '<span ></span>';
            //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
            htmlStr += '</div>';
            return htmlStr;
          }
        },
        series : [{
          type: 'pie',
          z: 10,
          startAngle: 160,
          radius: ['60', '90'],
          roseType : 'radius',
          color: ['#61AA45', '#14F2F3', '#F7C066', '#FE7C72'],
          label: {
            normal: {
              formatter: ['{c|{b}}', '{b|{d}}%',].join('\n'),
              rich: {
                c: {
                  color: '#fff',
                  fontSize: 14,
                  lineHeight: 5
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  height: 40
                },
              },
            }
          },
          data: data
        }]
      });
    },
    myChart_ylwts() {
      let data = [];
      this.complaints.forEach((item,index,array)=>{
        data.push({
          value: item.countValue,
          name: item.complaintType,
          itemStyle: {
            borderColor:'#FFF',
            borderWidth:4
          }
        });
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_ylwts'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#0B284C',
        legend: {
          show: false
        },
        title: {
          text: '月商品投诉问题分布',
          left: '20px',
          top: '10px',
          textStyle: {
            fontSize: 16,
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          top: '10%'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var color = params.color;//图例颜色
            var htmlStr ='<div>';
            htmlStr += params.name + '：'+params.value + '件';//x轴的名称
            //为了保证和原来的效果一样，这里自己实现了一个点的效果
            htmlStr += '<span ></span>';
            //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
            htmlStr += '</div>';
            return htmlStr;
          }
        },
        series : [{
          name:'',
          type:'pie',
          radius: ['60', '80'],
          hoverAnimation: false,
          avoidLabelOverlap: false,
          color: ['#61AA45', '#14F2F3', '#F7C066', '#FE7C72'],
          label: {
            normal: {
              formatter: ['{c|{b}}', '{b|{d}}%',].join('\n'),
              rich: {
                c: {
                  color: '#fff',
                  fontSize: 14,
                  lineHeight: 5
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  height: 40
                },
              },
            }
          },
          data:data
        }]
      });
    },
    myChart_ylwaj() {
      let data = [];
      let storeName = [];
      this.complaintStores.forEach((item,index,array)=>{
        storeName.push(item.storeName);
        data.push(item.countValue);
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_ylwaj'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#0B284C',
        title: {
          text: '月诉讼案件门店分布',
          left: '20px',
          top: '10px',
          textStyle: {
            fontSize: 16,
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '16%',
          top: '10%'
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: false
        },
        xAxis: {
          data: storeName,
          splitLine: {
            show: false,
          },
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            show: true,
            // interval: 0,    //强制文字产生间隔
            // rotate: 45,     //文字逆时针旋转45°
            formatter:function(val){
              var strs = val.split(''); //字符串数组
              var str = ''
              for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                str += s;
                if (!(i % 2)) str += '\n';
              }
              return str
            },
            textStyle: {
              fontSize: 14
            }
          }
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '月诉讼案件',
          type: 'bar',
          stack: 'stack',
          barMinWidth: 1,
          data: data,
          itemStyle: {
            normal: {color: "#0DEDEE", barBorderRadius: 40}
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 14,
              }
            }
          }
        }]
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
</style>
