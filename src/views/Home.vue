<template>
  <div>
    <Windows/>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 md6>
        <Grafica/>
      </v-flex>
      <v-flex xs12 md6>
        <QRcode :qrCode="getQR"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Windows from "@/components/Home/Windows.vue";
import Grafica from "@/components/Home/Grafica.vue";
import QRcode from "@/components/QR/qr.vue";
import { Action } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "Home",
  components: { Windows, Grafica, QRcode }
})
class Home extends Vue {
  data() {
    return {};
  }

  mounted() {
    this.home();
  }

  @Action(`datosModule/${DatosTypes.actions.HOME}`) home: any;

  @Getter(`datosModule/${DatosTypes.getters.GETHOME}`) getHome: any;
  @Getter(`datosModule/${DatosTypes.getters.GETQR}`) getQR: any;
  @Getter("authModule/USER") user: any;
}
export default Home;
</script>