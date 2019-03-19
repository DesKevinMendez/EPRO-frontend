<template>
  <div class="qr"><QRcode/></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QRcode from "@/components/QR/qr.vue";
import { Action, Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "QR",
  components: { QRcode }
})
class QR extends Vue {
   data(){
    return {

    }
  }

  mounted(){
    this.qrCode();
  }

  @Action(`datosModule/${DatosTypes.actions.QR}`) qrCode: any;

  @Getter(`datosModule/${DatosTypes.getters.GETQR}`) getQR: any;
}
export default QR;
</script>