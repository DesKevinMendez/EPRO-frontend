<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">Control parqueo</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-dense" md-elevation="0">Navigation</md-toolbar>

        <Nav/>
      </md-app-drawer>

      <md-app-content class="body">
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Nav from "@/components/Nav.vue";
@Component({
  name: "App",
  components: { Navbar, Nav },
  data: () => ({
    menuVisible: false
  })
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  height: 100vh;
}
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>