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

export default {
  name: "feng-xian-jian-ce-level2",
  mounted() {
    this.myChart_ylwsp();
    this.myChart_ylwwt();
    this.myChart_ylwts();
    this.myChart_ylwaj();
  },
  components: {
    Border
  },
  methods: {
    myChart_ylwsp() {
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
        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          color: ['#E9AF61', '#EA97FB', '#65E2A0', '#3ACDFD'], //'#FBFE27','rgb(11,228,96)','#FE5050'
          data: [{
            value: 1,
            name: '用品',
            itemStyle: {
              borderColor:'#FFF',
              borderWidth:4
            }
          },{
            value: 6,
            name: '食品-生鲜',
            itemStyle: {
              borderColor:'#FFF',
              borderWidth:4
            }
          },{
            value: 3,
            name: '食品-加工',
            itemStyle: {
              borderColor:'#FFF',
              borderWidth:4
            }
          },{
            value: 3,
            name: '食品-食百',
            itemStyle: {
              borderColor:'#FFF',
              borderWidth:4
            }
          }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            normal: {
              formatter: ['{c|{b}}', '{b|{d}}',].join('\n'),
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
      let colors = ['#EEEC0D', '#E55125', '#5EA6FE', '#F94ED2', '#67D670', '#67FFFC']
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
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var color = params.color;//图例颜色
            var htmlStr ='<div>';
            htmlStr += params.name + '<br/>';//x轴的名称
            //为了保证和原来的效果一样，这里自己实现了一个点的效果
            htmlStr += '<span ></span>';

            //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
            htmlStr += params.seriesName + '：'+params.value + '笔';

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
          color: [],
          label: {
            normal: {
              formatter: ['{c|{b}}', '{b|{d}}',].join('\n'),
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
          data: [
            {
              value:28, name:'酒后代驾',
              labelLine: {
                lineStyle: {
                  color: colors[0]
                }
              },
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4,
              }
            },
            {
              value:22, name:'高铁接送',
              labelLine: {
                lineStyle: {
                  color: colors[1]
                }
              },
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4,
              }
            },
            {
              value:16, name:'道路救援',
              labelLine: {
                lineStyle: {
                  color: colors[2]
                }
              },
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4,
              }
            },
            {
              value:20, name:'年检代办',
              labelLine: {
                lineStyle: {
                  color: colors[3]
                }
              },
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4,
              }
            },
            {
              value:14, name:'其他',
              labelLine: {
                lineStyle: {
                  color: colors[4]
                }
              },
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4,
              }
            },
            {
              value:16, name:'机场接送',
              labelLine: {
                lineStyle: {
                  color: colors[5]
                }
              },
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4,
              }
            }
          ]
        }
        ]
      });
    },
    myChart_ylwts() {
      let colors = ['#EEEC0D', '#E55125', '#5EA6FE', '#F94ED2', '#67D670', '#67FFFC']
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
        series : [{
          name:'访问来源',
          type:'pie',
          radius: ['60', '80'],
          hoverAnimation: false,
          avoidLabelOverlap: false,
          label: {
            normal: {
              formatter: ['{c|{b}}', '{b|{d}}',].join('\n'),
              rich: {
                c: {
                  color: '#ffffff',
                  fontSize: 14,
                  lineHeight: 5
                },
                b: {
                  color: '#ffffff',
                  fontSize: 14,
                  height: 40
                },
              },
            }
          },
          emphasis: {
            label: {
              show: true
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data:[
            {
              value:12, name:'转介服务商',
              highlight: true,
              label: {
                show: true
              },
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            },
            {
              value:20, name:'外部代理人',
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            },
            {
              value:10, name:'战略合作伙伴',
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            },
            {
              value:68, name:'内部销售代表',
              itemStyle: {
                borderColor:'#FFF',
                borderWidth:4
              }
            },
          ]}
        ]
      });
    },
    myChart_ylwaj() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_ylwaj'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        title: {
          text: '月诉讼案件门店分布',
          left: '20px',
          top: '10px',
          textStyle: {
            fontSize: 16,
          }
        },
        backgroundColor: '#0B284C',
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: false
        },
        xAxis: {
          data: ["黎明店", "象园店", "黎明店", "象园店", "黎明店"],
          splitLine: {
            show: false,
          },
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            show: true,
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
          data: [20, 40, 78, 50, 30],
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
