import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import test from '@/pages/test/test'
import Forget from '@/pages/Forget/Forget'
import Register from '@/pages/Register/Register'
import Index from '@/pages/Index/Index'
import Community from '@/pages/Community/Community'
import Diary from '@/pages/Diary/Diary'


Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'',
			redirect:'/home',
		},
    {
      path: '/home',
      component: Home
    },
		{
			path: '/login',
			component: Login
		},
		{
			path:'/test',
			component:test
		},
		{
			path:'/forget',
			component:Forget
		},
		{
			path:'/register',
			component:Register
		},
		{
			path:'/index',
			component:Index
		},
		{
			path:'/community',
			component:Community
		},
		{
			path:'/diary',
			component:Diary
		}
		
  ]
})
