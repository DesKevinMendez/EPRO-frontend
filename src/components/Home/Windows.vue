<template>
  <v-layout row wrap>
    <v-flex v-for="(i, index) in 3" :key="i" xs12 sm6 md4>
      <v-hover>
        <v-card slot-scope="{ hover }" class="mx-auto mt-4" color="grey lighten-4" max-width="300">
          <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
            <v-expand-transition>
              <div
                v-if="hover"
                style="height: 100%; text-aling:center"
                class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-1 white--text"
              >
                <div v-if="index===0">Fecha: {{ home[index].contenido.created_at }}</div>
                <div v-if="index===1">
                  Hora entrada: {{ home[index].contenido.hora_inicio }}
                  <br>
                  Hora salida: {{ home[index].contenido.hora_final }}
                </div>
                <div v-if="index===2">
                  Hora entrada: {{ home[index].contenido.hora_entrada }}
                  <br>
                  Hora salida: {{ home[index].contenido.hora_salida }}
                </div>
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text class="pt-4" style="position: relative; ">
            <v-btn absolute color="green" class="white--text" fab right top style="z-index:auto">
              <v-icon>visibility</v-icon>
            </v-btn>
            <div class="font-weight-light grey--text title mb-2">{{ home[i-1].titulo }}</div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "windows",
  props: {
    home: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    length: 3,
    onboarding: 0
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>