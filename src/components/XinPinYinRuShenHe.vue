<template>
  <Border class="flex" style="width: 100%;height: 400px">
    <div class="flex" style="width: 100%;height: 100%">
      <div :style="{width: '33%', height: '100%'}">
        <div id="myChart_xpyr_1" :style="{width: '100%', height: '100%'}"></div>
      </div>
      <div :style="{width: '33%', height: '100%'}">
        <div id="myChart_xpyr_2" :style="{width: '100%', height: '100%'}"></div>
      </div>
      <div :style="{width: '33%', height: '100%'}">
        <div id="myChart_xpyr_3" :style="{width: '100%', height: '100%'}"></div>
      </div>
    </div>
  </Border>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入仪表盘
  require('echarts/lib/chart/gauge')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/theme/dark');

  import Border from '@/components/Border'

  export default {
      name: "zi-zhi-he-gui",
    mounted() {
      this.myChart_xpyr_1();
      this.myChart_xpyr_2();
      this.myChart_xpyr_3();
    },
    components: {
      Border
    },
    methods: {
      myChart_xpyr_1(){
        var dataAll = [
          ["油耗", 230],
          ["行车距离", 450],
          ["总里程", 600],
        ];
        var position = [
          ['25%', '75%'],
          ['50%', '45%'],
          ['75%', '75%']
        ];
        var getStyle = function(value) {
          if (value <= 30) {
            return {
              splitNumber: 3, //刻度数量
              min: 0,
              max: 30,
              startAngle: 225,
              endAngle: 144,
              color: [
                [1, '#fff']
              ]
            };
          } else if (value >= 90) {
            return {
              splitNumber: 1, //刻度数量
              min: 90,
              max: 100,
              startAngle: -18,
              endAngle: -45,
              color: [
                [1, '#fff']
              ]
            };
          } else {
            return {
              splitNumber: 6, //刻度数量
              min: 30,
              max: 90,
              startAngle: 144,
              endAngle: -18,
              color: [
                [1, '#fff']
              ]
            };
          }
        };
        var makeSeries = function() {
          var series = [];
          dataAll.forEach(function(item, index) {
            let style = getStyle(item[index]);
            console.log(style)
            series.push({
              name: item[index],
              left: 0,
              center: position[index],
              type: 'gauge',
              splitNumber: 10, //刻度数量
              min: 0,
              max: (index+1)*100,
              radius: '50%', //图表尺寸
              axisLine: {
                show: true,
                lineStyle: {
                  width: 2,
                  shadowBlur: 0,
                  color: [
                    [1, '#fff']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: '#fff',
                  width: 1
                },
                length: 8,
                splitNumber: 5
              },
              splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                  color: '#fff',
                }
              },
              axisLabel: {
                distance: 2,
                textStyle: {
                  color: "#fff",
                  fontSize: "14",
                },
                formatter: function(e) {
                  switch (e + "") {
                    case "0":
                      return "0%";
                    default:
                      return e;
                  }
                }
              },
              pointer: { //仪表盘指针
                show: 0
              },
              title: {
                show: false
              },
              detail: {
                show: false
              },
              data: [{
                name: item[0],
                value: item[1]
              }]
            });
            series.push({
              name: item[0],
              type: 'gauge',
              center: position[index],
              splitNumber: style.splitNumber, //刻度数量
              min: style.min,
              max: style.max,
              startAngle: style.startAngle,
              endAngle: style.endAngle,
              radius: '33.3%', //图表尺寸
              axisLine: {
                show: false,
                lineStyle: {
                  width: 2,
                  shadowBlur: 0,
                  color: style.color
                }
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: 'auto',
                  width: 1
                },
                length: 8,
                splitNumber: 5
              },
              splitLine: {
                show: false,
                length: 12,
                lineStyle: {
                  color: 'auto',
                }
              },
              axisLabel: {
                show: false
              },
              pointer: { //仪表盘指针
                show: 1,
                length: '100%',
                width: 4
              },
              detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '30%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  color: '#fff',
                  fontSize: 20,
                },
                formatter: '{value}'
              },
              data: [{
                name: "",
                value: item[1]
              }]
            });

          });
          return series;
        }
        var list = makeSeries();

        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_xpyr_1'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        myChart.setOption({
          backgroundColor: '#0B284C',
          title: {
            text: '新品引入审核',
            left: '20px',
            top: '10px',
            textStyle: {
              fontSize: 25,
            }
          },
          tooltip: {
            show: true,
            formatter: "{a} {b} : {c}"
          },
          series: list
        })
      },
      myChart_xpyr_2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_xpyr_2'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        // 绘制图表
        myChart.setOption({
          title: {
            text: '实时审核总量',
            left: '20px',
            top: '10px',
            textStyle: {
              fontSize: 16,
            }
          },
          backgroundColor: '#0B284C',
          grid: {
            left: '4%',
            right: '4%',
            bottom: '10%',
            top:'6%',
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            itemWidth: 15,
            itemHeight: 15,
            data: ['食百', '生鲜','加工'],
            top: '10px'
          },
          xAxis: {
            data: ["福建", "河北", "重庆", "上海", "江苏", "江西", "河南"],
            splitLine: {
              show: false,
            },
            axisTick: 'none',
            axisLine: 'none',
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '食百',
            type: 'bar',
            stack: 'stack',
            data: [5, 20, 36, 10, 10, 20, 5],
            itemStyle: {
              normal: {color: "#ffd840", barBorderRadius: 12,}
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          },{
            name: '生鲜',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40],
            itemStyle: {
              normal: {color: "#0BB2CA", barBorderRadius: 12,}
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          },{
            name: '加工',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40],
            itemStyle: {
              normal: {color: "#436EEE", barBorderRadius: 12,}
            },
            barMinWidth: 1,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          }]
        });
      },
      myChart_xpyr_3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_xpyr_3'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          title: {
            text: '实时审核通过量',
            left: '20px',
            top: '10px',
            textStyle: {
              fontSize: 16
            }
          },
          backgroundColor: '#0B284C',
          grid: {
            left: '4%',
            right: '4%',
            bottom: '10%',
            top:'4%',
          },
          legend: {
            itemWidth: 15,
            itemHeight: 15,
            data: ['食百', '生鲜','加工'],
            top: '10px'
          },
          xAxis: {
            data: ["福建", "河北", "重庆", "上海", "江苏", "江西", "河南"],
            splitLine: {
              show: false,
            },
            axisTick: 'none',
            axisLine: 'none',
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '食百',
            type: 'bar',
            stack: 'stack',
            data: [5, 20, 36, 10, 10, 20, 5],
            itemStyle: {
              normal: {color: "#ffd840", barBorderRadius: 12,}
            },
            barMinWidth: 1,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          },{
            name: '生鲜',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40],
            itemStyle: {
              normal: {color: "#0BB2CA", barBorderRadius: 12,}
            },
            barMinWidth: 1,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            }
          },{
            name: '加工',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40],
            itemStyle: {
              normal: {color: "#436EEE", barBorderRadius: 12,}
            },
            barMinWidth: 1,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
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
