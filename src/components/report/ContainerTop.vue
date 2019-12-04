<template>
  <div class="flex-row" style="width: 100%;height: 380px">

    <div class="flex" style="width: 27.8%;height:100%;">
      <Border class="flex-column" style="width: 100%;height:100%;">
        <div class="flex-column" style="width: 100%;height:100%">
          <div class="flex list-title" style="width: 100%;height: 10%" >食安最新资讯</div>
          <div class="flex-column" style="width: 100%;height: 80%">

            <ul class="flex-column infinite-list-wrapper">
              <li v-for="item in latestNews" class="infinite-list-item">
                <a v-bind:href="item.url" target="_blank" class="title" v-text="item.title"></a>
              </li>
            </ul>

          </div>
        </div>
      </Border>
    </div>

    <div class="flex" style="width: 44.25%;height: 100%;margin-top: 10px">
      <div id="chartMap" class="chartGauge" :style="{width: '100%', height: '100%'}"></div>
    </div>

    <div class="flex" style="width: 27.8%;height:100%;">
      <Border class="flex-column" style="width: 100%;height:100%;">

        <div class="flex-column" style="width: 100%;height:100%">
          <div class="flex list-title" style="width: 100%;height: 10%">食安安全法规</div>
          <div class="flex-row" style="width: 100%;height: 80%">

            <ul class="flex-column infinite-list-wrapper">
              <li v-for="item in safetyRules" class="infinite-list-item">
                <a href="item.url" target="_blank" class="title" v-text="item.title"></a>
              </li>
            </ul>

          </div>
        </div>
      </Border>
    </div>

  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
//引入地图组件
import china from 'echarts/map/js/china'
import Border from '@/components/report/Border'

let initData={
  latestNews:[],
  safetyRules:[],
  userMap:{}
}

export default {
  name: "container-top",
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
      await this.getRiskCountReport();
      this.drawMap();
    },
    async getRiskCountReport() {
      try {
        await Promise.race([
          this.$store.dispatch("ajaxRequest", {
            state: ['topContentData'],
            type: 'getTopContent',
            url: '/api/checking/dataReport/getTopContent',
            params: {}
          }),
          this.Util.timeout()
        ]);
        let _result = this.$store.state.topContentData;
        this.userMap = _result.userMap;
        this.latestNews = _result.latestNews;
        this.safetyRules = _result.safetyRules;

      }catch (ex) {
        this.Util.doException(this, ex)
      } finally {
      }
    },
    drawMap: function () {
      let myChart = echarts.init(document.getElementById('chartMap'), 'dark');
      window.addEventListener("resize",function(){myChart.resize();});

      var data =
        [
          {name: '北京', value: this.userMap.beijing},
          {name: '天津', value: this.userMap.tianjin},
          {name: '上海', value: this.userMap.shanghai},
          {name: '重庆', value: this.userMap.congqing},
          {name: '河北', value: this.userMap.hebei},
          {name: '河南', value: this.userMap.henan},
          {name: '云南', value: this.userMap.yunnan},
          {name: '辽宁', value: this.userMap.liaoning},
          {name: '黑龙江', value: this.userMap.heilongjiang},
          {name: '湖南', value: this.userMap.hunan},
          {name: '安徽', value: this.userMap.anhui},
          {name: '山东', value: this.userMap.sandong},
          {name: '新疆', value: this.userMap.xinjiang},
          {name: '江苏', value: this.userMap.jiangshu},
          {name: '浙江', value: this.userMap.zhejiang},
          {name: '江西', value: this.userMap.jiangxi},
          {name: '湖北', value: this.userMap.hubei},
          {name: '广西', value: this.userMap.guangxi},
          {name: '甘肃', value: this.userMap.ganshu},
          {name: '山西', value: this.userMap.sanxi},
          {name: '内蒙古', value: this.userMap.neimenggu},
          {name: '陕西', value: this.userMap.shanxi},
          {name: '吉林', value: this.userMap.jilin},
          {name: '福建', value: this.userMap.fujian},
          {name: '贵州', value: this.userMap.guizhou},
          {name: '广东', value: this.userMap.guangdong},
          {name: '青海', value: this.userMap.qinghai},
          {name: '西藏', value: this.userMap.xizhang},
          {name: '四川', value: this.userMap.shichuan},
          {name: '宁夏', value: this.userMap.ningxia},
          {name: '海南', value: this.userMap.hainan},
          {name: '台湾', value: this.userMap.taiwan},
          {name: '香港', value: this.userMap.xiangang},
          {name: '澳门', value: this.userMap.aomen}
        ];

      var convertData = function (data) {
        const jeanData = echarts.getMap('china');
        var res = [];
        jeanData.geoJson.features.find(e => {
          for (var i = 0; i < data.length; i++) {
            if (e.properties.name == data[i].name&&data[i].value>0) {
              res.push({
                name: data[i].name,
                value: e.properties.cp.concat(data[i].value)
              })
            }
          }
        })
        return res;
      };
      let option = {
        backgroundColor: '',
        /*提示框组件*/
        tooltip: {
          /*触发类型*/
          trigger: 'item',
          formatter: function (params) {
            if (typeof(params.value)[2] == "undefined") {
              if(params.value!=0){
                return params.name + ' : ' + params.value;
              }
            }
          }
        },
        title:{
          text: '用户分布',
          left: '20px',
          top: '10px',
          textStyle: {
            color: '#CCCCCC',
            fontSize: '22',
          }
        },
        grid: {
          left: '15%',
          right: '5%',
          top: '10%',
          bottom: '0%'
        },
        /*图例组件*/
        legend: {
          show: false
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
          color: ['rgb(20,244,244)', 'rgb(0,243,243)', 'rgb(149,250,250)', 'rgb(202,253,253)', 'rgb(214,214,214)'],
          show: false,
        },
        /*地理坐标系组件。*/
        geo: {
          /*是否显示地理坐标系组件*/
          show: true,
          /*引入的map文件*/
          map: 'china',
          /*图形上的文本标签,可用于说明图形上的基本信息*/
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: false,
            }
          },
          /*组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。*/
          zoom: 1.2,
          /*是否开启鼠标缩放和平移漫游。默认不开启。*/
          roam: true,
        },
        series: [
          {
            type: 'map',
            map: 'china',
            /*
            * 默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。
            * 这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。
            * 并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
            * */
            geoIndex: 0,
            /*这个参数用于 scale 地图的长宽比。*/
            aspectScale: 1, //长宽比
            /* 在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在 legend 组件时生效。 */
            showLegendSymbol: true, // 存在legend时显示
            /*图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等*/
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              },
              emphasis: {
                show: false
              }
            },
            /*是否开启鼠标缩放和平移漫游。默认不开启。*/
            roam: true,
            /*地图区域的多边形 图形样式。*/
            itemStyle: {
              normal: {
                areaColor: '#F9F9F9',
                borderColor: '#F9F9F9',
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            animation: false,
            data: data
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbol: "image:///images/u91.png",
            symbolSize: function (val) {
              return val.length * 7;
            },
            symbolOffset:['0%', '-55%'],
            label: {
              normal: {
                show: false,
                formatter: function (params) {
                  return params.name;
                },
                position: 'right',
                color: '#fff',
                fontSize: '8'
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#ea6347',
                borderWidth: 2,
                borderColor: '#f4b391'
              }
            }
          },
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
  .flex{
    display: flex;
  }
  .flex-row{
    display: flex;
    flex-direction: row;
  }
  .flex-column{
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: white;
    text-align: left;
  }
  .list-title{
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
    color: #CCCCCC;
  }
  a{color:#fff;font-size: 14px}
  a:link{color:#fff;}

  .infinite-list-wrapper {
    overflow:auto;
    margin-left: 20px;
    padding-left: 0px
  }
  ul::-webkit-scrollbar{
    display:none;
  }
  li {
    list-style-type: none;
    text-decoration: underline;
    text-align: left;
    margin-top: 5px;
  }

</style>
