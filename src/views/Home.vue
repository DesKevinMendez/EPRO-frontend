<template>
  <div>
    <Windows/>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 md6>
        <Grafica/>
      </v-flex>
      <v-flex xs12 md6>
        <Aranceles/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Windows from "@/components/Home/Windows.vue";
import Grafica from "@/components/Home/Grafica.vue";
import Aranceles from "@/components/Home/Aranceles.vue";
@Component({
  name: "Home",
  components: { Windows, Grafica, Aranceles }
})
export default class Home extends Vue {
  @Getter("authModule/USER") user: any;
}
</script>
