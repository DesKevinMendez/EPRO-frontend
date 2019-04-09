<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12 md8>
      <EditarPerfil :perfil="getPerfil"/>
    </v-flex>
    <v-flex xs12 md4>
      <MiPerfil :perfil="getPerfil"/>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import MiPerfil from "@/components/perfil/MiPerfil.vue";
import EditarPerfil from "@/components/perfil/EditarPerfil.vue";
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "Perfil",
  components: { MiPerfil, EditarPerfil }
})
class Perfil extends Vue {
  data() {
    return {};
  }

  @Getter(`datosModule/${DatosTypes.getters.GETPERFIL}`) getPerfil: any;
}
export default Perfil;
</script>
