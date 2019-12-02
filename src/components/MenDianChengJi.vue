<template>
  <Border class="flex" style="width: 100%;height: 550px">
    <div class="flex" style="width: 100%;height: 100%">
      <div id="myChart_mdcj_1" :style="{width: '100%', height: '100%'}"></div>
      <div id="myChart_mdcj_2" :style="{width: '100%', height: '100%'}"></div>
    </div>
  </Border>
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
    name: "men-dian-cheng-ji",
    components: {
      Border
    },
    mounted() {
      this.myChart_mdcj_1();
      this.myChart_mdcj_2();
    },
    methods: {
      myChart_mdcj_1() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_mdcj_1'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        myChart.setOption({
          backgroundColor:'#0B284C',
          title: {
            left: 20,
            top: 10,
            text: '门店成绩TOP5'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
          },
          xAxis: [{
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false
            },
            type: 'category',
            data: ['象园店','屏西店','华林店','鼓楼店','黎明店']
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '门店成绩',
            type: 'bar',
            itemStyle:{
              normal:{color:'#F8BB52'},
            },
            barMinWidth: 1,
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            markPoint : {
              data: [
                {type: 'max', name: '最大值'}
              ],
              symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAeCAYAAACIeIa4AAAACXBIWXMAAC4jAAAuIwF4pT92AAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAoYSURBVHjazJhpkB1VFcd/5/btfussWSYzEyAhkBRhkyXshF1Qwm6xFXzQgkJIAQIqllKCgIpVggTkAyhGQUCJgCiQAIJIyVIgiyCELQGSCSQZMvubt3b3PX7oniQTEkhgsDxVt96H193n/M89538WqZzUyWZJnJzsxTlkooG6buQhBwhMPgeyU0A8cA0weRCmg/6CWteXMdk1SGY2uA8wGSi/Dt33gJjk/Q0lI2ivo3ZDNfnbB/TTTTZ8fukAvg3ShgJxBTROjdREhd96EVHp3yy77niWXpYnLm1DdusMthVsM/Q9Dq46Amw88B1g6uc1zI4BuKuAs8DdhtZh/FEQtIHWwO+chYY30/Pg3nQvgPrqBIzIEKJ1ZMQHbv3v1YBLgH2A0/634NZFzcHAdOBVYA7RYB8tB0LbSRD1At4F1JbNo3uBpedJ8Jshtw1oBGoMzgnqkstt2g36etOblgpwCrAvcC7wNvDkZwFnPtMbyVuXAvNTi95AI7At4I+HoD2LCU5l2XWWlU9C8y7Quk8aslHqoPVyyytsmGvLgTJwC3DZ2jz7wsBpql/wUWYBdwEvAieClNEQtAqeD16uRlzpJ+yFjgNhxvUx2e1iwt6Nh4LJg4wCNwycBLwE/A7YS3tdoE63OCxPSmmusXGqSqEZmol4hKKpUpBFlPXneFwLvILGAwk5TIT6SoirAa7WxJQLoXnfazDWEfX9EPHW85RLfkWgsGNCKF7ziL4h4HxgbxxbU5RbojddJxUCxjEHpfSJtkIAWAvsDlzxaXmmMehH8cHU3FNE5j6E64D7gEW4KuRnwLhDoLYahCLi1ynOugQX3YBbc9a6D2kSYyYHLgQ1YNug9RAYeAa8/IjWbuBk4BQaOt+fE1TCJxr7UdcFkpXNKQU/s8CPjGE3ETlBNuULD7TbPe19PfeGTLO30BXfj+GpNDeGEQFXh2gYTABoCdzJuFIZFfAy24Ikt+RlwFWUqBvicuLoYBIUd4a+J9YHVwGuw/AANbqp6a1mWL9nA/MPAjmMeBPXpqCqi5zjMhsEgqqeVxqOd3eOqWZjAD0hGowXt2xver0WmY7yk9SzC4BnMTmoLIWhZ2HiCVBfFSKEuHAEbAMjYAJcpYZUFovYfohqyfejPNTeBZPdUPM04FScdkqzNMJpXn+5K1rsGXMYG8k/VTCGFcWiOc9awfb3xyisLpXcOXHMIyIbkExai8vvh12ZFTFBRc/HcCPwOHDHOlLIQOkVKOySMKZrJB2HOhALeLjBMi6u4hkHngWXqvIMGJOG7ChZALTR4DimmIvNqQGrz60uz061CVvox8F5HnPDiBUCmL7+mP7+GFUes5YrPA/WP9aHeGXMpNNzXc3HZWfTFd8EnArsCRy6jpqKUH4rKdSZqWDHg9cEtgmMjxv+CFcF8YIErEpC1uKB+Jsi7v2BAxBOoazzpMxRWqFLSOz6mK2Wq1RZ2N8f09cfY6wVrJURJv4pcPcobzgwBUGr6tPtnqYgWYRBoAg8PepBrxlcD9RfhsZiqL0Ktf9A9aWksHtsQPkCziXE4mqg4YYk+HyKehBfCkT6N7+FjNgNmxpIye1KERjBZJ1TRMAkyTYxZc/RkSkQDWrgBIyVc1HdiiR8D03Dc20RJFwJtQDi6rpG2OYE46d262jWjmrQqIJphmwHhENg1lbsQ4HfAr9GtJucQEOCtTV3dFjuBrSL0B3HyR+ms8Nn4gSLKkQRtzvHTOdSh7okjh1QXRUXo4jt8PgDyiTgWmDCuoGgBvltIDeFJNl9kFzaS2YHRmNyMWI0Ae+ACDJtkG1PcnWdFIF5KO1gbndZ2bFecUUXKbqejemZHkXcoQqT2iydHT6mUDBkMgbPcLkxzDFpbo8cAYJJHvEHbmZpfuU9fJmPZR7wd+A1oC0xOE7yzuTBReCcBZlCprWVTGsHnp/WbYWg6JEZNw2bn4zSmXiwsY6EEpkAvAMswuMGVO+MFkdvZiaZmV5OEEbbmZ4jPcNVmYyhUDDYKFJAv9rW5l8tomx0UrIiGpldNWuaNNalohwEFIB7gGOANagm5GAzyUSAmY5rLNKBd7bFFkOiatqgGKj2NKkLFxHViuI3P4rNnIjN1BKiWavVB+4FzsGXX7mVbgfvnnpuyvTMLjJOINKNlXFRlStU9YUo4iEbRbqrCHdYu7aZlY12KDn2lVBnSVV3xedm6hQQHkwTvhMvu4ry+9A0DfJbg2hGexaPi1+7V0ADMiahOBcSv3m/UNOiFFrw9jizhVy7l4x+3ohvO4A88BzKQ3gMSob5wQQzZHxmI4C3yZYDVe6IIj3cqjJXFR/0jU020jFKs0x2/wpn+qdnr5UO8wHdroywDHgXOA6xDxEOQKMEOaA+oOLn1UzdH8SBF4BJac5FEDUQmwfnlChUyl0w+DbYPMCXgEeBPVDuoyjj43+Gd8V1PVtbZJBQV35CbxkDWwFzbUr/3/3Uwd0hptUkHBnqOIT90rx4OWEE3RNbeJnSUojKkOt8D7/pbDPtyFY0bqylXdVElfHBRQG1geXU1lQZeistE7JH+tBzwPcRVhHp+/qhQ0TuBv64eUsGxlvgwy2aI0Ig5h3gB+mgOgtYCLQj/l7UVgnVFUrLrsM0zbifRikBElcgLIHfBF4ubb0ESm9DeTnEtZFW7ZfpVLA/8BfgNELOsscFRM+E5ZE1zWbIh2ZLJj8dctBQUB4HDgAeBE5Ie8B7QX+DlzsWLw+lpbDyIRheCjYLNudjvFZsLsDLQWkJLP8TDL4JcQlMMAe4DXgA2D4dxRamIB/hI4cOuC0arzd7zaA1xR4UIAWBqoIQAt8A9gMuB+YBS0BXI95OCI9SH3wFYyFunKFrXj6Pan8H2dZumbT3rYj9PeEwZFp3RuRoVFuAo4G5qco/Ay8iPExVkaJgDwqIXg+RjIwtOKrgzfZhooEeB8JqYDawU7qx+jGQBZ4CbkLjDjItJ6PRMW7JvTtp75IAz4MoniEDy/Yz7TtfQtD8MKoemONBLwS+mX7nwZRU3gBiImCiwZttiV4IITPWCyIDlBQiXT/mY2BNuus4IDXuUdA+NBykMMVq7/LdXc9SJN+S1MHA4Xrfs+Lnd5fi5McY7hpATCVt4y4Fbk+XT19Lv5/oizTRvwVhORZ7y9XAV1LmHAaqqJuOl70ak1/pqj1ItpiOPYB4SLaIq/SA5Ffh5a5B423SNYdL+9sjgA/+H/aWIwsdk676/orIjaibR2PwW7gwoXhZf8lkkgkgHLwedTMQcwJwQfr+wNob+5xiGDtxab6cDqabuDYHm1ko+fY+rab7HOMBglaHkFx7PzazkLh6BJhu4EzgyrECNtbgRu8dXTiDYNyxZsrhd5riOKj0QG0AKj2YYitm6uF3E0w4FhftkO5ixlzsFwQu8X5ch/zki8zMM97R7ufnUu3ditz4D6V9n1vJb30jQ0tGPz/G8t8BABsoLa5YkgaXAAAAAElFTkSuQmCC',
              symbolSize:[55,30],
              symbolOffset:['0%', '-55%'],
              label: {
                show: false
              }
            },
            data: [2031, 1793, 3640, 2593, 4377]
          }]
        })
      },
      myChart_mdcj_2() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart_mdcj_2'), 'dark');
        window.addEventListener("resize",function(){myChart.resize();});
        myChart.setOption({
          backgroundColor:'#0B284C',
          title: {
            left: 20,
            top: 10,
            text: '门店成绩BOTTOM5'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
          },
          xAxis: [{
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false
            },
            data: ['象园店','屏西店','华林店','鼓楼店','黎明店']
          }],
          yAxis: {
            show: false
          },
          series: [{
            name: '门店成绩',
            type: 'bar',
            itemStyle:{
              normal:{color:'#AE5557'},
            },
            barMinWidth: 1,
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            markPoint : {
              data: [
                {type: 'min', name: '最小值'}
              ],
              symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAADAklEQVRYR82WS0gVURjH/9/ozO2xadELybkW6D1CFGGUixSjCBIsJEpd9aJaBb2IFkVKbYQW2S6hkjZKUUgtCooeGLToJS6csdvCGSWKiJAguud67xdXvber3seZuUnOYmDmfP//95tvzvnOIcyDi+YBA3xDDAUD9cxoJI6PMWtPxWjksd8P8gVhlQZOE/GVGUn3CVfe9QPiGcIy9SoCvZ2ZjMFfKU47xKgc8AriHSJodBOjOVMiAnWG3MixOYUYKjWamdCdKwmDN1a60XdeQJQr8WUFFo8FjD4GNuRMQLgpHHl4TiDsUuMSCOeT5gy0QdO6MD5eRpp2CkBDckwj7Klw5H1VEKVKhMv06lic+gAUJ42FK1NayzRaCbiYHCPgjWbImvJPiKiAKEHYptELYHfKkPmFGIluTT5bq4rrSNOepydMVKrSla3/BMIO6ofAdGOamQIEgF9FxFvKneiHfCA5KzFUgqVcbLwCEPIBASb0VDqypSAI2zTaAZydZaJWiQkZMVpCI7InF0jWSgyW6dVanF5nFHuAYOC9cOUmAmLZQLJC2KaRoG8qFGJSTyeEG+nwBDEYNBo1RvZ17qESU4nDEnLzOhc/Mrf7DG8tM/CSwLVZ/6N3CIBwQTjyshKEZQaOE/hantY8IBy5PtUnSvUDRHQrzyr4rhFqKhxpzYybNic+mgvWxBFPdMYShWXVGnJlW3gllo3rRgcRVJbi7ZAr9+eEsMxAJ4GP5ANIG/8MYBGAJR40TcKVd9LjU5UIm4GGGPiBBzO/of1YKGvFEH4mDdI2If0JgbarOhPQFde0NsRidUSU2LzKVLUA2oUrz02DsNQm1t8czN/ESHR5amLO2EWVYEjbJpzfzya6SOJmm0bizFilJJ4MGhauXF0QBPBQuHLXBIRl6kcJdN0DwEQoM51BEd3LdKhR9SKi+pATeUS2adizdklVl4Lj+KpwoycTEFywl1+Dqc77fyEIvcKRjQmIvWAcBGGn3w/yqesf1/jg2uFov9IZ02cSZdm8gPgD9C0iMBTJP/oAAAAASUVORK5CYII=',
              symbolSize:[33,32],
              symbolOffset:['0%', '-55%'],
              label: {
                show: false
              }
            },
            data: [2031, 1793, 3640, 2593, 4377]
          }]
        })
      }
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: column;
  }
</style>
