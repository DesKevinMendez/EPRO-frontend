<template>
  <v-data-table
    v-if="maestros.length!==0"
    :headers="headersMaestros"
    :items="maestros"
    class="elevation-1"
  >
    <template v-slot:items="user">
      <router-link :to="`perfil/${user.item.url}`">
        <td>{{ user.item.nombre }} {{ user.item.apellido }}</td>
      </router-link>
      <td class="text-xs-center">{{ user.item.email }}</td>
      <td
        v-if="user.item.arancel!==null"
        class="text-xs-center"
      >
        {{ user.item.arancel.fecha_pago }}
      </td>
      <td
        v-if="user.item.ultimo_ingreso_parqueo!==null"
        class="text-xs-center"
      >
        {{ user.item.ultimo_ingreso_parqueo.fecha_registro }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Maestros",
  props: {
    maestros: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headersMaestros: [
        {
          text: "Nombre",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Correo", value: "fat" },
        { text: "Último arancel", value: "carbs" },
        { text: "Último ingreso parq", value: "carbs" }
      ]
    };
  }
};
</script>
