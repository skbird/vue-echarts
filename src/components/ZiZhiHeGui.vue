<template>
  <div style="background-color:#0B284C">
    <div class="box" id="myChart1" :style="{width: '450px', height: '400px',margin:'0',padding:'0'}"></div>
    <div class="box" id="myChart2" :style="{width: '500px', height: '400px',margin:'0',padding:'0'}"></div>
    <div class="box" id="myChart3" :style="{width: '500px', height: '400px',margin:'0',padding:'0'}"></div>
  </div>
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

  export default {
      name: "zi-zhi-he-gui",
    mounted() {
      this.myChart1();
      this.myChart2();
      this.myChart3();
    },
    methods: {
      myChart1(){
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
            let style = getStyle(item[1]);
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
                offsetCenter: [0, '90%']
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
                show: true,
                lineStyle: {
                  width: 2,
                  shadowBlur: 0,
                  color: style.color
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: 'auto',
                  width: 1
                },
                length: 8,
                splitNumber: 5
              },
              splitLine: {
                show: true,
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
                length: '70%',
                width: 2
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
        let myChart1 = echarts.init(document.getElementById('myChart1'), 'dark');
        myChart1.setOption({
          backgroundColor: '#0B284C',
          tooltip: {
            formatter: "{a} {b} : {c}"
          },
          title: {
            text: '新品引入审核',
            left: '20px',
            top: '10px',
            textStyle: {
              fontSize: 25,
            }
          },
          tooltip: {
            show: true
          },
          series: list
        })
      },
      myChart2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = echarts.init(document.getElementById('myChart2'), 'dark');

        // 绘制图表
        myChart2.setOption({
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
            data: [5, 20, 36, 10, 10, 20, 5, 20],
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
            barWidth : 25,//柱图宽度
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
      myChart3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart3 = echarts.init(document.getElementById('myChart3'), 'dark');

        // 绘制图表
        myChart3.setOption({
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
            top:'4%',
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
            data: [5, 20, 36, 10, 10, 20, 5, 20],
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
            barWidth : 25,//柱图宽度
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
  .box{
    display: inline-block;
  }

</style>
