import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/TareasTrabajador',
    name: 'TareasTrabajador',
    component: () => import(/* webpackChunkName: "tareasTrabajador" */ '../views/TareasTrabajador.vue')
  },
  {
    path: '/TareasPlanificador',
    name: 'TareasPlanificador',
    component: () => import(/* webpackChunkName: "tareasPlanificador */ '../views/TareasPlanificador.vue')
  },
  {
    path: '/PremiosTrajabador',
    name: 'PremiosTrabajador',
    component: () => import(/* webpackChunkName: "premiosTrabajador */ '../views/PremiosTrabajador.vue')
  },
  {
    path: '/PremiosGestor',
    name: 'PremiosGestor',
    component: () => import(/* webpackChunkName: "premiosGestor */ '../views/PremiosGestor.vue')
  },
  {
    path: '/UsuariosPlanificador',
    name: 'UsuariosPlanificador',
    component: () => import(/* webpackChunkName: "usuariosPlanificador */ '../views/UsuariosPlanificador.vue')
  },
  {
    path: '/UsuariosGestor',
    name: 'UsuariosGestor',
    component: () => import(/* webpackChunkName: "tareasPlanificador */ '../views/UsuariosGestor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
