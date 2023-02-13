import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/formulario',
      name: 'formulario',
      component: () => import('../views/FormularioView.vue')
    },
    {
      path: '/listado/:nombre/:apellido',
      name: 'listado',

      component: () => import('../views/NewView.vue'),
      props:true
    }
    

  ]
})

export default router
