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

  let initData={
    checkBatchs:[],
    highRiskFruits:[],
    highRiskAquatic:[]
  }

  export default {
    name: "jianCePiCi",
    data() {
      return{
        result: initData
      }
    },
    mounted() {
      this.refresh();
    },
    components: {
      Border
    },
    methods: {
      async refresh(){
        await this.getCheckBatches();
        this.myChart_jcpc1();
        this.myChart_jcpc2();
        this.myChart_jcpc3();
      },
      async getCheckBatches() {
        try {
          await Promise.race([
            this.$store.dispatch("ajaxRequest", {
              state: ['checkBatchesData'],
              type: 'getCheckBatches',
              url: '/api/checking/dataReport/getCheckBatches',
              params: {}
            }),
            this.Util.timeout()
          ]);
          let _result = this.$store.state.checkBatchesData;
          this.result.checkBatchs = _result.checkBatchs;
          this.result.highRiskFruits = _result.highRiskFruits;
          this.result.highRiskAquatic = _result.highRiskAquatic;
        }catch (ex) {
          this.Util.doException(this, ex)
        } finally {
        }
      },
      myChart_jcpc1() {
        let xData = [];
        let fruitCount = [];
        let vegetableCount = [];
        let aquaticCount = [];
        let eggCount = [];
        this.result.checkBatchs.forEach((item,index,array)=>{
          xData.push(item.warZone);
          fruitCount.push(item.fruitCount);
          vegetableCount.push(item.vegetableCount);
          aquaticCount.push(item.aquaticCount);
          eggCount.push(item.eggCount);
        });
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
            top:'10%',
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            itemHeight: 15,
            data: ['\n','\n','蔬菜','水果','水产','蛋品'],
            top:'3%',
            bottom:'3%'
          },
          xAxis: {
            data: xData,
            splitLine: {
              show: false,
            },
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              interval:0,
              rotate:0
            },
            max: 12
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '蔬菜',
            type: 'bar',
            stack: 'stack',
            data: fruitCount,
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
            name: '水果',
            type: 'bar',
            stack: 'stack',
            data: fruitCount,
            itemStyle: {
              normal: {color: "#F7C066", barBorderRadius: 1,}
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
            data: aquaticCount,
            itemStyle: {
              normal: {color: "#FE7C72", barBorderRadius: 1,}
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
            data: eggCount,
            itemStyle: {
              normal: {color: "#61AA45", barBorderRadius: 1,},
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
        let data = [];
        this.result.highRiskFruits.forEach((item,index,array)=>{
          data.push({
            name: item.cpName,
            value: item.unqualified
          });
        });
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_jcpc2'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        // 绘制图表
        myChart.setOption({
          backgroundColor: "#0B284C",
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c}"
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
            color:['#B55D5E','#BC6D6D','#C37D7E','#CB8D8D','#CA8B8D','#CD9393','#CE9698','#E2C1C2','#DCB2B3','#E6CBCB'],
            name: '月果蔬高危风险商品TOP10',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                formatter: "{b}/{c}",
                position: 'inside',
                textStyle: {
                  color: '#000'
                }
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            itemStyle: {
              normal: {
                shadowColor: '#FE7C72'
              }
            },
            data: data
          }]
        })
      },
      myChart_jcpc3() {
        let data = [];
        this.result.highRiskFruits.forEach((item,index,array)=>{
          data.push({
            name: item.cpName,
            value: item.unqualified
          });
        });

        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_jcpc3'), 'dark');

        window.addEventListener("resize",function(){myChart.resize();});

        // 绘制图表
        myChart.setOption({
          backgroundColor: "#0B284C",
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c}"
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
            color: ['#FEC15A','#FCC56A','#FECD7A','#FDD28B','#FDDA9C','#FEE0AC','#FEE5BC','#FEECCC','#FEF2DE','#FEF7ED'],
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',

            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                formatter: "{b}/{c}",
                position: 'inside',
                textStyle: {
                  color: '#000'
                }
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            data: data
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
