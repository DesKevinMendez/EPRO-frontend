<template>
  <v-layout row wrap>
    <v-flex v-for="i in 3" :key="i" xs12 sm6 md4>
      <v-hover>
        <v-card slot-scope="{ hover }" class="mx-auto mt-4" color="grey lighten-4" max-width="300">
          <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >ver</div>
            </v-expand-transition>
          </v-img>
          <v-card-text class="pt-4" style="position: relative; ">
            <v-btn absolute color="green" class="white--text" fab right top style="z-index:auto">
              <v-icon>visibility</v-icon>
            </v-btn>
            <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "windows",
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