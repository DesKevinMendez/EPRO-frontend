import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { State } from '@/store/types/auth';
import axios from 'axios';
import store from '@/store';

//Header que se enviara cada vez que se necesite el token
axios.defaults.headers.common['Authorization'] = "Bearer" + window.localStorage.getItem('_token');
//Constante URL

const URL: string = 'http://127.0.0.1:8000/api/auth/'

const namespaced: boolean = true;

const state: State = {
    token: !!window.localStorage.getItem('_token'),
    auth: [],
    error: []
}
const mutations: MutationTree<State> = {
    //establecemos el user a través del token jwt
    ['GETUSER']: (state) => {
        if (window.localStorage.getItem('_token')) {

            const token = window.localStorage.getItem('_token');
            //Instanciamos jwt para cifrar nuestro usuario
            const jwtDecode = require('jwt-decode');
            //Asignamos el cifrado a nuestro user logeado
            state.auth = jwtDecode(token);
            state.token = true;

        }
    },
    ['NUEVOUSUARIO']: (state, user) => {
        state.auth = user;
        if (window.localStorage.getItem('_token')) {

            const token = window.localStorage.getItem('_token');
            //Instanciamos jwt para cifrar nuestro usuario
            const jwtDecode = require('jwt-decode');
            //Asignamos el cifrado a nuestro user logeado
            state.auth = jwtDecode(token);
            state.token = true;

        }
    },
    ['DESTROYSESSION']: (state) => {
        state.token = false;
        state.auth = [];
        state.error = [];
    }

}
const getters: GetterTree<State, any> = {
    //Obtenemos datos del usiario logeado
    ['USER']: state => state.auth,

    //¿Esta logeado el usuario?
    ['LOGGED']: state => state.token,

    //Obtenemos los errores del server
    ['ERROR']: state => state.error,
}

const actions: ActionTree<State, any> = {
    ['LOGIN']: ({ commit }, user) => {
        store.commit('INICIOPROCESO')
        //commit(store.action.INICIOPROCESO)
        return new Promise((resolve, reject) => {

            axios.post(URL + 'login',
                {
                    email: user.email,
                    password: user.password
                }).then(res => {
                    //Establece el token jwt como booleano en localStorage para que este de manera global
                    window.localStorage.setItem('_token', res.data.access_token);

                    //ejecuta la mutation getUSer
                    commit('GETUSER');
                    resolve(user);
                    //MODE solucion temporal para redireccion de login
                    location.reload();

                }).catch(error => {
                    state.error = error.response.data;
                    reject(error)
                }).finally(() => {
                    store.commit('FINALIZARPROCESO')
                })
        })
    },
    ['REGISTRO']: ({ commit, state }, user) => {
        store.commit('INICIOPROCESO')

        return new Promise((resolve, reject) => {

            axios.post(URL + 'register',
                {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                }).then(res => {
                    window.localStorage.setItem('_token', res.data.access_token);

                    //ejecuta la mutation NUEVOUSUARIO
                    commit('NUEVOUSUARIO', user);
                    resolve(user);


                    location.reload();

                }).catch(error => {
                    state.error = error.response.data;
                    reject(error)
                }).finally(() => {
                    store.commit('FINALIZARPROCESO')
                })
        })
    },
    ['LOGOUT']: ({ commit }) => {
        store.commit('INICIOPROCESO')
        return new Promise((resolve, reject) => {

            axios.post(URL + 'logout'
            ).then(res => {
                window.localStorage.removeItem('_token');
                commit('DESTROYSESSION');
                resolve(res);
                location.reload();
            }).catch(error => {
                reject(error)
            }).finally(() => {
                store.commit('FINALIZARPROCESO')
            })
        }) //Para cuando se deslogee desde el servidor
    }


};


export default {
    namespaced,
    state,
    mutations,
    getters,
    actions
}
