<template>
  <div class="flex" style="width: 100%">
    <Border class="flex" style="width: 33%;height: 400px">
        <div class="flex-column" id="myChart_jcpc1" style="width: 100%;height: 100%"></div>
    </Border>

    <Border class="flex" style="width: 33%;height: 400px">
      <div class="flex-column" id="myChart_jcpc2" style="width: 100%;height: 100%"></div>
    </Border>

    <Border class="flex" style="width: 33%;height: 400px">
        <div class="flex-column" id="myChart_jcpc3" style="width: 100%;height: 100%"></div>
    </Border>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入漏斗图组件
  require('echarts/lib/chart/funnel')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/theme/dark');

  import Border from '@/components/report/Border'

  export default {
    name: "jianCePiCi",
    mounted() {
      this.myChart_jcpc1();
      this.myChart_jcpc2();
      this.myChart_jcpc3();
    },
    components: {
      Border
    },
    methods: {
      myChart_jcpc1() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_jcpc1'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        // 绘制图表
        myChart.setOption({
          title: {
            text: '实时检测批次分布',
            textStyle: {
              fontSize: 16,
            },
            top:10,
            left:20
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
            itemHeight: 15,
            data: ['\n','\n','水果', '蔬菜','水产','蛋品'],
          },
          xAxis: {
            data: ["一区", "二区", "三区", "四区", "五区", "六区", "七区", "八区", "九区", "十区", "产地", "彩食鲜"],
            splitLine: {
              show: false,
            },
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              interval:0,
              rotate:0
            },
            max: 11
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '水果',
            type: 'bar',
            stack: 'stack',
            data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
            itemStyle: {
              normal: {color: "#ffd840", barBorderRadius: 1,}
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
            name: '蔬菜',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40, 22, 18, 35, 42, 40],
            itemStyle: {
              normal: {color: "#0BB2CA", barBorderRadius: 1,}
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
            name: '水产',
            type: 'bar',
            stack: 'stack',
            data: [40, 22, 18, 35, 42, 40, 40, 22, 18, 35, 42, 40],
            itemStyle: {
              normal: {color: "#436EEE", barBorderRadius: 1,}
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
            name: '蛋品',
            type: 'bar',
            stack: 'stack',
            barMinWidth: 1,
            data: [40, 22, 18, 35, 42, 40, 40, 22, 18, 35, 42, 40],
            itemStyle: {
              normal: {color: "#3FBB49", barBorderRadius: 1,},
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
          }]
        });
      },
      myChart_jcpc2() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_jcpc2'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        // 绘制图表
        myChart.setOption({
          backgroundColor: "#0B284C",
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          title: {
            text: '月果蔬高危风险商品TOP10',
            textStyle: {
              fontSize: 16,
            },
            top:10,
            left:20
          },
          calculable: true,
          series: [{
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',

            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                formatter: "{b}/{c}",
                position: 'inside'
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: [{
              value: 90,
              name: '韭菜'
            }, {
              value: 88,
              name: '芹菜'
            }, {
              value: 78,
              name: '菠菜'
            }, {
              value: 66,
              name: '黄瓜'
            }, {
              value: 63,
              name: '韭菜'
            }, {
              value: 56,
              name: '芹菜'
            }, {
              value: 50,
              name: '菠菜'
            }, {
              value: 45,
              name: '黄瓜'
            }, {
              value: 40,
              name: '黄瓜'
            }]
          }]
        })
      },
      myChart_jcpc3() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_jcpc3'), 'dark');

        window.addEventListener("resize",function(){myChart.resize();});

        // 绘制图表
        myChart.setOption({
          backgroundColor: "#0B284C",
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          title: {
            text: '月水产高危风险商品TOP10',
            textStyle: {
              fontSize: 16,
            },
            top:10,
            left:20
          },
          calculable: true,
          series: [{
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',

            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                formatter: "{b}/{c}",
                position: 'inside'
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: [{
              value: 90,
              name: '韭菜'
            }, {
              value: 88,
              name: '芹菜'
            }, {
              value: 78,
              name: '菠菜'
            }, {
              value: 66,
              name: '黄瓜'
            }, {
              value: 63,
              name: '韭菜'
            }, {
              value: 56,
              name: '芹菜'
            }, {
              value: 50,
              name: '菠菜'
            }, {
              value: 45,
              name: '黄瓜'
            }, {
              value: 40,
              name: '黄瓜'
            }]
          }]
        })
      }
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
  .flex-column{
    font-size: 18px;
    color: white;
    text-align: left;
  }
</style>
