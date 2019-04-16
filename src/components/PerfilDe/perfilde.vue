<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12 sm6 md6>
      <v-list twoLine subheader>
        <v-subheader>
          Perfil de usuario
        </v-subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Nombre
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ usuario.nombre }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Apellido
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ usuario.apellido }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Email
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ usuario.email }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider/>
    </v-flex>
    <v-flex xs12 sm6 md6>
      <v-subheader>
        Su QR
      </v-subheader>
      <v-responsive>
        <v-flex center>
          <v-img style="text-align:center; margin:auto" v-html="usuario.qr"/>
        </v-flex>
      </v-responsive>
    </v-flex>
    <v-divider/>


    <v-flex xs12 sm7 md8>
      <v-subheader>
        Su registro de entrada al campus
      </v-subheader>
      <v-data-table
        :headers="headers"
        :items="usuario.ingreso_parqueo"
        :pagination.sync="pagination"
        selectAll
        itemKey="name"
        class="elevation-1"
        style="margin-right: 10px;"
      >
        <template v-slot:headers="props">
          <tr>
            <th
              v-for="header in props.headers"
              :key="header.text"
              @click="changeSort(header.value)"
            >
              <v-icon small>
                arrow_upward
              </v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template v-slot:items="props">
          <tr>
            <td>{{ props.item.fecha_registro | HumanDate }}</td>
            <td class="text-xs-right">{{ props.item.hora_entrada | HumanHours }}</td>
            <td class="text-xs-right">{{ props.item.hora_salida | HumanHours }}</td>
            <td v-if="props.item.parqueo !== null" class="text-xs-right">
              {{ props.item.parqueo.edificio.edificio }}
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-flex>


    <v-flex xs12 sm5 md4>
      <v-subheader>
        Aranceles
      </v-subheader>
      <v-data-table
        :headers="headersAranceles"
        :items="usuario.aranceles"
        :pagination.sync="pagination"
        selectAll
        itemKey="name"
        class="elevation-1"
      >
        <template v-slot:headers="props">
          <tr>
            <th
              v-for="header in props.headers"
              :key="header.text"
              @click="changeSort(header.value)"
            >
              <v-icon small>
                arrow_upward
              </v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template v-slot:items="props">
          <tr>
            <td class="text-xs-right">{{ props.item.created_at | HumanDate }}</td>
            <td class="text-xs-right">${{ props.item.pago }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-flex>
    <v-divider/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import moment from "moment";

@Component({
  name: "PerfilUser",
  props: ["usuario"],
  filters: {
    HumanDate(value:any) {
      if (value) {
        return moment(String(value)).format("ll");
      }
    },
    HumanHours(value:any) {
      if (value) {
        return moment(String(value), ["HH:mm:ss"]).format("hh mm A");
      }
    }
  }
})
class PerfilDeUsuario extends Vue {
  data() {
    return {
      pagination: {
        sortBy: "name"
      },
      headers: [
        {
          text: "Fecha de entrada",
          align: "left",
          value: "name"
        },
        { text: "Hora entrada", value: "HE" },
        { text: "Hora salida", value: "HS" },
        { text: "Edificio", value: "ED" }
      ],
      headersAranceles: [
        {
          text: "Fecha de pago",
          align: "left",
          value: "name"
        },
        { text: "Total", value: "ED" }
      ]
    };
  }

  destroyed() {
    this.destroyDataUser();
  }

  @Mutation(`datosModule/SETDESTROYDATAUSER`) destroyDataUser: any;
}
export default PerfilDeUsuario;
</script>
