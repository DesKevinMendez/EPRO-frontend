import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

//Importar store para poder tener acceso al authModule para la proteccion de url
import store from '@/store';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { Auth: true, title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { Auth: true, title: 'Acerca de' },

    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),

      meta: { Auth: false, title: 'Iniciar sesión' },
      beforeEnter: (to, from, next) => {
        //Si existe un token, la sesion existe, por lo cual, redirecciona a home
        if (window.localStorage.getItem('_token')) {
          next({ path: '/' })
        } else {
          next();
        }
      }
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "registro" */ './views/Registro.vue'),

      meta: { Auth: false, title: 'Registrate en nuestra aplicación' },
      beforeEnter: (to, from, next) => {
        //Si existe un token, la sesion existe, por lo cual, redirecciona a home
        if (window.localStorage.getItem('_token')) {
          next({ path: '/' })
        } else {
          next();
        }
      }
    },
  ],
});

//console.log(store.state.authModule.token)

//para cada cambio de ruta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.Auth && !store.getters.VERIFICAR_TOKENS) {
    next({ path: '/login' });
  } else {
    if (store.getters.VERIFICAR_TOKENS) {
      //Mutacion que toma el token y decodifica 
      store.commit("authModule/GETUSER");
    }

    next();

  }
});
//.para cada cambio de ruta
export default router;