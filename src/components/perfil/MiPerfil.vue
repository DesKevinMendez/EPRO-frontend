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
          <h3 style="text-align: center;" class="headline mb-0">Kangaroo Valley Safari</h3>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt dolorem fugiat ab recusandae aut. Iure vitae laboriosam sed mollitia error, odio porro officia quaerat harum omnis, animi ullam perferendis?</div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TituloVCard from "@/components/partials/titulo-v-card.vue";
export default {
  name: "MiPerfil",
  components: { TituloVCard }
};
</script>