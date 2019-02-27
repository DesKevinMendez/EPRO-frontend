<template>
  <nav>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Parqueo UTEC</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left v-if="logged">
        <v-btn slot="activator" dark icon>
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile>
            <v-list-tile-title style="text-align:center">Ver mi perfil</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title style="height:100%">
              <v-btn outline color="indigo" @click="cerrarSesion()">Cerrar sesión</v-btn>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </nav>
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
  border: 1px solid rgba(#000, 0.12);
}
</style>