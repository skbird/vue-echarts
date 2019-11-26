import Vue from 'vue'
import Router from 'vue-router'
import ShiAnZiXun from '@/components/ShiAnZiXun'
import chinaScatterDemo from '@/components/chinaScatterDemo'
import JianYanJianCe from '@/components/JianYanJianCe'
import JianCePiCi from '@/components/JianCePiCi'
import YueChouShengQu1 from '@/components/YueChouShengQu1'
import YueChouShengQu2 from '@/components/YueChouShengQu2'
import YueShuiGuoGW from '@/components/YueShuiGuoGW'
import FengXianJianCe from '@/components/FengXianJianCe'
import YueLiWaiShangPin from '@/components/YueLiWaiShangPin'
import YueLiWaiAnJian from '@/components/YueLiWaiAnJian'
import YueShangPinTouSu from '@/components/YueShangPinTouSu'
import YueSuSongAnJian from '@/components/YueSuSongAnJian'
import YuQingWenTi from '@/components/YuQingWenTi'
import YueGaoWeiShangPin from  '@/components/YueGaoWeiShangPin'
import YueGaoWeiGongYingShang from '@/components/YueGaoWeiGongYingShang'
import XinPinYinRuShenHe from '@/components/XinPinYinRuShenHe'
import GongYingShangShenHe from '@/components/GongYingShangShenHe'
import ZhengJianGengXinShenHe from '@/components/ZhengJianGengXinShenHe'
import ZhengJianYuQiLv from '@/components/ZhengJianYuQiLv'
import XinPinFuShenLv from  '@/components/XinPinFuShenLv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shiAnZiXun',
      name: 'ShiAnZiXun',
      component: ShiAnZiXun
    },
    {
      path: '/chinaScatterDemo',
      name: 'chinaScatterDemo',
      component: chinaScatterDemo
    },
    {
      path: '/jianCePiCi',
      name: 'JianCePiCi',
      component: JianCePiCi
    },
    {
      path: '/jianYanJianCe',
      name: 'JianYanJianCe',
      component: JianYanJianCe
    },
    {
      path: '/yueChouShengQu1',
      name: 'YueChouShengQu1',
      component: YueChouShengQu1
    },
    {
      path: '/yueChouShengQu2',
      name: 'YueChouShengQu2',
      component: YueChouShengQu2
    },
    {
      path: '/yueShuiGuoGW',
      name: 'YueShuiGuoGW',
      component: YueShuiGuoGW
    },
    {
      path: '/fengXianJianCe',
      name: 'FengXianJianCe',
      component: FengXianJianCe
    },
    {
      path: '/yueLiWaiShangPin',
      name: 'YueLiWaiShangPin',
      component: YueLiWaiShangPin
    },
    {
      path: '/yueLiWaiAnJian',
      name: 'YueLiWaiAnJian',
      component: YueLiWaiAnJian
    },
    {
      path: '/yueShangPinTouSu',
      name: 'YueShangPinTouSu',
      component: YueShangPinTouSu
    },
    {
      path: '/yueSuSongAnJian',
      name: 'YueSuSongAnJian',
      component: YueSuSongAnJian
    },
    {
      path: '/yuQingWenTi',
      name: 'YuQingWenTi',
      component: YuQingWenTi
    },
    {
      path: '/yueGaoWeiShangPin',
      name: 'YueGaoWeiShangPin',
      component: YueGaoWeiShangPin
    },
    {
      path: '/yueGaoWeiGongYingShang',
      name: 'YueGaoWeiGongYingShang',
      component: YueGaoWeiGongYingShang
    },
    {
      path: '/xinPinYinRuShenHe',
      name: 'XinPinYinRuShenHe',
      component: XinPinYinRuShenHe
    },
    {
      path: '/gongYingShangShenHe',
      name: 'GongYingShangShenHe',
      component: GongYingShangShenHe
    },
    {
      path: '/zhengJianGengXinShenHe',
      name: 'ZhengJianGengXinShenHe',
      component: ZhengJianGengXinShenHe
    },
    {
      path: '/zhengJianYuQiLv',
      name: 'ZhengJianYuQiLv',
      component: ZhengJianYuQiLv
    },
    {
      path: '/xinPinFuShenLv',
      name: 'XinPinFuShenLv',
      component: XinPinFuShenLv
    }
  ]
})
