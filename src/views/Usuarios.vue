<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12>
      <Usuarios :usuarios="getuser"/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";
import Usuarios from "@/components/Usuarios/user.vue";

@Component({
  name: "Usuario",
  components: { Usuarios }
})
class UserInfo extends Vue {
  data() {
    return {};
  }

  mounted() {
      if (this.getuser.length === 0) {
    this.usuario();
      }
  }

  @Action(`datosModule/${DatosTypes.actions.USUARIOS}`) usuario: any;

  @Getter(`datosModule/${DatosTypes.getters.GETUSUARIOS}`) getuser: any;
}
export default UserInfo;
</script>