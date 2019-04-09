<template>
  <v-container fluid>
    <v-card>
      <TituloVCard :titulo="tituloCard" :body="bodyCard"/>
      <v-responsive>
        <v-flex center>
          <v-img style="text-align:center; margin:auto" v-html="qrCode"/>
        </v-flex>
      </v-responsive>
    </v-card>
  </v-container>
</template>
<script>
import TituloVCard from "@/components/partials/titulo-v-card.vue";

export default {
  name: "QrCode",
  components: { TituloVCard },
  props: {
    qrCode: {
      type: String,
      required: true
    },
    tituloCard: {
      type: String,
      required: false,
      default: "Mi código QR"
    },
    bodyCard: {
      type: String,
      required: false,
      default: "Escanea este codigo a la entrada del parqueo"
    }
  }
};
</script>
