export default {
  mutations: {
    GETUSER: "GETUSER",
    NUEVOUSUARIO: "NUEVOUSUARIO",
    DESTROYSESSION: "DESTROYSESSION",
    STORESESION: "STORESESION",
    ROLES: "ROLES"
  },
  getters: {
    USER: "USER",
    LOGGED: "LOGGED",
    ERROR: "ERROR",
    ROLE: "ROLE"
  },
  actions: {
    LOGIN: "LOGIN",
    REGISTRO: "REGISTRO",
    LOGOUT: "LOGOUT",
    REFRESHTOKEN: "REFRESHTOKEN"
  }
};
