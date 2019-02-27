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
              name="name"
              :rules="nameRules"
              v-model="user.name"
              label="Nombre"
              required
            ></v-text-field>
            <span style="color: red;" v-if="errores.name">{{ errores.name[0] }}</span>
            <v-text-field
              name="email"
              v-model="user.email"
              :rules="emailRules"
              type="email"
              label="E-mail"
              required
            ></v-text-field>
            <span style="color: red;" v-if="errores.email">{{ errores.email[0] }}</span>
            <v-text-field
              type="password"
              name="name"
              :rules="passwrodRules"
              v-model="user.password"
              label="Password"
              required
            ></v-text-field>
            <span style="color: red;" v-if="errores.password">{{ errores.password[0] }}</span>
            <v-text-field
              :rules="passwrodRules"
              type="password"
              name="password_confirmation"
              v-model="user.password_confirmation"
              label="Confirmar contraseña"
              required
            ></v-text-field>
            <v-btn :disabled="proceso" color="success" @click="enviarDatos(user)">Registrarse</v-btn>
            <Procesando v-if="proceso"/>
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
@Component({
  name: "formulario-login",
  components: { Procesando }
})
export default class login extends Vue {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      passwrodRules: [
        (v: any) => !!v || "Password is required",
        (v: any) =>
          (v && v.length <= 6) || "Name must be less than 10 characters"
      ],
      emailRules: [
        (v: any) => !!v || "E-mail is required",
        (v: any) => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      nameRules: [(v: any) => !!v || "Name is required"]
    };
  }
  enviarDatos(user: object) {
    this.registro(user);
  }
  @Getter("proceso") proceso: any;
  @Getter("authModule/ERROR") errores: any;
  @Action("authModule/REGISTRO") registro: any;
}
</script>