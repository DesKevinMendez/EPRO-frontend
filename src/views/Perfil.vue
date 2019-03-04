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
@Component({
  name: "Perfil",
  components: { MiPerfil, EditarPerfil }
})
export default class Perfil extends Vue {}
</script>