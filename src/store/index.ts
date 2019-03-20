import Vue from "vue";
import Vuex, { GetterTree, ActionTree, MutationTree } from "vuex";
import authModule from "@/store/modules/AuthModule.ts";
import datosModule from "@/store/modules/DatosModule.ts";
import { State } from "@/store/types/root.ts";
import RootTypes from "@/store/types/RootTypes.ts";
import AuthTypes from "@/store/types/AuthTypes.ts";

// Evita perder el state al momento de recargar la web
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});
Vue.use(Vuex);

const state: State = {
  procesando: false,
  sesion: ""
};

const mutations: MutationTree<State> = {
  [RootTypes.mutations.INICIOPROCESO]: (state) => {
    state.procesando = true;
  },
  [RootTypes.mutations.FINALIZARPROCESO]: (state) => {
    state.procesando = false;
  },
  [RootTypes.mutations.TIEMPOLOGEADO]: (state, tiempo) => {
    state.sesion = tiempo;
  }
};
const getters: GetterTree<State, any> = {
  [RootTypes.getters.proceso]: (state) => {
    return state.procesando;
  },
  [RootTypes.getters.VERIFICAR_TOKENS]: (state) => {
    return state.authModule.token;
  }
};
const actions: ActionTree<State, any> = {
  [RootTypes.actions.TIEMPOSESION]: ({ commit, dispatch }) => {
    setInterval(() => {
      const d = new Date();
      // Actualiza TiempoSesion cada vez que se ejecuta la funcion anonima
      window.sessionStorage.setItem(
        "TiempoSesion",
        `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
      );
      // Obtenemos la hora en que finalizara la sesion
      const HoraFinalizada: any = window.sessionStorage.getItem("HoraFinalizada");
      // Obtenemos la hora se la sesion
      const TiempoSesion: any = window.sessionStorage.getItem("TiempoSesion");

      const hora1 = HoraFinalizada.split(":");
      const hora2 = TiempoSesion.split(":");
      const t1 = new Date();
      const t2 = new Date();

      t1.setHours(hora1[0], hora1[1], hora1[2]);
      t2.setHours(hora2[0], hora2[1], hora2[2]);

      // Aquí hago la resta
      t1.setHours(
        t1.getHours() - t2.getHours(),
        t1.getMinutes() - t2.getMinutes(),
        t1.getSeconds() - t2.getSeconds()
      );

      // Actualizo el state del store/index
      commit(
        RootTypes.mutations.TIEMPOLOGEADO,
        `Tiempo de sesión restante: ${
          t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : ""
        }${
          t1.getMinutes()
            ? ` ${t1.getMinutes()}${t1.getMinutes() > 1 ? " minutos" : " minuto"}`
            : ""
        }${
          t1.getSeconds()
            ? (t1.getHours() || t1.getMinutes() ? " y " : "") +
              t1.getSeconds() +
              (t1.getSeconds() > 1 ? " segundos" : " segundo")
            : ""
        }`
      );

      // La condicion dice que cada vez que reste un minuto para finalizar
      // la sesion, se va hacer una peticion al servidor para que refescre la sesion actual
      if (t1.getMinutes() === 1) {
        dispatch(`authModule/${AuthTypes.actions.REFRESHTOKEN}`);
      }
      // Tiempo en milisegundo
    }, 60000);
  }
};
export default new Vuex.Store<State>({
  state,
  mutations,
  getters,
  actions,
  modules: {
    authModule,
    datosModule
  },
  plugins: [vuexLocal.plugin]
});
