<template>
  <v-list twoLine subheader dense>
    <v-subheader inset>
      Menú
    </v-subheader>
    <v-list-tile v-for="item in admin" :key="item.title" tag="div" avatar>
      <router-link class="nav-link" :to="item.ruta">
        <v-list-tile-avatar>
          <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </router-link>
    </v-list-tile>
  </v-list>
</template>
<script>
export default {
  name: "MenuAdmin",
  data() {
    return {
      admin: [
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
        },
        {
          iconClass: "lime white--text",
          title: "Visitas",
          icon: "how_to_reg",
          ruta: "/visitas"
        },
        {
          iconClass: "lime white--text",
          title: "Usuarios",
          icon: "supervisor_account",
          ruta: "/usuarios"
        }
      ]
    };
  }
};
</script>
