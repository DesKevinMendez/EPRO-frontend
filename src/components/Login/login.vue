<template>
  <form v-on:submit.prevent="enviarDatos(user)">
    <div class="form-group">
      <input
        id="email"
        type="email"
        :class="'form-control'"
        name="email"
        v-model="user.email"
        autofocus
        placeholder="Correo electrónico"
        required
      >
    </div>

    <div class="form-group">
      <input
        id="password"
        type="password"
        class="form-control"
        name="password"
        v-model="user.password"
        placeholder="Contraseña"
        required
      >
    </div>
    <div class="form-group mb-0" v-if="proceso">
      <input type="submit" class="btn btn-primary" value="Inicia sesión" disabled>
      <Procesando/>
    </div>
    <div class="form-group mb-0" v-else>
      <input type="submit" class="btn btn-primary" value="Inicia sesión">
    </div>
    <Errores v-if="errores.error" :error="errores.error"/>
  </form>
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
      }
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