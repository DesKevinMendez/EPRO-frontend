<template>
  <v-app>
    <Nav/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from '@/components/Nav.vue';
@Component({
  name: "App",
  components: { Nav }
})
export default class App extends Vue {
  data() {
    return {};
  }
};
</script>
