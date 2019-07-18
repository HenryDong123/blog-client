import Vue from 'vue'
import Router from 'vue-router'
const Index = ()=>import('@/pages/Index/template.vue')
const Login = ()=>import('@/pages/Login/template.vue')
const Detail = ()=>import('@/pages/Detail/template.vue')
const Edit = () =>import('@/pages/Edit/template.vue')
const Create= ()=>import('@/pages/Create/template.vue')
const Register = ()=>import('@/pages/Register/template.vue')
const User= ()=>import( '@/pages/User/template.vue')
const My = ()=>import('@/pages/My/template.vue')
import store from '../store'

window.store = store
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'index',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta: {requireAuth: true}
    },
    {
      path: '/create',
      component: Create,
      meta: {requireAuth: true}

    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/my',
      component: My,
      meta: {requireAuth: true}
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})
export default router
