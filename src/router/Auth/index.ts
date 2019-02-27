
export default {
    home: {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ './../../views/Home.vue'),
        meta: { Auth: true, title: 'Home' },
    },
    about: {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './../../views/About.vue'),
        meta: { Auth: true, title: 'Acerca de' },

    },

}