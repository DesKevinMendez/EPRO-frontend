<template>
  <div class="qr"><QRcode/></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QRcode from "@/components/QR/qr.vue";

@Component({
  name: "QR",
  components: { QRcode }
})
class QR extends Vue {}
export default QR;
</script>