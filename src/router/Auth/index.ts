
export default {
    home: {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ './../../views/Home.vue'),
        meta: { Auth: true, title: 'Home' },
    },
    historial: {
        path: '/historial',
        name: 'historial',
        component: () => import(/* webpackChunkName: "about" */ './../../views/Historial.vue'),
        meta: { Auth: true, title: 'Historia' },

    },
    perfil: {
        path: '/perfil',
        name: 'perfil',
        component: () => import(/* webpackChunkName: "about" */ './../../views/Perfil.vue'),
        meta: { Auth: true, title: 'Perfil' },

    },
    aranceles: {
        path: '/aranceles',
        name: 'aranceles',
        component: () => import(/* webpackChunkName: "about" */ './../../views/Aranceles.vue'),
        meta: { Auth: true, title: 'Pranceles' },
    },
    codigoqr: {
        path: '/codigoqr',
        name: 'codigoqr',
        component: () => import(/* webpackChunkName: "about" */ './../../views/QR.vue'),
        meta: { Auth: true, title: 'Codigo QR' },
    },

}