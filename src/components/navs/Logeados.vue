<template>
  <v-list two-line subheader dense>
    <v-subheader inset>Menú</v-subheader>
    <v-list-tile tag="div" v-for="item in logeados" :key="item.title" avatar>
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
  name: "MenuLogeado",
  data() {
    return {
      logeados: [
        {
          iconClass: "indigo white--text",
          title: "Home",
          icon: "home",
          ruta: "/"
        },
        {
          iconClass: "green white--text",
          title: "Historial",
          icon: "history",
          ruta: "/historial"
        },
        {
          iconClass: "light-green white--text",
          title: "Mi QR",
          icon: "line_style",
          ruta: "/codigoqr"
        },
        {
          iconClass: "lime white--text",
          title: "Aranceles",
          icon: "attach_money",
          ruta: "/aranceles"
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
