<template>
  <Border class="flex" style="width: 100%;height: 100%">
    <div class="flex" style="width: 100%;height: 100%">
      <div id="myChart_zjgxsh_1" :style="{width: '100%', height: '100%',margin:'0',padding:'0'}"></div>
      <div id="myChart_zjgxsh_2" :style="{width: '100%', height: '100%',margin:'0',padding:'0'}"></div>
      <div id="myChart_zjgxsh_3" :style="{width: '100%', height: '100%',margin:'0',padding:'0'}"></div>
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
    components: {
      Border
    },
    mounted() {
      this.myChart_zjgxsh_1();
      this.myChart_zjgxsh_2();
      this.myChart_zjgxsh_3();
    },
    methods: {
      myChart_zjgxsh_1(){
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
        let myChart = echarts.init(document.getElementById('myChart_zjgxsh_1'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        myChart.setOption({
          backgroundColor: '#0B284C',
          tooltip: {
            formatter: "{a} {b} : {c}"
          },
          title: {
            text: '证件更新审核',
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
      dataStyle(){
        let style = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        }
        return style
      },
      placeHolderStyle(){
        let style = {
          normal: {
            color: 'rgba(0,0,0,0)',
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(0,0,0,0)'
          }
        }
        return style
      },
      myChart_zjgxsh_2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_zjgxsh_2'), 'dark');
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
          legend: {
            top: "10%",
            x: 'right',
            left: "38%",
            itemWidth:0,itemHeight:0,
            data: ['已婚已育','已婚未育','未婚' ,'学生'],
            itemGap: 38,
            textStyle: {
              color: '#fff',
              align:'right',
              x: 'right',
              textAlign:'right'
            },

            selectedMode: true,
            orient: "vertical",
          },
          backgroundColor: '#0B284C',
          color: ['#4DFFE3','#4DE0FF','#4DFF8F','#ADFF4D'],
          tooltip: {
            show: false
          },
          grid: {
            top: '18%',
            left: '1%',
            right: '1%',
            bottom: '25%',
            // containLabel: true
          },
          series: [{
              name: 'Line 4',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              radius: ['65%', '75%'],
              itemStyle: this.dataStyle(),
              data: [{
                value: 7645434,
                name: '已婚已育'
              }, {
                value: 3612343,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: this.placeHolderStyle()
              }]
            }, {
              name: 'Line 3',
              type: 'pie',
              clockWise: true,
              radius: ['50%', '60%'],
              itemStyle: this.dataStyle(),
              hoverAnimation: false,
              data: [{
                value: 2632321,
                name: '已婚未育'
              }, {
                value: 2212343,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: this.placeHolderStyle()
              }]
            }, {
              name: 'Line 2',
              type: 'pie',
              clockWise: true,
              hoverAnimation: false,
              radius: ['35%', '45%'],
              itemStyle: this.dataStyle(),
              data: [{
                value: 1823323,
                name: '未婚'
              }, {
                value: 1812343,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: this.placeHolderStyle()
              }]
            }, {
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['20%', '30%'],
              itemStyle: this.dataStyle(),
              hoverAnimation: false,
              data: [ {
                value: 1342221,
                name: '学生'
              },{
                value:1912343,
                name: '总数',
                tooltip: {
                  show: false
                },
                itemStyle: this.placeHolderStyle()
              }]
            }
          ]
        });
      },
      myChart_zjgxsh_3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_zjgxsh_3'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        // 绘制图表
        myChart.setOption({
          title: {
            text: '实时审核通过量',
            left: '20px',
            top: '10px',
            textStyle: {
              fontSize: 16,
            }
          },
          legend: {
            top: "10%",
            x: 'right',
            left: "38%",
            itemWidth:0,itemHeight:0,
            data: ['已婚已育','已婚未育','未婚' ,'学生'],
            itemGap: 38,
            textStyle: {
              color: '#fff',
              align:'right',
              x: 'right',
              textAlign:'right'
            },

            selectedMode: true,
            orient: "vertical",
          },
          backgroundColor: '#0B284C',
          color: ['#4DFFE3','#4DE0FF','#4DFF8F','#ADFF4D'],
          tooltip: {
            show: false
          },
          grid: {
            top: '18%',
            left: '1%',
            right: '1%',
            bottom: '25%',
            // containLabel: true
          },
          series: [{
            name: 'Line 4',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['65%', '75%'],
            itemStyle: this.dataStyle(),
            data: [{
              value: 7645434,
              name: '已婚已育'
            }, {
              value: 3612343,
              name: '总数',
              tooltip: {
                show: false
              },
              itemStyle: this.placeHolderStyle()
            }]
          }, {
            name: 'Line 3',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '60%'],
            itemStyle: this.dataStyle(),
            hoverAnimation: false,
            data: [{
              value: 2632321,
              name: '已婚未育'
            }, {
              value: 2212343,
              name: '总数',
              tooltip: {
                show: false
              },
              itemStyle: this.placeHolderStyle()
            }]
          }, {
            name: 'Line 2',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['35%', '45%'],
            itemStyle: this.dataStyle(),
            data: [{
              value: 1823323,
              name: '未婚'
            }, {
              value: 1812343,
              name: '总数',
              tooltip: {
                show: false
              },
              itemStyle: this.placeHolderStyle()
            }]
          }, {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['20%', '30%'],
            itemStyle: this.dataStyle(),
            hoverAnimation: false,
            data: [ {
              value: 1342221,
              name: '学生'
            },{
              value:1912343,
              name: '总数',
              tooltip: {
                show: false
              },
              itemStyle: this.placeHolderStyle()
            }]
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

</style>
