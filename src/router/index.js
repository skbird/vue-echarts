import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        name: 'DetectionDataCockpit',
        component: resolve => require(['@/components/report/Index'], resolve)
    }]
})
