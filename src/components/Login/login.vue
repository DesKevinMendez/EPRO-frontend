<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Inicia sesión</div>
        </div>
      </v-card-title>

      <v-slide-y-transition>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              name="email"
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              name="password"
              v-model="user.password"
              :rules="passwrodRules"
              type="password"
              label="E-mail"
              required
            ></v-text-field>

            <v-btn :disabled="proceso" color="success" @click="enviarDatos(user)">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Procesando from "@/components/partials/proceso.vue";
import Errores from "@/components/partials/errores.vue";
@Component({
  name: "formulario-login",
  components: { Procesando, Errores }
})
export default class login extends Vue {
  data() {
    return {
      user: {
        email: "",
        password: "",
        error: null
      },
      valid: true,
      passwrodRules: [
        v => !!v || "Password is required",
        v => (v && v.length <= 6) || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  }
  enviarDatos(user: object) {
    this.iniciarSesion(user);
  }
  @Getter("proceso") proceso: any;
  @Getter("authModule/ERROR") errores: any;
  @Action("authModule/LOGIN") iniciarSesion: any;
}
</script>