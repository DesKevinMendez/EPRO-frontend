<template>
  <v-card-title>
    <v-card color="green" class="white--text" style="top: -35px; margin-bottom:-24px">
      <v-card-title primary-title>
        <div>
          <div class="headline">Unlimited music now</div>
          <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
        </div>
      </v-card-title>
    </v-card>
  </v-card-title>
</template>
      <script>
export default {
  name: "TituloVcard",
  props: ["titulo", "subtitulo"]
};
</script>