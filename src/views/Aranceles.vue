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
import { Action, Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "Aranceles",
  components: { Arancele },
})
class Aranceles extends Vue {
  data(){
    return {

    }
  }

  mounted(){
    this.aranceles();
  }

  @Action(`datosModule/${DatosTypes.actions.ARANCELES}`) aranceles: any;

  @Getter(`datosModule/${DatosTypes.getters.GETARANCELES}`) gerAranceles: any;

}
export default Aranceles;
</script>