<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12>
      <Historial/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Historial from "@/components/Historial/Historial.vue";
@Component({
  name: "Aranceles",
  components: { Historial }
})
export default class HistorialUser extends Vue {}
</script>