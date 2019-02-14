import Vue from 'vue';
import Vuex, { GetterTree, ActionTree, MutationTree } from 'vuex';
import authModule from './modules/AuthModule'
import { State } from '@/store/types/root'
Vue.use(Vuex);

const state: State = {
    procesando: false
}

const mutations: MutationTree<State> = {
    ['INICIOPROCESO']: (state) => {
        state.procesando = true;
    },
    ['FINALIZARPROCESO']: (state) => {
        state.procesando = false;
    },


}
const getters: GetterTree<State, any> = {
    ['proceso']: state => state.procesando,
    ['VERIFICAR_TOKENS']: state => state.authModule.token,
}
const actions: ActionTree<State, any> = {

}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        authModule
    }
});
