import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import movie from '../pages/movie'
import book from '../pages/book'
import xiaozu from '../pages/xiaozu'
import guangbo from '../pages/guangbo'
import gengduo from '../pages/gengduo'
import zhuce from '../pages/zhuce'
import login from '../pages/login'
import tiaozhuan from '../pages/tiaozhuan'
import shouyexq from '../pages/shouyexq'
import moviexq from '../pages/moviexq.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/moviexq',
      name: 'moviexq',
      component: moviexq
    },
    {
      path: '/shouyexq',
      name: 'shouyexq',
      component: shouyexq
    },
    {
      path: '/tiaozhuan',
      name: 'tiaozhuan',
      component: tiaozhuan
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/xiaozu',
      name: 'xiaozu',
      component: xiaozu
    },
    {
      path: '/guangbo',
      name: 'guangbo',
      component: guangbo
    },
    {
      path: '/gengduo',
      name: 'gengduo',
      component: gengduo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/*',
      redirect: "/index"
    }
  ]
})
