<template>
  <div>
    <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
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

  export default {
    name: "echarts-demo",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let colors = ['#EEEC0D', '#E55125', '#5EA6FE', '#F94ED2', '#67D670', '#67FFFC']
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'), 'dark');

        // 绘制图表
        myChart.setOption({
          backgroundColor: '#0B284C',
          legend: {
            show: false
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
              name: '商品质量',
              type:'pie',
              startAngle: 160,
              radius : [90, 142],
              center: [300, 390],
              roseType : 'radius',
              itemStyle: {
                color: 'transparent'
              },
              labelLine: {
                show: true,
              },
              data: [
                {
                  value:28,
                  labelLine: {
                    lineStyle: {
                      color: colors[0]
                    }
                  },
                  itemStyle: {
                  }
                },
                {
                  value:22,
                  labelLine: {
                    lineStyle: {
                      color: colors[1]
                    }
                  }
                },
                {
                  value:16,
                  labelLine: {
                    lineStyle: {
                      color: colors[2]
                    }
                  }
                },
                {
                  value:20,
                  labelLine: {
                    lineStyle: {
                      color: colors[3]
                    }
                  }
                },
                {
                  value:14,
                  labelLine: {
                    lineStyle: {
                      color: colors[4]
                    }
                  }
                },
                {
                  value:16,
                  labelLine: {
                    lineStyle: {
                      color: colors[5]
                    }
                  }
                }
              ]
            },{
              type: 'pie',
              z: 10,
              startAngle: 160,
              radius : [90, 142],
              center: [300, 390],
              roseType : 'radius',
              color: [],
              label: {
                normal: {
                  formatter: ['{c|{b}}', '{b|{d}}',].join('\n'),
                  rich: {
                    c: {
                      color: '#ffffff',
                      fontSize: 20,
                      fontWeight: 'bold',
                      lineHeight: 5
                    },
                    b: {
                      color: '#ffffff',
                      fontSize: 20,
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
      }
    }

  }
</script>

<style scoped>


</style>
