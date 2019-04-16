import { GetterTree, ActionTree, MutationTree } from "vuex";
import { State } from "@/store/types/Datos.ts";

import store from "@/store/index.ts";
// Establece los types de los modulos store
import DatosTypes from "@/store/types/DatosTypes.ts";
import RootTypes from "@/store/types/RootTypes.ts";

// Se encarga de hacer las peticiones asincronas con axios
import { http } from "@/utils/HTTP.ts";
// Importara para formatear fechas
import moment from "moment";
import AuthTypes from "@/store/types/AuthTypes.ts";

const namespaced: boolean = true;
const state: State = {
  qr: "",
  historial: [],
  aranceles: [],
  home: [],
  perfil: {},
  errors: [],
  usuarios: [],
  maestros: [],
  administradores: [],
  verificaExisteUsuario: false,
  datosDeUsuario: []
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
  },
  [DatosTypes.getters.GETUSUARIOS]: (state) => {
    return state.usuarios;
  },
  [DatosTypes.getters.GETMAESTROS]: (state) => {
    return state.maestros;
  },
  [DatosTypes.getters.GETADMINISTRADORES]: (state) => {
    return state.administradores;
  },
  [DatosTypes.getters.GETDATOSDEUSUARIO]: (state) => {
    return state.datosDeUsuario;
  }
};

const mutations: MutationTree<State> = {
  [DatosTypes.mutations.SETHOME]: (state, home) => {
    state.home = home;
  },
  [DatosTypes.mutations.SETARANCELES]: (state, aranceles) => {
    const formatoARanceles: { FechaPago: any; Hora: any; Mes: any; Valor: any }[] = [];
    aranceles.filter((key: any) => {
      formatoARanceles.push({
        FechaPago: moment(key.fecha_pago).format("LL"),
        Hora: moment(key.created_at).format("LT"),
        Mes: moment(key.created_at).format("MMMM"),
        Valor: key.pago
      });
    });
    state.aranceles = formatoARanceles;
  },
  [DatosTypes.mutations.SETHISTORIAL]: (state, historial) => {
    state.historial = historial;
  },
  [DatosTypes.mutations.SETDESTROYDATAUSER]: (state) => {
    state.datosDeUsuario = [];
  },
  [DatosTypes.mutations.DESTROYDATA]: (state) => {
    state.aranceles = [];
    state.errors = [];
    state.historial = [];
    state.home = [];
    state.perfil = [];
    state.usuarios = [];
    state.qr = null;
    state.verificaExisteUsuario = false;
  },
  [DatosTypes.mutations.SETQR]: (state, qr) => {
    state.qr = qr;
  },
  [DatosTypes.mutations.SETADMINISTRADORES]: (state, adminstrador) => {
    state.administradores = adminstrador;
  },
  [DatosTypes.mutations.SETMAESTROS]: (state, maestros) => {
    state.maestros = maestros;
  },
  [DatosTypes.mutations.SETPERFIL]: (state, user) => {
    state.perfil = user;
    window.localStorage.setItem("userLogeado", JSON.stringify(user));
  },
  [DatosTypes.mutations.SETERRORS]: (state, error) => {
    state.errors = error;
  },
  [DatosTypes.mutations.SETUSUARIOS]: (state, usuarios) => {
    state.usuarios = usuarios;
  },
  [DatosTypes.mutations.SETDATOSDEUSUARIO]: (state, usuario) => {
    state.datosDeUsuario = usuario;
  }
};

const actions: ActionTree<State, any> = {
  [DatosTypes.actions.DESTROYDATA]: ({ commit }) => {
    commit(DatosTypes.mutations.DESTROYDATA);
  },
  [DatosTypes.actions.HOME]: ({ commit, state }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);

    return new Promise((resolve, reject) => {
      http
        .get("home")
        .then((res) => {
          commit(DatosTypes.mutations.SETPERFIL, res.data.user);
          commit(DatosTypes.mutations.SETQR, res.data.user.qr);
          commit(DatosTypes.mutations.SETHOME, res.data.home);
          store.commit(`authModule/${AuthTypes.mutations.ROLES}`, res.data.role);
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
          commit(DatosTypes.mutations.SETARANCELES, res.data);
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
  [DatosTypes.actions.USUARIOS]: ({ commit }, state) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);

    return new Promise((resolve, reject) => {
      http
        .get("allStudents")
        .then((res) => {
          commit(DatosTypes.mutations.SETUSUARIOS, res.data);
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
  [DatosTypes.actions.PERFIL]: (state) => {
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
  },
  [DatosTypes.actions.MAESTROS]: ({ commit }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .get("maestros")
        .then((res) => {
          commit(DatosTypes.mutations.SETMAESTROS, res.data);
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
  [DatosTypes.actions.ADMINISTRADORES]: ({ commit }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .get("admin")
        .then((res) => {
          commit(DatosTypes.mutations.SETADMINISTRADORES, res.data);
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
  [DatosTypes.actions.DATOSDEUSUARIO]: ({ commit }, url) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .get(`usuario/${url}`)
        .then((res) => {
          commit(DatosTypes.mutations.SETDATOSDEUSUARIO, res.data);
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