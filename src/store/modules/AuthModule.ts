import { GetterTree, ActionTree, MutationTree } from "vuex";
import { State } from "@/store/types/auth.ts";
import store from "@/store/index.ts";

// importamos la varible cookie para poder asignar cookies
import { crearCookie, eliminarCookie } from "@/utils/Cookies.ts";

// Establece los types de los modulos store
import AuthTypes from "@/store/types/AuthTypes.ts";
import RootTypes from "@/store/types/RootTypes.ts";
// Se encarga de hacer las peticiones asincronas con axios
import { http } from "@/utils/HTTP.ts";

// Instanciamos jwt para cifrar nuestro usuario
const jwtDecode = require("jwt-decode");

const namespaced: boolean = true;

const state: State = {
  token: !!window.localStorage.getItem("_token"),
  auth: [],
  error: []
};
const mutations: MutationTree<State> = {
  // establecemos el user a través del token jwt
  [AuthTypes.mutations.GETUSER]: (state) => {
    if (window.localStorage.getItem("_token")) {
      const token = window.localStorage.getItem("_token");

      // Asignamos el cifrado a nuestro user logeado
      state.auth = jwtDecode(token);
      state.token = true;
    }
  },
  [AuthTypes.mutations.NUEVOUSUARIO]: (state, user) => {
    state.auth = user;

    if (window.localStorage.getItem("_token")) {
      const token = window.localStorage.getItem("_token");

      // Asignamos el cifrado a nuestro user logeado
      state.auth = jwtDecode(token);
      state.token = true;
    }
  },
  // Destruye la sesion
  [AuthTypes.mutations.DESTROYSESSION]: (state) => {
    state.token = false;
    state.auth = [];
    state.error = [];

    window.localStorage.removeItem("_token");
    window.sessionStorage.removeItem("SesionStart");
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("HoraInicio");
    window.sessionStorage.removeItem("TiempoSesion");
    window.sessionStorage.removeItem("HoraFinalizada");
    eliminarCookie("SessionStart");
    eliminarCookie("HoraInicio");
  },
  // Establece localStore y SesionStore y cookies
  [AuthTypes.mutations.STORESESION]: (state, res) => {
    // Establece el token jwt como booleano en localStorage para que este de manera global
    window.localStorage.setItem("_token", res.data.access_token);
    // EStablece la sesion del usuario
    window.sessionStorage.setItem("user", JSON.stringify(res.data.user));
    const d = new Date();
    window.sessionStorage.setItem("SesionStart", d.toString());
    window.sessionStorage.setItem(
      "HoraInicio",
      `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    );
    window.sessionStorage.setItem("TiempoSesion", `00:00:00`);
    window.sessionStorage.setItem(
      "HoraFinalizada",
      `${d.getHours() + 1}:${d.getMinutes() - 5}:${d.getSeconds()}`
    );

    // Establece cookie de sesion
    crearCookie("SessionStart", d.toString(), 0.05 / 24);
    crearCookie("HoraInicio", `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`, 1);
  }
};
const getters: GetterTree<State, any> = {
  // Obtenemos datos del usiario logeado
  [AuthTypes.getters.USER]: (state) => {
    return state.auth;
  },
  // ¿Esta logeado el usuario?
  [AuthTypes.getters.LOGGED]: (state) => {
    return state.token;
  },
  // Obtenemos los errores del server
  [AuthTypes.getters.ERROR]: (state) => {
    return state.error;
  }
};

const actions: ActionTree<State, any> = {
  [AuthTypes.actions.LOGIN]: ({ commit }, user) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    // commit(store.action.INICIOPROCESO)
    return new Promise((resolve, reject) => {
      http
        .post(`auth/login`, {
          email: user.email,
          password: user.password
        })
        .then((res) => {
          // Estable los datos de sesion y localStore
          commit(AuthTypes.mutations.STORESESION, res);
          // ejecuta la mutation getUSer
          commit(AuthTypes.mutations.GETUSER);
          // MODE solucion temporal para redireccion de login
          window.location.reload();
          resolve(user);
        })
        .catch((error) => {
          state.error = error.response.data;
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    });
  },
  [AuthTypes.actions.REGISTRO]: ({ commit, state }, user) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);

    return new Promise((resolve, reject) => {
      http
        .post(`auth/register`, {
          nombre: user.nombre,
          apellido: user.apellido,
          carnet: user.carnet,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation
        })
        .then((res) => {
          // Estable los datos de sesion y localStore
          commit(AuthTypes.mutations.STORESESION, res);
          // ejecuta la mutation NUEVOUSUARIO
          commit(AuthTypes.mutations.NUEVOUSUARIO, user);
          // MODE solucion temporal para redireccion de login
          window.location.reload();

          resolve(user);
        })
        .catch((error) => {
          state.error = error.response.data;
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    });
  },
  [AuthTypes.actions.LOGOUT]: ({ commit }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .post(`auth/logout`)
        .then((res) => {
          commit(AuthTypes.mutations.GETUSER);
          commit(AuthTypes.mutations.DESTROYSESSION);
          resolve(res);
          window.location.reload();
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    }); // Para cuando se deslogee desde el servidor
  },

  [AuthTypes.actions.REFRESHTOKEN]: ({ commit }) => {
    store.commit(RootTypes.mutations.INICIOPROCESO);
    return new Promise((resolve, reject) => {
      http
        .post(`auth/refresh`)
        .then((res) => {
          // Estable los datos de sesion y localStore
          commit(AuthTypes.mutations.STORESESION, res);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          store.commit(RootTypes.mutations.FINALIZARPROCESO);
        });
    }); // Para cuando se deslogee desde el servidor
  }
};

export default {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
