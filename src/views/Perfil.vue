<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12 md8>
      <EditarPerfil/>
    </v-flex>
    <v-flex xs12 md4>
      <MiPerfil/>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import MiPerfil from "@/components/perfil/MiPerfil.vue";
import EditarPerfil from "@/components/perfil/EditarPerfil.vue";
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "Perfil",
  components: { MiPerfil, EditarPerfil }
})
class Perfil extends Vue {
   data(){
    return {

    }
  }

  mounted(){
    this.perfil();
  }

  @Action(`datosModule/${DatosTypes.actions.PERFIL}`) perfil: any;
  @Getter(`datosModule/${DatosTypes.getters.GETPERFIL}`) getPerfil: any;
}
export default Perfil;
</script>