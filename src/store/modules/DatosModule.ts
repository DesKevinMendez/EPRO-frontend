import { GetterTree, ActionTree, MutationTree } from "vuex";
import { State } from "@/store/types/Datos.ts";

import store from "@/store/index.ts";
// Establece los types de los modulos store
import DatosTypes from "@/store/types/DatosTypes.ts";
import RootTypes from "@/store/types/RootTypes.ts";

// Se encarga de hacer las peticiones asincronas con axios
import { http } from "@/utils/HTTP.ts";

const namespaced: boolean = true;
const state: State = {
  qr: "",
  historial: [],
  aranceles: [],
  home: [],
  perfil: [],
  errors: [],
  verificaExisteUsuario: false
};

const getters: GetterTree<State, any> = {
  [DatosTypes.getters.GETHOME]: (state) => {
    return state.home;
  },
  [DatosTypes.getters.GETARANCELES]: (state) => {
    return state.aranceles;
  },
  [DatosTypes.getters.GETHISTORIAL]: (state) => {
    return state.historial;
  },
  [DatosTypes.getters.GETQR]: (state) => {
    return state.qr;
  },
  [DatosTypes.getters.GETPERFIL]: (state) => {
    return state.perfil;
  },
  [DatosTypes.getters.GETERRORS]: (state) => {
    return state.errors;
  }
};

const mutations: MutationTree<State> = {
  [DatosTypes.mutations.SETHOME]: (state) => {
    return "";
  },
  [DatosTypes.mutations.SETARANCELES]: (state) => {
    return "";
  },
  [DatosTypes.mutations.SETHISTORIAL]: (state, historial) => {
    state.historial = historial;
  },
  [DatosTypes.mutations.SETQR]: (state, qr) => {
    state.qr = qr;
  },
  [DatosTypes.mutations.SETPERFIL]: (state, user) => {
    state.perfil = user;
    window.localStorage.setItem("userLogeado", JSON.stringify(user));
  },
  [DatosTypes.mutations.SETERRORS]: (state, error) => {
    state.errors = error;
  }
};

const actions: ActionTree<State, any> = {
  [DatosTypes.actions.HOME]: ({ commit, state }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);

    return new Promise((resolve, reject) => {
      http
        .get("home")
        .then((res) => {
          commit(DatosTypes.mutations.SETPERFIL, res.data);
          commit(DatosTypes.mutations.SETQR, res.data.qr);
          resolve(res);
        })
        .catch((error) => {
          commit(DatosTypes.mutations.SETERRORS, error);
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    });
  },
  [DatosTypes.actions.ARANCELES]: ({ commit, state }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .get("aranceles")
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    });
  },
  [DatosTypes.actions.HISTORIAL]: ({ commit, state }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .get("historialIngresoParqueo")
        .then((res) => {
          commit(DatosTypes.mutations.SETHISTORIAL, res.data);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    });
  },
  /*[DatosTypes.actions.QR]: ({ commit }, state) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    if (!state.verificaExisteUsuario) {
      return new Promise((resolve, reject) => {
        http
          .get("qr")
          .then((res) => {
            commit(DatosTypes.mutations.SETPERFIL, res);
            resolve(res);
          })
          .catch((error) => {
            commit(DatosTypes.mutations.SETERRORS, error);
            reject(error);
          })
          .finally(() => {
            store.commit(RootTypes.mutations.FINALIZARPROCESO);
          });
      });
    }
  },*/
  [DatosTypes.actions.PERFIL]: (state) => {
    console.log("Se ha montado el componente Perfil");
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .get("qr")
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    });
  }
};

export default {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
