<template>
  <v-card-title>
    <v-card color="green" class="white--text" style="top: -35px; margin-bottom:-24px; margin:auto">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ titulo }}</div>
          <span>{{ body }}</span>
        </div>
      </v-card-title>
    </v-card>
  </v-card-title>
</template>
      <script>
export default {
  name: "TituloVcard",
  props: {
    titulo:{
      type: String,
      required:true
    },
    body:{
      type: String,
      required: true
    }
  }
};
</script>