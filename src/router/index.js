import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home=()=> import('@/views/Home/index.vue') 
const Club=()=>import('@/views/Club/index.vue') 
const All =()=>import('@/views/All/index.vue')
const Friends=()=>import('@/views/Friends/index.vue')
const CreateClub=()=>import('@/views/CreateClub/index.vue')

const routes= [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Club',
    name: 'Club',
    component: Club
  },
  {
    path: '/All',
    name: 'All',
    component: All
  },
  {
    path: '/Friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/CreateClub',
    name: 'CreateClub',
    component: CreateClub
  }
];

export default new Router({
  routes,
  mode:'history'
}
)
// import Home from '@/views/Home/index.vue'
// import Club from '@/views/Club/index.vue'
// import All from '@/views/All/index.vue'
// import Friends from '@/views/Friends/index.vue'
