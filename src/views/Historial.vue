<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12>
      <Historial :historial="getHistorial"/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Historial from "@/components/Historial/Historial.vue";
import { Action, Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "Aranceles",
  components: { Historial }
})
class HistorialUser extends Vue {
  data() {
    return {};
  }

  mounted() {
    this.historial();
  }

  @Action(`datosModule/${DatosTypes.actions.HISTORIAL}`) historial: any;

  @Getter(`datosModule/${DatosTypes.getters.GETHISTORIAL}`) getHistorial: any;
}
export default HistorialUser;
</script>