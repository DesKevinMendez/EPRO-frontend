<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12>
      <v-layout row wrap class="mt-4">
        <v-flex xs12>
          <h1>Perfil de usuario</h1>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "PerfilUsuario",
  components: {
  }
})

class PerfilUser extends Vue {
  created() {
    this.datosUser(this.$route.params.user);
  }

  @Getter(`datosModule/${DatosTypes.getters.GETDATOSDEUSUARIO}`) GetdatosUser:any;
  @Action(`datosModule/${DatosTypes.actions.DATOSDEUSUARIO}`) datosUser:any;
}
export default PerfilUser;
</script>
