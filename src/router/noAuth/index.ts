export default {
  login: {
    path: "/login",
    name: "login",
    component: () => {
      return import(/* webpackChunkName: "login" */ "./../../views/Login.vue");
    },

    meta: { Auth: false, title: "Iniciar sesión" },
    beforeEnter: (to: any, from: any, next: any) => {
      // Si existe un token, la sesion existe, por lo cual, redirecciona a home
      if (window.localStorage.getItem("_token")) {
        next({ path: "/" });
      } else {
        next();
      }
    }
  },
  registro: {
    path: "/registro",
    name: "registro",
    component: () => {
      return import(/* webpackChunkName: "registro" */ "./../../views/Registro.vue");
    },

    meta: { Auth: false, title: "Registrate en nuestra aplicación" },
    beforeEnter: (to: any, from: any, next: any) => {
      // Si existe un token, la sesion existe, por lo cual, redirecciona a home
      if (window.localStorage.getItem("_token")) {
        next({ path: "/" });
      } else {
        next();
      }
    }
  }
};