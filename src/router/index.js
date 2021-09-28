import { createRouter, /*createWebHistory,*/ createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import subabase from '../plugins/subabase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/NewPost.vue')
  },
  {
    path: '/post/:pid',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue')
  },
  {
    path: '/edit/:pid',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditPost.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from , next)=>{
  if(subabase.auth.session() == null && to.name == "New"){
    next('/')
  }
  else if(subabase.auth.session() == null && to.name == "Manage"){
    next('/');
  }
  else if(subabase.auth.session() == null && to.name == "Edit"){
    next('/');
  }
  next();
})
export default router
