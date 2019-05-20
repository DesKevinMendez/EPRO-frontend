<template>
  <v-container fluid>
    <v-card>
      <TituloVCard :titulo="tituloCard" :body="bodyCard"/>
      <v-data-table
        v-if="visitas.length!==0"
        :headers="headers"
        :items="visitas"
        class="elevation-1"
      >
        <template v-slot:items="invitado">
          <td class="text-xs-center">{{ invitado.item.nombre }}</td>
          <td class="text-xs-center">{{ invitado.item.apellido }}</td>
          <td class="text-xs-center">{{ invitado.item.email }}</td>
          <td>{{ invitado.item.fecha_registro }}</td>
        </template>
      </v-data-table>
      <div>
<div v-if="show">
          <v-btn small color="primary" @click="generarReporte">
            Generar Reporte
          </v-btn>
        </div>
        <div v-if="!show">
          <v-btn small color="primary" disabled>
            Generarando Reporte, espere...
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-container>
</template>
<script>
import TituloVCard from "@/components/partials/titulo-v-card.vue";
import { http } from "@/utils/HTTP.ts";


export default {
  name: "Visitas",
  components: { TituloVCard },
  props: {
    visitas: {
      type: Array,
      required: true
    },
    tituloCard: {
      type: String,
      required: false,
      default: "Invitados"
    },
    bodyCard: {
      type: String,
      required: false,
      default: "Registro histórico de invitados que han hecho uso del parqueo"
    }
  },
  data() {
    return {
      show: true,
      headers: [
        { text: "Nombre", value: "Nom" },
        { text: "Apellido", value: "Apell" },
        { text: "Correo", value: "Corr" },
        {
          text: "Fecha de invitacoión",
          align: "left",
          sortable: false,
          value: "name"
        }
      ]
    };
  },
  methods: {
    generarReporte() {
      this.$data.show = false;
      http.get("reporteInvitados", {
        responseType: "blob" // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "invitados.pdf");
        document.body.appendChild(link);
        link.click();
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.$data.show = true;
      });
    }
  }
};
</script>
