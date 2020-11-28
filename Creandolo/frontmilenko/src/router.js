
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
          },
          {
            path: '/HomeT',
            name: 'HomeT',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/HomeT.vue')
          }

    ]
  })


export default router
