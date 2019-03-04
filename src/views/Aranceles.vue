<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12>
      <Arancele/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Arancele from "@/components/Aranceles/Aranceles.vue";
@Component({
  name: "Aranceles",
  components: { Arancele }
})
export default class Aranceles extends Vue {}
</script>