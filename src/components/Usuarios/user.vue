<template>
  <v-container fluid>
    <v-card>
      <TituloVCard titulo="Usuarios" body="Usuarios registrados"/>
      <v-data-table
        v-if="usuarios.length!==0"
        :headers="headers"
        :items="usuarios"
        class="elevation-1"
      >
        <template v-slot:items="user">
          <td>{{ user.item.nombre }} {{ user.item.apellido }}</td>
          <td class="text-xs-center">{{ user.item.carnet }}</td>
          <td class="text-xs-center">{{ user.item.email }}</td>
          <td
            v-if="user.item.arancel!==null"
            class="text-xs-center"
          >{{ user.item.arancel.fecha_pago }}</td>
          <td
            v-if="user.item.ultimo_ingreso_parqueo!==null"
            class="text-xs-center"
          >{{ user.item.ultimo_ingreso_parqueo.fecha_registro }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import TituloVCard from "@/components/partials/titulo-v-card.vue";

export default {
  name: "User",
  components: { TituloVCard },
  props: {
    usuarios: {
      required: true
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Nombre",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Carnet", value: "calories" },
        { text: "Correo", value: "fat" },
        { text: "Último arancel", value: "carbs" },
        { text: "Último ingreso parq", value: "carbs" }
      ]
    };
  }
};
</script>