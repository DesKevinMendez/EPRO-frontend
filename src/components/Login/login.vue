<template>
  <md-card md-with-hover>
    <md-ripple>
      <md-card-header>
        <div class="md-title">Inicia sesión</div>
      </md-card-header>
      <md-card-content>
        <form v-on:submit.prevent="enviarDatos(user)" id="login">
          <md-field md-clearable>
            <label>Email</label>
            <md-input
              id="email"
              type="email"
              :class="'form-control'"
              name="email"
              v-model="user.email"
              autofocus
              placeholder="Correo electrónico"
              required
            ></md-input>
          </md-field>
          <md-field md-clearable>
            <label>Contraseña</label>
            <md-input
              id="password"
              type="password"
              class="form-control"
              name="password"
              v-model="user.password"
              placeholder="Contraseña"
              required
            ></md-input>
          </md-field>

          <div class="form-group mb-0" v-if="proceso">
            <md-button class="md-raised" disabled>Login</md-button>
            <Procesando/>
          </div>
          <div class="form-group mb-0" v-else>
            <md-button class="md-raised md-primary" type="submit">Login</md-button>
          </div>
          <Errores v-if="errores.error" :error="errores.error"/>
        </form>
      </md-card-content>
    </md-ripple>
  </md-card>
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