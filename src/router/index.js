import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ContainerTop from '@/components/ContainerTop'
import JianYanJianCe from '@/components/JianYanJianCe'
import JianCePiCi from '@/components/JianCePiCi'
import FengXianJianCeLevel1 from '@/components/FengXianJianCeLevel1'
import FengXianJianCeLevel2 from '@/components/FengXianJianCeLevel2'
import FengXianJianCeLevel3 from '@/components/FengXianJianCeLevel3'
import XinPinYinRuShenHe from '@/components/XinPinYinRuShenHe'
import GongYingShangShenHe from '@/components/GongYingShangShenHe'
import ZhengJianGengXinShenHe from '@/components/ZhengJianGengXinShenHe'
import ZhengJianYuQiLv from '@/components/ZhengJianYuQiLv'
import XinPinFuShenLv from  '@/components/XinPinFuShenLv'
import ZhanQuChengJi from '@/components/ZhanQuChengJi'
import MenDianChengJi from '@/components/MenDianChengJi'
import ZhanQuChengJiMingXi from '@/components/ZhanQuChengJiMingXi'
import FlexDemo from '@/components/FlexDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/containerTop',
      name: 'ContainerTop',
      component: ContainerTop
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
      path: '/fengXianJianCeLevel1',
      name: 'FengXianJianCeLevel1',
      component: FengXianJianCeLevel1
    },
    {
      path: '/fengXianJianCeLevel2',
      name: 'FengXianJianCeLevel2',
      component: FengXianJianCeLevel2
    },
    {
      path: '/fengXianJianCeLevel3',
      name: 'FengXianJianCeLevel3',
      component: FengXianJianCeLevel3
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
    },
    {
      path: '/zhanQuChengJi',
      name: 'ZhanQuChengJi',
      component: ZhanQuChengJi
    },
    {
      path: '/menDianChengJi',
      name: 'MenDianChengJi',
      component: MenDianChengJi
    },
    {
      path: '/zhanQuChengJiMingXi',
      name: 'ZhanQuChengJiMingXi',
      component: ZhanQuChengJiMingXi
    },
    {
      path: '/flexDemo',
      name: FlexDemo,
      component: FlexDemo,
    }
  ]
})
