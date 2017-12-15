import Vue from 'vue'
import Router from 'vue-router'

import Tuijian from '@/components/tuijian';
import Paihang from '@/components/paihang';
import Search from '@/components/search';
import Xiangqing from '@/components/xiangqing';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tuijian',
      component: Tuijian
    },
    {
      path: '/paihang',
      component: Paihang, 
    },
    {
      path: '/search',
      component: Search
    },
    /*{
      path:  "/xiangqing",
      component: Xiangqing
    },*/ //第一种路由配置
    {
      path:  "/xiangqing/:solitudeid",//动态路由匹配
      component: Xiangqing
    },//第二种路由匹配
    {
    	path:"*",//任何路径都会匹配到tuijian组件中
    	redirect:"/tuijian"
    }

  ]
})
