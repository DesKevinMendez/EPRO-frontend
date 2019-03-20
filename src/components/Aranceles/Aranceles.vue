<template>
  <v-container fluid>
    <v-card>
      <TituloVCard titulo="Aranceles" body="Registro histórico de tus pagos"/>
      <v-data-table
        v-if="aranceles.length!==0"
        :headers="headers"
        :items="aranceles"
        class="elevation-1"
      >
        <template v-slot:items="arance">
          <td>{{ arance.item.FechaPago }}</td>
          <td class="text-xs-center">{{ arance.item.Mes }}</td>
          <td class="text-xs-center">{{ arance.item.Hora }}</td>
          <td class="text-xs-center">${{ arance.item.Valor }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import TituloVCard from "@/components/partials/titulo-v-card.vue";

export default {
  name: "Aranceles",
  components: { TituloVCard },
  props: {
    aranceles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Fecha de pago",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Mes", value: "calories" },
        { text: "Hora", value: "fat" },
        { text: "Valor", value: "carbs" }
      ]
    };
  }
};
</script>