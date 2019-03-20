<template>
  <v-container fluid>
    <v-card>
      <TituloVCard titulo="Mi código QR" body="Escanea este codigo a la entrada del parqueo"/>
      <v-responsive>
        <v-flex center>
          <v-img style="text-align:center" v-html="qrCode"></v-img>
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
    }
  },
  data() {
    return {};
  }
};
</script>