<template>
  <form v-on:submit.prevent="enviarDatos(user)">
    <div class="form-group">
      <input
        id="name"
        type="name"
        class="form-control"
        name="name"
        v-model="user.name"
        autofocus
        placeholder="Nombre"
      >
      <span style="color: red;" v-if="errores.name">{{ errores.name[0] }}</span>
    </div>
    <div class="form-group">
      <input
        id="email"
        type="email"
        class="form-control"
        name="email"
        v-model="user.email"
        autofocus
        placeholder="Correo electrónico"
      >
      <span style="color: red;" v-if="errores.email">{{ errores.email[0] }}</span>
    </div>

    <div class="form-group">
      <input
        id="password"
        type="password"
        class="form-control"
        name="password"
        v-model="user.password"
        placeholder="Contraseña"
      >
      <span style="color: red;" v-if="errores.password">{{ errores.password[0] }}</span>
    </div>
    <div class="form-group">
      <input
        id="password"
        type="password"
        class="form-control"
        name="password_confirmation"
        v-model="user.password_confirmation"
        placeholder="Contraseña"
      >
    </div>
    <div class="form-group mb-0" v-if="proceso">
      <input type="submit" class="btn btn-primary" value="Registrarse" disabled>
      <Procesando/>
    </div>
    <div class="form-group mb-0" v-else>
      <input type="submit" class="btn btn-primary" value="Registrarse">
    </div>
  </form>
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
      }
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