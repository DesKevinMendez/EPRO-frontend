<template>
  <div>
 <md-list v-if="logged">
    <md-list-item>
    <md-icon>move_to_inbox</md-icon>
    <span class="md-list-item-text">
        <router-link class="nav-link" to="/">Home</router-link>
    </span>
    </md-list-item>

    <md-list-item>
    <md-icon>send</md-icon>
    <span class="md-list-item-text">
        <router-link class="nav-link" to="/about">About</router-link>
    </span>
    </md-list-item>

    <md-list-item>
    <md-icon>send</md-icon>
    <span class="md-list-item-text">
        <button type="submit" class="btn btn-primary" @click="cerrarSesion">Cerrar sesion</button>
    </span>
    </md-list-item>

</md-list>
 <md-list v-else>
    <md-list-item>
    <md-icon>move_to_inbox</md-icon>
    <span class="md-list-item-text">
        <router-link class="nav-link" to="/login">Login</router-link>
    </span>
    </md-list-item>

    <md-list-item>
    <md-icon>send</md-icon>
    <span class="md-list-item-text">
        <router-link class="nav-link" to="/registro">Registrate</router-link>
    </span>
    </md-list-item>

</md-list>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
@Component({
  name: "Nav"
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

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>