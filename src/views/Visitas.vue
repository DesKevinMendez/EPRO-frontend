<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs9>
      <Visita :visitas="infoInvitados"/>
    </v-flex>
    <v-flex xs3>
      <NuevoInvitado @datosInvitados="nuevoDatos"/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { http } from "@/utils/HTTP.ts";
import Visita from "@/components/Visitas/visita.vue";
import NuevoInvitado from "@/components/Visitas/InvitarNuevo.vue";

@Component({
  name: "VisitasRec",
  components: { Visita, NuevoInvitado }
})
class VistasRecibidas extends Vue {
  data() {
    return {
      datos: [],
      infoInvitados: []
    };
  }

  mounted() {
    this.getVisitas();
  }

  getVisitas() {
    http.get("invitados").then((res) => {
      this.$data.infoInvitados = res.data;
    });
  }

  nuevoDatos() {
    this.getVisitas();
  }
}
export default VistasRecibidas;
</script>
