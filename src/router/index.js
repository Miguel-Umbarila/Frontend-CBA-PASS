import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormularioVuew.vue'),
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: () => import('../views/UsuarioVuew.vue'),
    },
    {
      path: '/inicio-sesion',
      name: 'inicio-sesion',
      component: () => import('../views/InioSesionVien.vue'),
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: () => import('../views/PaginPrincipalView.vue'),
    },
  ],
})

export default router
