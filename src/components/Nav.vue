<template>
  <nav>
    <v-toolbar dark :app="true" fixed color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>

      <v-toolbar-title class="white--text">
        Parqueo UTEC
      </v-toolbar-title>
      <v-spacer/>
      <v-menu v-if="logged" bottom left>
        <v-btn slot="activator" dark icon>
          <v-icon>
            more_vert
          </v-icon>
        </v-btn>
        <v-list style="margin-top: 4rem;" transition="scale-transition">
          <v-list-tile>
            <v-list-tile-title style="text-align:center">
              <router-link class="nav-link" to="perfil">
                <v-icon>account_circle</v-icon>Ver mi perfil
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title style="height:100%">
              <v-btn outline color="indigo" @click="cerrarSesion()">
                <v-icon>
                  exit_to_app
                </v-icon>Cerrar sesión
              </v-btn>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-navigation-drawer
      v-if="drawer"
      transition="slide-x-transition"
      permanent
      fixed
      :app="true"
      light
      v-model="drawer"
    >
      <v-toolbar v-if="logged" flat class="transparent" transition="slide-x-transition">
        <v-list class="pa-0" color="primary">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title
                v-if="getPerfil.lenght!==0"
              >
                {{ getPerfil.nombre }} {{ getPerfil.apellido }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <Logeados v-if="logged && role.role==='Estudiante'"/>
      <AdminNav v-if="role.role==='Admin'"/>

      <NoLogeados v-if="!logged"/>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Logeados from "@/components/navs/Logeados.vue";
import AdminNav from "@/components/navs/Administrador.vue";
import NoLogeados from "@/components/navs/NoLogeados.vue";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "Nav",
  components: { Logeados, NoLogeados, AdminNav }
})
class Navbar extends Vue {
  data() {
    return {
      drawer: false
    };
  }

  cerrarSesion() {
    this.logout();
    this.destruirData();
  }

  // verifica que el usuario este logeado desde el modulo
  @Getter("authModule/LOGGED") logged: any;

  @Getter("authModule/ROLE") role: any;

  @Getter(`datosModule/${DatosTypes.getters.GETPERFIL}`) getPerfil: any;
  // Actions para cerrar sesion.
  @Action("authModule/LOGOUT") logout: any;
  // Accion que actualiza el estado de datosModule
  @Action("datosModule/DESTROYDATA") destruirData: any;
}
export default Navbar;
</script>

<style lang="scss">
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
.v-list__tile {
  .nav-link {
    text-decoration: none;
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
  }
  &:hover {
    background: #e3f2fd !important;
  }
}
</style>
