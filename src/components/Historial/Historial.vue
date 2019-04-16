<template>
  <v-container fluid>
    <v-card>
      <TituloVCard :titulo="tituloCard" :body="bodyCard"/>
      <v-container>
        <v-timeline>
          <v-timeline-item
            v-for="n in historial"
            :key="n.id"
            color="red lighten-2"
            large
          >
            <template v-if="historial.length !== 0"
                      v-slot:opposite
            >
              <span>
                {{ n.fecha_registro }}
              </span>
            </template>
            <v-card class="elevation-2">
              <v-card-title
                v-if="n.parqueo!==null"
                class="headline"
              >
                Edificio: {{ n.parqueo.edificio.edificio }}
              </v-card-title>
              <v-card-text>
                Hora entrada: {{ n.hora_entrada }}
                <br>
                Hora salida: {{ n.hora_salida }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
import TituloVCard from "@/components/partials/titulo-v-card.vue";

export default {
  name: "Historial",
  components: { TituloVCard },
  props: {
    historial: {
      required: true,
      type: Array
    },
    tituloCard: {
      type: String,
      required: false,
      default: "Historial"
    },
    bodyCard: {
      type: String,
      required: false,
      default: "Estos han sido tus movimientos en nuestra plataforma"
    }
  },
  data() {
    return {};
  }
};
</script>