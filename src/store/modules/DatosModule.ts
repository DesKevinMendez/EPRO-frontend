import { GetterTree, ActionTree, MutationTree } from "vuex";
import { State } from "@/store/types/Datos.ts";

const namespaced: boolean = true;
const state: State = {
  qr: ""
};

const mutations: MutationTree<State> = {};

const getters: GetterTree<State, any> = {};

const actions: ActionTree<State, any> = {};

export default {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
