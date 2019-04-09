export default {
  home: {
    path: "/",
    name: "home",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/Home.vue");
    },
    meta: { Auth: true, title: "Home" }
  },
  historial: {
    path: "/historial",
    name: "historial",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/Historial.vue");
    },
    meta: { Auth: true, title: "Historia" }
  },
  perfil: {
    path: "/perfil",
    name: "perfil",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/Perfil.vue");
    },
    meta: { Auth: true, title: "Perfil" }
  },
  perfilde: {
    path: "/perfil/:user",
    name: "perfilUsuario",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/PerfilUsuarios.vue");
    },
    meta: { Auth: true, title: "Perfil de usuario" }
  },
  aranceles: {
    path: "/aranceles",
    name: "aranceles",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/Aranceles.vue");
    },
    meta: { Auth: true, title: "Aranceles" }
  },
  usuarios: {
    path: "/usuarios",
    name: "usuarios",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/Usuarios.vue");
    },
    meta: { Auth: true, title: "Usuarios" }
  },
  codigoqr: {
    path: "/codigoqr",
    name: "codigoqr",
    component: () => {
      return import(/* webpackChunkName: "about" */ "@/views/QR.vue");
    },
    meta: { Auth: true, title: "Codigo QR" }
  }
};
