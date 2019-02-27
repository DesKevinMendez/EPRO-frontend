<template>
  <v-list two-line subheader dense>
    <v-subheader inset>Menú</v-subheader>
    <v-list-tile tag="div" v-for="item in nologged" :key="item.title" avatar>
      <router-link class="nav-link" :to="item.ruta">
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </router-link>
    </v-list-tile>
  </v-list>
</template>
<script>
export default {
  name: "MenuNoLogeado",
  data() {
    return {
      nologged: [
        {
          icon: "https",
          iconClass: "blue white--text",
          title: "Login",
          ruta: "/login"
        },
        {
          icon: "input",
          iconClass: "amber white--text",
          title: "Registrarse",
          ruta: "/registro"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.nav-link {
  text-decoration: none;
  display: flex;
  align-content: center;
  align-items: center;
  align-self: center;
}
</style>