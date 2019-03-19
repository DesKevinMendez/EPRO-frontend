import { GetterTree, ActionTree, MutationTree } from "vuex";
import { State } from "@/store/types/Datos.ts";
import DatosTypes from "@/store/types/DatosTypes.ts";
const namespaced: boolean = true;
const state: State = {
  qr: "",
  historial: [],
  aranceles: [],
  home: [],
  perfil:[]
};

const getters: GetterTree<State, any> = {
  [DatosTypes.getters.GETHOME]:(state)=>{
    return "";
  },
  [DatosTypes.getters.GETARANCELES]:(state)=>{
    return "";
  },
  [DatosTypes.getters.GETHISTORIAL]:(state)=>{
    return "";
  },
  [DatosTypes.getters.GETQR]:(state)=>{
    return "";
  },
  [DatosTypes.getters.GETPERFIL]:(state)=>{
    return "";
  },
};

const mutations: MutationTree<State> = {
  [DatosTypes.mutations.SETHOME]:(state)=>{
    return "";
  },
  [DatosTypes.mutations.SETARANCELES]:(state)=>{
    return "";
  },
  [DatosTypes.mutations.SETHISTORIAL]:(state)=>{
    return "";
  },
  [DatosTypes.mutations.SETQR]:(state)=>{
    return "";
  },
  [DatosTypes.mutations.SETPERFIL]:(state)=>{
    return "";
  },
};


const actions: ActionTree<State, any> = {
  [DatosTypes.actions.HOME]:({commit}, state)=>{

    console.log("Se ha montado el componente home");
    return "";
  },
  [DatosTypes.actions.ARANCELES]:({commit}, state)=>{

    console.log("Se ha montado el componente Aranceles");
    return "";
  },
  [DatosTypes.actions.HISTORIAL]:({commit}, state)=>{

    console.log("Se ha montado el componente Historial");
    return "";
  },
  [DatosTypes.actions.QR]:(state)=>{

    console.log("Se ha montado el componente QR");
    return "";
  },
  [DatosTypes.actions.PERFIL]:(state)=>{

    console.log("Se ha montado el componente Perfil");
    return "";
  },
};

export default {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
