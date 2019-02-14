<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" v-if="logged">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <button type="submit" class="btn btn-primary" @click="cerrarSesion">Cerrar sesion</button>
        </li>
      </ul>
      <ul class="navbar-nav" v-if="!logged">
        <li class="nav-item active">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/registro">Registrate</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
@Component({
  name: "Nav-bar"
})
export default class Navbar extends Vue {
  cerrarSesion() {
    this.logout();
    this.$router.push({ name: "login" });
  }
  //verifica que el usuario este logeado desde el modulo
  @Getter("authModule/LOGGED") logged: any;
  //Actions para cerrar sesion.
  @Action("authModule/LOGOUT") logout: any;
}
</script>