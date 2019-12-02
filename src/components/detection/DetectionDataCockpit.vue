<template>
  <el-container class="detection-data-cockpit">
    <el-main>


      <div class="head">食安云网检测数据驾驶舱</div>

      <div class="big-box" style="width: 60%;overflow: hidden;float:left;padding-top: 10px;">
        <div>
          <div style="width: 30%;display: inline-block;text-align: center;float:left;">
            <p style="text-align: center;color: #49A0FE;font-size: 24px;">检测站点分布</p>
            <img style="width: 50px;height: 50px;" src="../../assets/img/checkAddress.svg"/>
            <div style="overflow: hidden">
              <div style="overflow: hidden;display: inline-block" v-for="item in list">
                <span class="li-item">{{item}}</span>
              </div>
            </div>
          </div>
          <div style="width: 69%;display: inline-block;" class="check-batch">
            <div
              style="border-style: dashed;border-color: rgb(117,226,255);display: inline-block;width: 30%;text-align: center;margin-left: 5px;">
              <img style="width: 50px;height: 50px;" src="../../assets/img/todayCheck.svg"/>
              <p style="text-align: center;color: #ffffff;font-size: 24px;font-weight: bold;">实时检测批次</p>
              <div style="overflow: hidden;" class="check-digit">
                <div style="overflow: hidden;display: inline-block;" v-for="item in todayNum">
                  <span class="num-item" style="color: rgb(135,232,181)">{{item}}</span>
                </div>
              </div>
            </div>
            <div
              style="border-style: dashed;border-color: rgb(117,226,255);display: inline-block;width: 30%;text-align: center;margin-left: 5px;">
              <img style="width: 50px;height: 50px;" src="../../assets/img/monthCheck.svg"/>
              <p style="text-align: center;color: #ffffff;font-size: 24px;font-weight: bold;">月至今检测批次</p>
              <div style="overflow: hidden;" class="check-digit">
                <div style="overflow: hidden;display: inline-block;" v-for="item in monthNum">
                  <span class="num-item" style="color: rgb(236,191,131)">{{item}}</span>
                </div>
              </div>
            </div>
            <div
              style="border-style: dashed;border-color: rgb(117,226,255);display: inline-block;width: 30%;text-align: center;margin-left: 5px;" class="year-item">
              <img style="width: 50px;height: 50px;" src="../../assets/img/yearCheck.svg"/>
              <p style="text-align: center;color: #ffffff;font-size: 24px;font-weight: bold;">年至今检测批次</p>
              <div style="overflow: hidden;" class="check-digit">
                <div style="overflow: hidden;display: inline-block;" v-for="item in yearNum">
                  <span class="num-item" style="color: rgb(74,162,255)">{{item}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map-wrapper">
          <div class="left-box">
              <div>
                <div style="overflow: hidden">
                  <div id="myPieCircle" style="width:50%;height: 190px;float: left"></div>
                  <div id="my3dChart" style="width:50%;height: 190px;float: right"></div>
                </div>
                <div id="s-myPie">
                  <div id="myPie" style="width:100%;height: 190px;"></div>
                </div>
              </div>
          </div>

            <div id="s-map">
                <div id="chartMap" style="width: 100%;height: 100%;"></div>
            </div>
        </div>
      </div>

      <div style="width: 39%;float:left;overflow: hidden;" class="dist-wrapper">
        <div class="text-wraper-dist" id="s-checkBatches">
          <div
            style="color: rgb(50,179,224);text-align: right;font-size: 20px;margin-right: 30px;font-weight: bold;margin-bottom: 8px;">
            实时检测批次分布
          </div>
          <div id="checkBatches" class="check-dist"></div>
        </div>
        <div class="text-wraper-dist" id="s-unqualifiedBatches">
          <div
            style="color: rgb(50,179,224);text-align: right;font-size: 20px;margin-right: 30px;font-weight: bold;margin-bottom: 8px;margin-top: 15px;">
            实时检测风险批次分布
          </div>
          <div id="unqualifiedBatches" class="check-dist"></div>
        </div>
      </div>


    </el-main>
  </el-container>
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
  require('echarts-gl');
  import china from 'echarts/map/js/china'

  export default {
    name: "detection-data-cockpit",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        list: [],
        todayNum: [],
        monthNum: [],
        yearNum: [],
        checkTotal: undefined,
        workCheckNum: undefined,
        notWorkCheckNum: undefined,
        percent: undefined,
        warZoneNum: undefined,
        myPieZoneData: [],

        warZoneNum: undefined,
        originNum: undefined,
        freshFoodNum: undefined,
        supplierNum: undefined,

        mapData: [],

        loading: false,
        xBatches: [],
        fruitBatches: [],
        vegetableBatches: [],
        aquaticBatches: [],
        eggBatches: [],
        xCategory: [],
        fruitCategory: [],
        vegetableCategory: [],
        aquaticCategory: [],
        eggCategory: [],
        yUnBatches: [],
        fruitUnBatches: [],
        vegetableUnBatches: [],
        aquaticUnBatches: [],
        eggUnBatches: [],
        yCategory: [],
        fruitUnCategory: [],
        vegetableUnCategory: [],
        aquaticUnCategory: [],
        eggUnCategory: [],
        height: undefined,
        data: [['title', 'name', 'value'], ['检测站点数', '蛋品', 20], ['检测站点数', '水产', 50], ['检测站点数', '果蔬', 70]],
      }
    },
    mounted() {
      this.refresh();
      setInterval(this.realTimeFlush, 1000 * 60 * 10);
      setInterval(this.dayTimeFlush, 1000 * 60 * 60 * 24);
    },
    methods: {
      async refresh() {
        await this.designHeight();
        await this.queryReport();
        this.checkBatches();
        this.unqualifiedBatches();
        this.travleZone();
        this.drawmap();
        this.draw3dCheckZone();
        this.myPieZone();
      },
      async designHeight() {
      },
      async queryReport() {
        this.loading = true;
        try {
          await Promise.race([
            this.$store.dispatch("ajaxRequest", {
              state: ['detecitonData'],
              type: 'retrieve',
              url: '/api/checking/checkingDataCockpit/retrieve',
              params: {}
            }),
            this.Util.timeout()
          ]);
          let _result = this.$store.state.detecitonData || [];
          if (_result.checkBatches != undefined) {
            let warZone = _result.checkBatches.map(e => {
              return e.warZone
            }) || [];
            let fruitCount = _result.checkBatches.map(e => {
              return e.fruitCount > 0 ? e.fruitCount : '';
            });
            let vegetableCount = _result.checkBatches.map(e => {
              return e.vegetableCount > 0 ? e.vegetableCount : '';
            });
            let aquaticCount = _result.checkBatches.map(e => {
              return e.aquaticCount > 0 ? e.aquaticCount : '';
            });
            let eggCount = _result.checkBatches.map(e => {
              return e.eggCount > 0 ? e.eggCount : '';
            });
            this.xBatches = warZone;
            this.fruitBatches = fruitCount;
            this.vegetableBatches = vegetableCount;
            this.aquaticBatches = aquaticCount;
            this.eggBatches = eggCount;
          }
          if (_result.unQulifiedBatches != undefined) {
            let warZone = _result.checkBatches.map(e => {
              return e.warZone
            });
            let fruitCount = _result.checkBatches.map(e => {
              return e.fruitCount > 0 ? e.fruitCount : '';
            });
            let vegetableCount = _result.checkBatches.map(e => {
              return e.vegetableCount > 0 ? e.vegetableCount : '';
            });
            let aquaticCount = _result.checkBatches.map(e => {
              return e.aquaticCount > 0 ? e.aquaticCount : '';
            });
            let eggCount = _result.checkBatches.map(e => {
              return e.eggCount > 0 ? e.eggCount : '';
            });
            this.yUnBatches = warZone;
            this.fruitUnBatches = fruitCount;
            this.vegetableUnBatches = vegetableCount;
            this.aquaticUnBatches = aquaticCount;
            this.eggUnBatches = eggCount;
          }

          this.todayNum = _result.todayNum.toString().split('');
          this.monthNum = _result.monthNum.toString().split('');
          this.yearNum = _result.yearNum.toString().split('');
          this.list = _result.checkTotalNum.toString().split('');
          this.checkTotal = _result.checkTotalNum;
          this.workCheckNum = _result.workCheckNum;
          this.notWorkCheckNum = this.checkTotal - this.workCheckNum;
          this.percent = Math.round(this.workCheckNum / this.checkTotal * 10000) / 100.00 + "%";
          this.warZoneNum = _result.warZoneNum;
          this.originNum = _result.originNum;
          this.freshFoodNum = _result.freshFoodNum;
          this.supplierNum = _result.supplierNum;
          // data: [[0, 0, 20], [1, 0, 50], [2, 0, 70]],
          this.data = [['title', 'name', 'value'], ['检测站点数', '蛋品', _result.eggCheckTotal], ['检测站点数', '水产', _result.aquaticCheckTotal], ['检测站点数', '果蔬', _result.fruitCheckTotal]];

          this.mapData =
            [
              {name: '北京', value: _result.beijing},
              {name: '天津', value: _result.tianjin},
              {name: '上海', value: _result.shanghai},
              {name: '重庆', value: _result.congqing},
              {name: '河北', value: _result.hebei},
              {name: '河南', value: _result.henan},
              {name: '云南', value: _result.yunnan},
              {name: '辽宁', value: _result.liaoning},
              {name: '黑龙江', value: _result.heilongjiang},
              {name: '湖南', value: _result.hunan},
              {name: '安徽', value: _result.anhui},
              {name: '山东', value: _result.sandong},
              {name: '新疆', value: _result.xinjiang},
              {name: '江苏', value: _result.jiangshu},
              {name: '浙江', value: _result.zhejiang},
              {name: '江西', value: _result.jiangxi},
              {name: '湖北', value: _result.hubei},
              {name: '广西', value: _result.guangxi},
              {name: '甘肃', value: _result.ganshu},
              {name: '山西', value: _result.sanxi},
              {name: '内蒙古', value: _result.neimenggu},
              {name: '陕西', value: _result.shanxi},
              {name: '吉林', value: _result.jilin},
              {name: '福建', value: _result.fujian},
              {name: '贵州', value: _result.guizhou},
              {name: '广东', value: _result.guangdong},
              {name: '青海', value: _result.qinghai},
              {name: '西藏', value: _result.xizhang},
              {name: '四川', value: _result.shichuan},
              {name: '宁夏', value: _result.ningxia},
              {name: '海南', value: _result.hainan},
              {name: '台湾', value: _result.taiwan},
              {name: '香港', value: _result.xiangang},
              {name: '澳门', value: _result.aomen}
            ]

        } catch (ex) {
          this.Util.doException(this, ex)
        } finally {
          this.loading = false;
        }
      },
      checkBatches() {
        // // 基于准备好的dom，初始化echarts实例
        let checkBatches = echarts.init(document.getElementById('checkBatches'), 'dark');
        // 绘制图表
        checkBatches.setOption({
          backgroundColor: '',
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ['水果', '蔬菜', '水产', '蛋品'],
          },
          grid: {
            left: '10%',
            right: '2%',
            bottom: '10%',
            top: '15%',
          },
          xAxis: {
            data: this.xBatches,
            splitLine: {
              show: false,
            },
            axisLabel: {interval: 0}
          },
          yAxis: {
            splitLine: {
              show: true,
            },
          },
          series: [{
            name: '水果',
            type: 'bar',
            stack: '使用情况',
            data: this.fruitBatches,
            itemStyle: {
              normal: {color: "#3ACDFD", barBorderRadius: 5}
            }
          }, {
            name: '蔬菜',
            type: 'bar',
            stack: '使用情况',
            data: this.vegetableBatches,
            itemStyle: {
              normal: {color: "#65E2A0", barBorderRadius: 5,}


            }
          },
            {
              name: '水产',
              type: 'bar',
              stack: '使用情况',
              data: this.aquaticBatches,
              itemStyle: {
                normal: {color: "#E7AE61", barBorderRadius: 5,}

              }
            },
            {
              name: '蛋品',
              type: 'bar',
              stack: '使用情况',
              barWidth: '10',
              data: this.eggBatches,
              itemStyle: {
                normal: {color: "#EA97FB", barBorderRadius: 5,},
              }
            }]
        });
      },
      unqualifiedBatches() {
        let unqualifiedBatches = echarts.init(document.getElementById('unqualifiedBatches'), 'dark');
        unqualifiedBatches.setOption({
          backgroundColor: '',
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          // title: {
          //   text: '实时检测不合格批次分布',
          // },
          legend: {
            data: ['水果', '蔬菜', '水产', '蛋品']
          },
          grid: {
            left: '3%',
            right: '2%',
            bottom: '0%',
            top: '13%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
          },
          yAxis: {
            type: 'category',
            data: this.yUnBatches,
            axisLabel: {interval: 0},
          },
          series: [
            {
              name: '水果',
              type: 'bar',
              stack: '总量',
              barWidth: '10',//设置柱宽度
              itemStyle: {
                normal: {color: "#3ACDFD"},
              },
              label: {
                normal: {
                  show: true,
                  position: 'insideRight',

                }
              },
              data: this.fruitUnBatches
            },
            {
              name: '蔬菜',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {color: "#65E2A0"},
              },
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: this.vegetableUnBatches
            },
            {
              name: '水产',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {color: "#E7AE61"},
              },
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: this.aquaticUnBatches
            },
            {
              name: '蛋品',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {color: "#EA97FB"},
              },
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: this.eggUnBatches
            }
          ]
        });
      },
      travleZone() {
        let myPieCircle = echarts.init(document.getElementById('myPieCircle'), 'dark');
        myPieCircle.setOption({
          backgroundColor: '',
          tooltip: {
            formatter: "{b}: {c} ({d}%)",
            position: [10, 10]
          },
          title: {
            text: this.percent + '\n' + '\n' + '运行站点',
            x: 'center',
            y: 'center',
            data: ['运行站点', '非运行站点'],
            textStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              color: '#75e2ff',
            },
            subtextStyle: {
              color: "#000000",
              fontSize: 25,
              fontWeight: 'normal',
            }
          },

          series: [{
            type: 'pie',
            radius: ['60%', '70%'],
            minAngle: 80,
            //silent: true,
            labelLine: {
              show: false
            },
            data: [{
              hoverOffset: 1,
              markArea: {
                silent: false,
              },
              value: this.workCheckNum,
              name: '运行站点',
              itemStyle: {
                color: 'rgb(50,179,224)'
              },
              label: {
                show: false
              },

            },
              {
                value: this.notWorkCheckNum,
                name: '非运行站点',
                itemStyle: {
                  color: 'rgb(27,45,76)'
                },
                label: {
                  show: false
                }
              }
            ]
          }]
        })
        ;

      },
      drawmap() {
        let chartMap = document.getElementById('chartMap');
        let smap = document.getElementById('s-map');　　　　　　　　　 // 动态修改图表的宽高，达到自适应的效果　
        var resizeWorldMapContainer = function () {
          chartMap.style.width = smap.clientWidth + 'px';
          chartMap.style.height = smap.clientHeight + 'px';
        };
        resizeWorldMapContainer();
        // 注册可用的地图
        echarts.registerMap('guizhou', china);
        let myChart = echarts.init(chartMap, 'dark');
        myChart.setOption({
          backgroundColor: '',
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['检测站点'],
            show: false,
          },
          dataRange: {
            x: 'left',
            y: 'bottom',
            splitList: [
              {start: 20},
              {start: 18, end: 20},
              {start: 16, end: 18},
              {start: 14, end: 16},
              {start: 12, end: 14},
              {start: 10, end: 12},
              {start: 9, end: 10},
              {start: 8, end: 9},
              {start: 7, end: 8},
              {start: 6, end: 7},
              {start: 5, end: 6},
              {start: 4, end: 5},
              {start: 3, end: 4},
              {start: 2, end: 3},
              {start: 1, end: 2},
              {start: 0, end: 1},
              {end: 0}
            ],
            color: ['rgb(39,122,244)', 'rgb(91,162,233)', 'rgb(135,193,240)', 'rgb(174,220,246)', 'rgb(255,255,255)'],
            show: false,
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
              mark: {show: true},
              dataView: {show: false, readOnly: false},
              restore: {show: false},
              saveAsImage: {show: false}
            }
          },
          roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
              'china': true
            }
          },
          series: [
            {
              name: '检测站点',
              type: 'map',
              mapType: 'china',
              roam: true,
              zoom: 1.2,
              scaleLimit: {
                min: 0.5,
                max: 2,
              },
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    textStyle: {
                      color: "rgb(15, 45, 105)"
                    }
                  },
                  borderWidth: 1,//省份的边框宽度
                  borderColor: '#D6EEFA',//省份的边框颜色
                },
                emphasis: {label: {show: true}}
              },
              data: this.mapData
            }
          ]
        })
        window.addEventListener("resize", function () {
          resizeWorldMapContainer();
          myChart.resize();
        })
      },
      draw3dCheckZone() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('my3dChart'), 'dark');
        myChart.setOption({
            tooltip: {
                position: ['20%', '20%'],
                formatter: (params) => {
                    let {data} = params;
                    return data[1] + ':' + data[2];
                }
            },
          backgroundColor: '',
          textStyle: {
            color: ['#fffff']
          },
          xAxis3D: {
            type: 'category',
              name: ' ',
            nameTextStyle:{
              fontSize:11,
            }
          },
          yAxis3D: {
            type: 'category',
              name: ' ',
          },
          zAxis3D: {
              name: ' ',
              interval: 40,
          },
          grid3D: {
            left:'8%',
            right:'8%',
            boxWidth: 70,
            boxDepth: 55,
            viewControl: {

            },
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            light: {
              main: {
                intensity: 1.2,
                shadow: true
              },
              ambient: {
                intensity: 0.3
              }
            }
          },
            dataset: {
                dimensions: [
                    'title',
                    'name',
                    'value',
                ],
                source: this.data
            },
          series: [{
            type: 'bar3D',
            shading: 'lambert',
            label: {
                show: false,
              textStyle: {
                fontSize: 12,
                borderWidth: 1,
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  // 给出颜色组
                  var colorList = ['rgb(233,219,189)', 'rgb(233,202,200)', 'rgb(233,184,211)'];
                  return colorList[params.dataIndex]
                },
              }
            },


            emphasis: {
              label: {
                  show: false,
                textStyle: {
                  fontSize: 20,
                  color: '#992876'
                }
              },
              itemStyle: {
                //  color: '#ffd840'
                //通常情况下：
                normal: {
                  //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: function (params) {
                    var colorList = ['rgb(164,205,238)', 'rgb(42,170,227)', 'rgb(25,46,94)', 'rgb(195,229,235)'];
                    return colorList[params.dataIndex];
                  }
                },
              }
            }
          }]
        });
      },
      myPieZone() {
        let myPie = echarts.init(document.getElementById('myPie'), 'dark');
        myPie.setOption({
          backgroundColor: '',
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
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
            radius: '70%',
            center: ['50%', '50%'],
            color: ['#E9AF61', '#EA97FB', '#65E2A0', '#3ACDFD'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [{
              value: this.supplierNum,
              name: '供应商'
            },
              {
                value: this.freshFoodNum,
                name: '彩食鲜'
              },
              {
                value: this.originNum,
                name: '产地'
              },
              {
                value: this.warZoneNum,
                name: '战区'
              }
            ].sort(function (a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',

            label: {
              normal: {
                formatter: "{b}" + "\n" + "{d}%",
                rich: {
                  c: {
                    color: '#ffffff',
                    fontSize: 10,
                    fontWeight: 'bold',
                    lineHeight: 5
                  },
                  b: {
                    color: '#ffffff',
                    fontSize: 10,
                    height: 40
                  },
                },
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

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
      async realTimeFlush() {
        try {
          await Promise.race([
            this.$store.dispatch("ajaxRequest", {
              state: ['detecitonData'],
              type: 'retrieve',
              url: '/api/checking/checkingDataCockpit/realTimeRefresh',
              params: {}
            }),
            this.Util.timeout()
          ]);
          let _result = this.$store.state.detecitonData || [];
          if (_result.checkBatches != undefined) {
            let warZone = _result.checkBatches.map(e => {
              return e.warZone
            }) || [];
            let fruitCount = _result.checkBatches.map(e => {
              return e.fruitCount > 0 ? e.fruitCount : '';
            });
            let vegetableCount = _result.checkBatches.map(e => {
              return e.vegetableCount > 0 ? e.vegetableCount : '';
            });
            let aquaticCount = _result.checkBatches.map(e => {
              return e.aquaticCount > 0 ? e.aquaticCount : '';
            });
            let eggCount = _result.checkBatches.map(e => {
              return e.eggCount > 0 ? e.eggCount : '';
            });
            this.xBatches = warZone;
            this.fruitBatches = fruitCount;
            this.vegetableBatches = vegetableCount;
            this.aquaticBatches = aquaticCount;
            this.eggBatches = eggCount;
          }
          if (_result.unQulifiedBatches != undefined) {
            let warZone = _result.checkBatches.map(e => {
              return e.warZone
            });
            let fruitCount = _result.checkBatches.map(e => {
              return e.fruitCount > 0 ? e.fruitCount : '';
            });
            let vegetableCount = _result.checkBatches.map(e => {
              return e.vegetableCount > 0 ? e.vegetableCount : '';
            });
            let aquaticCount = _result.checkBatches.map(e => {
              return e.aquaticCount > 0 ? e.aquaticCount : '';
            });
            let eggCount = _result.checkBatches.map(e => {
              return e.eggCount > 0 ? e.eggCount : '';
            });
            this.yUnBatches = warZone;
            this.fruitUnBatches = fruitCount;
            this.vegetableUnBatches = vegetableCount;
            this.aquaticUnBatches = aquaticCount;
            this.eggUnBatches = eggCount;
            this.todayNum = _result.todayNum.toString().split('');
            this.monthNum = _result.monthNum.toString().split('');
            this.yearNum = _result.yearNum.toString().split('');
          }
        } catch (ex) {
          this.Util.doException(this, ex)
        } finally {
          this.loading = false;
        }
      },
      async dayTimeFlush() {
        this.loading = true;
        try {
          await Promise.race([
            this.$store.dispatch("ajaxRequest", {
              state: ['detecitonData'],
              type: 'retrieve',
              url: '/api/checking/checkingDataCockpit/dayRefresh',
              params: {}
            }),
            this.Util.timeout()
          ]);
          let _result = this.$store.state.detecitonData || [];


          this.list = _result.checkTotalNum.toString().split('');
          this.checkTotal = _result.checkTotalNum;
          this.workCheckNum = _result.workCheckNum;
          this.notWorkCheckNum = this.checkTotal - this.workCheckNum;
          this.percent = Math.round(this.workCheckNum / this.checkTotal * 10000) / 100.00 + "%";

          this.warZoneNum = _result.warZoneNum;
          this.originNum = _result.originNum;
          this.freshFoodNum = _result.freshFoodNum;
          this.supplierNum = _result.supplierNum;
          // data: [[0, 0, 20], [1, 0, 50], [2, 0, 70]],
          this.data = [[0, 0, _result.eggCheckTotal], [1, 0, _result.aquaticCheckTotal], [2, 0, _result.fruitCheckTotal]];

          this.mapData =
            [
              {name: '北京', value: _result.beijing},
              {name: '天津', value: _result.tianjin},
              {name: '上海', value: _result.shanghai},
              {name: '重庆', value: _result.congqing},
              {name: '河北', value: _result.hebei},
              {name: '河南', value: _result.henan},
              {name: '云南', value: _result.yunnan},
              {name: '辽宁', value: _result.liaoning},
              {name: '黑龙江', value: _result.heilongjiang},
              {name: '湖南', value: _result.hunan},
              {name: '安徽', value: _result.anhui},
              {name: '山东', value: _result.sandong},
              {name: '新疆', value: _result.xinjiang},
              {name: '江苏', value: _result.jiangshu},
              {name: '浙江', value: _result.zhejiang},
              {name: '江西', value: _result.jiangxi},
              {name: '湖北', value: _result.hubei},
              {name: '广西', value: _result.guangxi},
              {name: '甘肃', value: _result.ganshu},
              {name: '山西', value: _result.sanxi},
              {name: '内蒙古', value: _result.neimenggu},
              {name: '陕西', value: _result.shanxi},
              {name: '吉林', value: _result.jilin},
              {name: '福建', value: _result.fujian},
              {name: '贵州', value: _result.guizhou},
              {name: '广东', value: _result.guangdong},
              {name: '青海', value: _result.qinghai},
              {name: '西藏', value: _result.xizhang},
              {name: '四川', value: _result.shichuan},
              {name: '宁夏', value: _result.ningxia},
              {name: '海南', value: _result.hainan},
              {name: '台湾', value: _result.taiwan},
              {name: '香港', value: _result.xiangang},
              {name: '澳门', value: _result.aomen}
            ]

        } catch (ex) {
          this.Util.doException(this, ex)
        } finally {
          this.loading = false;
        }
      }
    },
  }
</script>

<style type="text/scss" lang="scss" rel="stylesheet/scss">
  .el-container, .el-main {
    width: 100%;
    height: 100%;
  }

  .detection-data-cockpit {
      .head {
          background-color: #03132B;
          color: #ffffff;
          text-align: center;
          font-size: 45px;
          line-height: 45px;
          margin-bottom: 25px;
      }

      .left-box {
          width: 40%;
          margin-top: 20px;
          overflow: hidden;
          height: calc(100vh - 350px);
          display: flex;
          align-items: center;

          >div {
              width: 100%;
          }
      }

      .el-main {
          background-color: #03132B;
          padding: 20px 20px 0 20px;
      }

      .big-box {
          box-shadow: 0 0 12px #fff inset, 0 0 12px #fff;
          border-radius: 8px;
          background: -webkit-linear-gradient(rgb(22, 34, 46), rgb(0, 34, 96)); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(rgb(22, 34, 46), rgb(0, 34, 96)); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(rgb(22, 34, 46), rgb(0, 34, 96)); /* Firefox 3.6 - 15 */
          background: linear-gradient(rgb(22, 34, 46), rgb(0, 34, 96)); /* 标准的语法（必须放在最后） */

      }

      .li-item {
          float: left;
          width: 40px;
          height: 50px;
          margin: 10px 0 10px 10px;
          line-height: 50px;
          background-color: #169BDD;
          font-weight: 400;
          font-family: "Amaranth", sans-serif;
          font-size: 30px;
          text-align: center;
          color: yellow;
      }

      .num-item {
          float: left;
          width: 20px;
          height: 50px;
          margin: 10px 0 10px 0px;
          line-height: 50px;
          font-size: 30px;
          text-align: center;
          color: yellow;
      }

      /*.year-item {*/
          /*.num-item {*/
              /*margin: 10px 0 10px 2px;*/
          /*}*/
      /*}*/

      .big-box {
          height: calc(100vh - 140px);
      }

      .map-wrapper{
          position: relative;
      }

      .check-batch {
           p {
               height: 1.4em;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
           }

          .check-digit {
              height: 70px;
          }
      }

      $content-height: calc(100vh - 350px);

      .dist-wrapper {
          height: calc(100vh - 140px);
      }

      #s-map {
          width: 60%;
          height: $content-height;
          position: absolute;
          top: 0;
          right: 0;
      }

      .check-dist {
          width: 100%;
          height: calc(100% - 55px);
      }

      .text-wraper-dist {
          height: 50%;
      }
  }
</style>
