<template>
  <v-container fluid>
    <v-card>
      <v-card-title style="padding-bottom:0px">
        <v-avatar size="150" style="margin:auto; top:-40px ">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" aspect-ratio="2.75"></v-img>
        </v-avatar>
      </v-card-title>
      <v-card-text style="padding-top:-10px;">
        <div>
          <h3
            style="text-align: center;"
            class="headline mb-0"
          >{{ perfil.nombre }} {{ perfil.apellido }}</h3>
          <br>
          <div style="font-size: 18px !important">
            <strong>Carnet:</strong>
            {{ perfil.carnet }}
            <br>
            <strong>Email:</strong>
            {{ perfil.email }}
            <br>
            <strong>Fecha de registro:</strong>
            {{ perfil.created_at }}
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "MiPerfil",
  props: {
    perfil: {
      type: Array,
      required: true
    }
  },
};
</script>