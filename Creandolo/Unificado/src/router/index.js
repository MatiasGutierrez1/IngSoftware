import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/HomeT',
    name: 'HomeT',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeT.vue')
  },
  {
    path: '/HomeP',
    name: 'HomeP',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeP.vue')
  },
  {
    path: '/HomeG',
    name: 'HomeG',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/HomeG.vue')
  },
  {
    path: '/TareasTrabajador',
    name: 'TareasTrabajador',
    component: () => import('../views/TareasTrabajador.vue')
  },
  {
    path: '/TareasPlanificador',
    name: 'TareasPlanificador',
    component: () => import( '../views/TareasPlanificador.vue')
  },
  {
    path: '/TareasGestor',
    name: 'TareasGestor',
    component: () => import( '../views/TareasGestor.vue')
  },
  {
    path: '/PremiosTrajabador',
    name: 'PremiosTrabajador',
    component: () => import ('../views/PremiosTrabajador.vue')
  },
  {
    path: '/PremiosGestor',
    name: 'PremiosGestor',
    component: () => import('../views/PremiosGestor.vue')
  },
  {
    path: '/PremiosPlanificador',
    name: 'PremiosPlanificador',
    component: () => import('../views/PremiosPlanificador.vue')
  },
  {
    path: '/UsuariosPlanificador',
    name: 'UsuariosPlanificador',
    component: () => import('../views/UsuariosPlanificador.vue')
  },
  {
    path: '/UsuariosGestor',
    name: 'UsuariosGestor',
    component: () => import( '../views/UsuariosGestor.vue')
  },
  {
    path: '/RankingTrabajador',
    name: 'RankingTrabajador',
    component: () => import('../views/RankingTrabajador.vue')
  },
  {
    path: '/RankingPlanificador',
    name: 'RankingPlanificador',
    component: () => import('../views/RankingPlanificador.vue')
  },
  {
    path: '/RankingGestor',
    name: 'RankingGestor',
    component: () => import('../views/RankingGestor.vue')
  },
  {
    path: '/PerfilTrabajador',
    name: 'PerfilTrabajador',
    component: () => import('../views/PerfilTrabajador.vue')
  },
  {
    path: '/PerfilPlanificador',
    name: 'PerfilPlanificador',
    component: () => import('../views/PerfilPlanificador.vue')
  },
  {
    path: '/PerfilGestor',
    name: 'PerfilGestor',
    component: () => import('../views/PerfilGestor.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
