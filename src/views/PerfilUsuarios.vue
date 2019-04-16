<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12>
      <v-card>
        <v-card-title style="padding-bottom:0px">
          <v-avatar size="150" style="margin:auto; top:-40px ">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" aspectRatio="2.75"/>
          </v-avatar>
        </v-card-title>
        <v-card-text style="padding-top:-10px;">
          <PerfilDe :usuario="GetdatosUser"/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import PerfilDe from "@/components/PerfilDe/perfilde.vue";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "PerfilUsuario",
  components: {
    PerfilDe
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