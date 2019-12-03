<template>
  <div class="flex-row" style="width: 100%;height: 400px">

    <div class="flex" style="width: 27.3%;height:100%;">
      <Border class="flex-column" style="width: 100%;height:100%;">
        <div class="flex-column" style="width: 100%;height:100%">
          <div class="flex list-title" style="width: 100%;height: 10%" >食安最新资讯</div>
          <div class="flex-column" style="width: 100%;height: 80%">

            <ul class="flex-column infinite-list-wrapper" v-infinite-scroll="load">
              <li v-for="item in ziXunData" class="infinite-list-item">
                <a v-bind:href="item.url" target="_blank" class="title" v-text="item.title"></a>
              </li>
            </ul>

          </div>
        </div>
      </Border>
    </div>

    <div class="flex" id="s-map"style="width: 44.3%;height: 100%;margin-top: 10px">
      <div id="chartMap" class="chartGauge" :style="{width: '100%', height: '100%'}"></div>
    </div>

    <div class="flex" style="width: 27.3%;height:100%;">
      <Border class="flex-column" style="width: 100%;height:100%;">

        <div class="flex-column" style="width: 100%;height:100%">
          <div class="flex list-title" style="width: 100%;height: 10%">食安安全法规</div>
          <div class="flex-row" style="width: 100%;height: 80%">

            <ul class="flex-column infinite-list-wrapper" v-infinite-scroll="load">
              <li v-for="item in faGuiData" class="infinite-list-item">
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

export default {
  name: "container-top",
  components: {
    Border
  },
  props: {
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  mounted() {
    this.drawMap();
  },
  methods: {
    load () {

    },
    drawMap: function () {
      let chartMap = document.getElementById('chartMap');
      let smap = document.getElementById('s-map');　　　　　　　　　 // 动态修改图表的宽高，达到自适应的效果　
      var resizeWorldMapContainer = function () {
        chartMap.style.width = smap.clientWidth + 'px';
        chartMap.style.height = smap.clientHeight + 'px';
      };
      resizeWorldMapContainer();
      // 注册可用的地图  'light' 和 'dark'
      let myChart = echarts.init(chartMap, 'light');
      window.addEventListener("resize",function(){myChart.resize();});
      var data = [
        {name: "北京", value: 23},
        {name: "天津", value: 12},
        {name: "河北", value: 4},
        {name: "山西", value: 3},
        {name: "内蒙古", value: 0},
        {name: "辽宁", value: 0},
        {name: "吉林", value: 0},
        {name: "黑龙江", value: 0},
        {name: "上海", value: 24},
        {name: "江苏", value: 34},
        {name: "浙江", value: 23},
        {name: "安徽", value: 4},
        {name: "福建", value: 56},
        {name: "江西", value: 34},
        {name: "山东", value: 12},
        {name: "河南", value: 13},
        {name: "湖北", value: 32},
        {name: "湖南", value: 4},
        {name: "重庆", value: 43},
        {name: "四川", value: 4},
        {name: "贵州", value: 3},
        {name: "云南", value: 2},
        {name: "西藏", value: 0},
        {name: "陕西", value: 0},
        {name: "甘肃", value: 0},
        {name: "青海", value: 0},
        {name: "宁夏", value: 0},
        {name: "新疆", value: 0},
        {name: "广东", value: 13},
        {name: "广西", value: 23},
        {name: "海南", value: 0},
      ];
      var max = 480,
        min = 9;
      var maxSize4Pin = 100,
        minSize4Pin = 20;
      var convertData = function (data) {
        const jeanData = echarts.getMap('china');
        var res = [];
        jeanData.geoJson.features.find(e => {
          for (var i = 0; i < data.length; i++) {
            if (e.properties.name == data[i].name) {
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
              return params.name + ' : ' + params.value;
            } else {
              return params.name + ' : ' + params.value[2];
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
        /*图例组件*/
        legend: {
          /*图例列表的布局朝向。*/
          orient: 'vertical',
          id: 1,
          y: 'bottom',
          x: 'right',
          itemWidth: 15,
          data: [{
            icon: "image://data:image/png;base64,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",
          }
          ],
          textStyle: {
            color: '#fff'
          }
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
            aspectScale: 0.75, //长宽比
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
                areaColor: '#D6D6D6',
                borderColor: '#F0F0F0',
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
            symbol: "image://data:image/png;base64,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",
            symbolSize: function (val) {
              return val.length * 7;
            },
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
  },
  data() {
    return {
      ziXunData: [{
        'title': '海关总署关于《进口食品境外生产企业注册管理规定(征求意见稿）》公开征求意见的通知',
        'url': 'http://news.foodmate.net/2019/11/542183.html'
      }, {
        'title': '农业农村部办公厅关于完善动物检疫出证有关事项的通知',
        'url': 'http://news.foodmate.net/2019/11/541993.html'
      }, {
        'title': '国家发展改革委商务部关于印发《市场准入负面清单（2019年版）》的通知【发改体改〔2019〕1685号】',
        'url': 'http://news.foodmate.net/2019/11/541699.html'
      }, {
        'title': '海关总署发布禁止从动物疫病流行国家地区输入的动物及其产品一览表',
        'url': 'http://news.foodmate.net/2019/09/532357.html'
      }, {
        'title': '皓虹牌清风茶治疗痛风有奇效？其实是加了激素药',
        'url': 'http://news.foodmate.net/2019/11/542091.html'
      }, {
        'title': '网传奶茶不含奶？西安市面9种样品有1种几乎不含',
        'url': 'http://news.foodmate.net/2019/11/542264.html'
      }, {
        'title': '奶粉中检出矿物油&nbsp;还能放心吃吗',
        'url':'http://news.foodmate.net/2019/11/542037.html'
      }, {
        'title': '老字号汤圆店被举报汤圆回锅再售&nbsp;&ldquo;口水汤圆&rdquo;将被严处',
        'url':'http://news.foodmate.net/2019/11/541711.html'
      }, {
        'title': '案值37亿元，特大坚果走私案！部分来自疫区、黄曲霉素超标！最后竟生产成品牌坚果&hellip;',
        'url':'http://news.foodmate.net/2019/11/541645.html'
      }, {
        'title': '西安男子吃了鹅蛋后拉肚子怀疑是假的&nbsp;老板称可能是不新鲜了',
        'url':'http://news.foodmate.net/2019/11/541661.html'
      }, {
        'title': '市场监管总局：近三个月对保健食品虚假违法广告罚款1727万元',
        'url':'http://news.foodmate.net/2019/11/542427.html'
      }, {
        'title': '农业农村部：近三个月取缔4471家不符合要求生猪定点屠宰企业',
        'url':'http://news.foodmate.net/2019/11/542428.html'
      }, {
        'title': '吉野家跟风自助早餐引流',
        'url':'http://news.foodmate.net/2019/11/542162.html'
      }],
      faGuiData: [{
        'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
      }, {
        'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
      }, {
        'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
      }, {
        'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
      }, {
        'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
      }, {
        'title': 'GB 31660.9-2019 食品安全国家标准 家禽可食性组织中乙氧酰胺苯甲酯残留量的测定 高效液相色谱法'
      }]
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
