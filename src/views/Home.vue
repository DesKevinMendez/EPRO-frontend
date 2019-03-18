<template>
  <div>
    <Windows/>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 md6>
        <Grafica/>
      </v-flex>
      <v-flex xs12 md6>
        <QR/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Windows from "@/components/Home/Windows.vue";
import Grafica from "@/components/Home/Grafica.vue";
import QR from "@/components/QR/qr.vue";

@Component({
  name: "Home",
  components: { Windows, Grafica, QR }
})
class Home extends Vue {
  @Getter("authModule/USER") user: any;
}
export default Home;
</script>