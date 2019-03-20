<template>
  <div class="qr"><QRcode :qrCode="getQR"/></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QRcode from "@/components/QR/qr.vue";
import { Getter } from "vuex-class";
import DatosTypes from "@/store/types/DatosTypes.ts";

@Component({
  name: "QR",
  components: { QRcode }
})
class QR extends Vue {
  @Getter(`datosModule/${DatosTypes.getters.GETQR}`) getQR: any;
}
export default QR;
</script>