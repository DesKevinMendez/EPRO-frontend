<template>
  <v-container fluid>
    <v-card>
      <TituloVCard titulo="Usuarios" body="Usuarios registrados"/>
      <v-layout row wrap alignCenter style="padding: 20px;">
        <v-flex xs4>
          <v-subheader>
            Seleccione tipo de usuario
          </v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-select
            :hint="`${select.state}, ${select.abbr}`"
            :items="items"
            itemText="state"
            itemValue="abbr"
            label="Select"
            persistentHint
            returnObject
            singleLine
            @change="seleccionado(`${select.state}`)"
            v-model="select"
          />
        </v-flex>
      </v-layout>
      <Estudiantes v-if="estudiantes" :estudiantes="users"/>
      <Maestros v-if="maestros" :maestros="users"/>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

import TituloVCard from "@/components/partials/titulo-v-card.vue";
import Estudiantes from "@/components/Usuarios/estudiantes.vue";
import Maestros from "@/components/Usuarios/maestros.vue";

@Component({
  name: "User",
  components: { TituloVCard, Estudiantes, Maestros },
  props: {
    usuarios: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      maestros: false,
      estudiantes: true,
      users: this.$props.usuarios,
      select: { state: "Estudiantes", abbr: "ES" },
      items: [
        { state: "Estudiantes", abbr: "ES" },
        { state: "Maestros", abbr: "MA" },
        { state: "Administradores", abbr: "AD" }
      ]
    };
  }
})

class datosUser extends Vue {
  // eslint-disable-next-line class-methods-use-this
  seleccionado(selected: string) {
    if (selected === "Estudiantes") {
      this.$data.users = this.$props.usuarios;
      this.$data.maestros = false;
      this.$data.estudiantes = true;
    } else if (selected === "Maestros") {
      if (this.getmaestro.length === 0) {
        this.maestro();
      } else {
        this.$data.users = this.getmaestro;
      }
      this.$data.maestros = true;
      this.$data.estudiantes = false;
    } else if (selected === "Administradores") {
      if (this.getAdmin.length === 0) {
        this.admin();
      } else {
        this.$data.users = this.getAdmin;
      }
      this.$data.maestros = true;
      this.$data.estudiantes = false;
    }
  }

  @Action(`datosModule/${DatosTypes.actions.ADMINISTRADORES}`) admin:any;
  @Action(`datosModule/${DatosTypes.actions.MAESTROS}`) maestro:any;

  @Getter(`datosModule/${DatosTypes.getters.GETMAESTROS}`) getmaestro: any;
  @Getter(`datosModule/${DatosTypes.getters.GETADMINISTRADORES}`) getAdmin: any;
}

export default datosUser;
</script>
