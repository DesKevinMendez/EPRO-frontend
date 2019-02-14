<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
@Component({
  name: "App",
  components: { Navbar }
})
export default class App extends Vue {}
</script>
<style lang="scss">
</style>
