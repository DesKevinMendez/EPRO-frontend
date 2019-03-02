<template>
  <v-app>
    <Nav/>
    <v-content>
      <v-container fluid >
      <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/partials/Footer.vue";
import Nav from "@/components/Nav.vue";
@Component({
  name: "App",
  components: { Nav, Footer }
})
export default class App extends Vue {
  data() {
    return {};
  }
}
</script>
