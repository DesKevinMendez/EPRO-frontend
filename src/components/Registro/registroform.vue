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
              name="nombre"
              :rules="generalRules"
              required
              label="Nombre"
              v-model="user.nombre"
            />
            <span v-if="errores.nombre" style="color: red;">{{ errores.nombre[0] }}</span>
            <v-text-field
              name="apellido"
              :rules="generalRules"
              required
              label="Apellido"
              v-model="user.apellido"
            />
            <span v-if="errores.apellido" style="color: red;">{{ errores.apellido[0] }}</span>
            <v-text-field
              name="carnet"
              :rules="generalRules"
              label="Carnet"
              required
              v-model="user.carnet"
            />
            <span v-if="errores.carnet" style="color: red;">{{ errores.carnet[0] }}</span>
            <v-text-field
              name="email"
              :rules="emailRules"
              type="email"
              label="E-mail"
              required
              v-model="user.email"
            />
            <span v-if="errores.email" style="color: red;">{{ errores.email[0] }}</span>
            <v-text-field
              type="password"
              name="name"
              :rules="passwrodRules"
              label="Password"
              required
              v-model="user.password"
            />
            <span v-if="errores.password" style="color: red;">{{ errores.password[0] }}</span>
            <v-text-field
              :rules="passwrodRules"
              type="password"
              name="password_confirmation"
              label="Confirmar contraseña"
              required
              v-model="user.password_confirmation"
            />
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
import AuthTypes from "@/store/types/AuthTypes.ts";

@Component({
  name: "formularioLogin",
  components: { Procesando }
})
class login extends Vue {
  data() {
    return {
      user: {
        nombre: "Kevin Ezequiel",
        apellido: "Mendez Orellana",
        carnet: "25-3992-2015",
        email: "",
        password: "",
        password_confirmation: "000000"
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

      generalRules: [(v: any) => !!v || "This input is required"]
    };
  }

  enviarDatos(user: Object) {
    this.registro(user);
  }

  @Getter("proceso") proceso: any;
  @Getter("authModule/ERROR") errores: any;
  @Action(`authModule/${AuthTypes.actions.REGISTRO}`) registro: any;
}
export default login;
</script>