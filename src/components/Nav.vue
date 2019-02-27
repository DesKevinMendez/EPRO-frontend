<template>
  <nav>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

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

    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
      style="margin-top: 4.5rem;"
      v-if="drawer"
      app="true"
      floating="true"
    >
      <v-toolbar flat class="transparent" v-if="logged">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Kevin Mendez</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense v-if="logged">
        <v-divider></v-divider>
        <v-list-tile v-for="item in logeados" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link class="nav-link" :to="item.ruta">{{item.title}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense v-if="!logged">
        <v-divider></v-divider>
        <v-list-tile v-for="item in nologged" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link class="nav-link" :to="item.ruta">{{item.title}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
@Component({
  name: "Nav"
})
export default class Navbar extends Vue {
  data() {
    return {
      drawer: false,
      logeados: [
        { title: "Home", icon: "dashboard", ruta: "/" },
        { title: "About", icon: "question_answer", ruta: "/about" }
      ],
      nologged: [
        { title: "Login", icon: "dashboard", ruta: "/login" },
        { title: "Registrate", icon: "question_answer", ruta: "/registro" }
      ]
    };
  }
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