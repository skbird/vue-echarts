<template>
  <div class="flex fxjc" style="width: 100%">
    <Border style="width: 33%;height: 400px">
      <div id="myChart_yyqwt" :style="{width: '100%', height: '100%'}"></div>
    </Border>

    <Border style="width: 33%;height: 400px">
      <div id="myChart_ygwfxsp" :style="{width: '100%', height: '100%'}">
        <div class="table-title">月高危风险商品</div>
        <el-table :data="gwfxspData" :highlight-current-row="false"
                  border :row-class-name="tableRowClassName" class="el-table-class">
          <el-table-column prop="product" label="商品"></el-table-column>
          <el-table-column prop="times" label="问題次数" ></el-table-column>
          <el-table-column prop="category" label="问题大类"></el-table-column>
          <el-table-column prop="detail" label="具体问题" ></el-table-column>
        </el-table>

        <div class="block" style="text-align: right;margin-right: 13px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="10"
            layout="total,jumper,prev,next"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </Border>

    <Border style="width: 33%;height: 400px">
      <div id="myChart_ygwfxgys" :style="{width: '100%', height: '100%'}">
        <div class="table-title">月高危风险供应商</div>
        <el-table :data="gwfxgysData"
                  border :row-class-name="tableRowClassName" class="el-table-class">
          <el-table-column min-width="50%" prop="product" label="供应商"></el-table-column>
          <el-table-column min-width="16%" prop="times" label="问題次数" ></el-table-column>
          <el-table-column min-width="17%" prop="category" label="问题大类"></el-table-column>
          <el-table-column min-width="17%" prop="detail" label="具体问题" ></el-table-column>
        </el-table>

        <div class="block" style="text-align: right;margin-right: 13px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="10"
            layout="total,jumper,prev,next"
            :total="total">
          </el-pagination>
        </div>
      </div>
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

import Border from '@/components/Border'

export default {

  name: "feng-xian-jian-ce-level3",
  mounted() {
    this.myChart_yyqwt();
    this.myChart_ygwfxsp();
    this.myChart_ygwfxgys();
  },
  components: {
    Border
  },
  data() {
    return {
      gwfxspData: [{
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '411/上海青',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }],
      currentPage1: 2,
      total: 100,
      gwfxgysData: [{
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }, {
        product: '20001524/福建百利达食品有限公司',
        times: '80',
        category: '商品质量',
        detail: '农残'
      }],
    }
  },
  methods: {
    myChart_yyqwt(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart_yyqwt'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});
      // 绘制图表
      myChart.setOption({
        title: {
          text: '月食安舆情问题分布',
          left: '20px',
          top: '10px',
          textStyle: {
            fontSize: 16
          }
        },
        backgroundColor: '#0B284C',
        legend: {
          show: false
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '10%',
          top:'0%',
        },
        xAxis: {
          data: ['标签标识', '商品质量', '过期', '价签价格', '安全管理', '版权侵犯', '工程设施','购物环境','设施设备','现场管理','宣传用语','其他'],
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 14
            },
            formatter:function(val){
              var strs = val.split(''); //字符串数组
              var str = ''
              for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                str += s;
                if (!(i % 2)) str += '\n';
              }
              return str
            }
          }
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name:'Step Middle',
            type:'line',
            step: 'middle',
            symbolSize: 10,   //设定实心点的大小
            data:[220, 282, 201, 234, 290, 430, 410,100,33,220,339,239],
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#fff',
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'solid',
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#4AA9E5'
                  }])
                }
              }
            },
            areaStyle:{
              normal:{
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(80,141,255,0.39)'
                }, {
                  offset: .34,
                  color: 'rgba(56,155,255,0.25)'
                },{
                  offset: 1,
                  color: 'rgba(38,197,254,0.00)'
                }])
              }
            },//区域颜色渐变
          }
        ]
      });
    },
    myChart_ygwfxsp(){

    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%2==0) {
        return 'even-row';
      } else {
        return 'odd-row';
      }
      return '';
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    myChart_ygwfxgys(){

    }
  }
}
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
  .table-title{
    margin-left:20px;
    margin-top:10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: left
  }
  .el-table-class{
       width: 95%;
       height: 76%;
       margin: 14px
     }

</style>

<style>
  .fxjc .el-input__inner{
    background-color: #002547;
    border-radius: 0;
    border: 1px solid #515365;
    color: #fff;
  }

  .fxjc .btn-prev,.fxjc .btn-next{
    background-color: #002547;
    border-radius: 0;
    border: 1px solid #515365;
  }
  .fxjc .el-table .even-row {
    background: #0B284C;
  }

  .fxjc .el-table .odd-row {
    background: #2D4665;
  }
  .fxjc .el-table th {
    background: #2398D7;
    color: #fff;
    text-align:center
  }
  .fxjc .el-table td {
    text-align:center;
    color: #8E97A0;
    width: auto;
    font-size:10px
  }
  .fxjc .el-table td,.fxjc .el-table th{
    padding: 2.7px;
  }
  .fxjc .el-pagination__total{
    color: #fff;
  }
  .fxjc .el-pagination__jump{
    color: #fff;
  }
</style>
