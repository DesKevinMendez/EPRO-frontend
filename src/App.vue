<template>
  <v-app>
    <Nav/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <Footers/>
  </v-app>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footers from "@/components/partials/Footer.vue";
import Nav from "@/components/Nav.vue";
import { Action, Getter } from "vuex-class";

@Component({
  name: "App",
  components: { Nav, Footers }
})
class App extends Vue {
  @Getter("VERIFICAR_TOKENS") token: any;

  @Action("TIEMPOSESION") tiempSesion: any;

  mounted() {
    // Si existe la sesion user, ejecuta la actions que se encarga de medir el tiempo de sesion
    if (!!window.sessionStorage.getItem("user") && this.token) {
      this.tiempSesion();
    }
  }
}
export default App;
</script>
<style lang="scss">
body {
  background: #eeeeee;
}
</style>