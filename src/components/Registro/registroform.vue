<template>
  <md-card md-with-hover>
    <md-ripple>
      <md-card-header>
        <div class="md-title">Registráte</div>
      </md-card-header>
      <md-card-content>
        <form v-on:submit.prevent="enviarDatos(user)">
          <div class="form-group">
            <md-field md-clearable>
              <label>Nombre</label>
              <md-input
                id="name"
                type="name"
                class="form-control"
                name="name"
                v-model="user.name"
                autofocus
                placeholder="Nombre"
              ></md-input>
            </md-field>
            <span style="color: red;" v-if="errores.name">{{ errores.name[0] }}</span>
          </div>
          <div class="form-group">
            <md-field md-clearable>
              <label>Email</label>
              <md-input
                id="email"
                type="email"
                class="form-control"
                name="email"
                v-model="user.email"
                autofocus
                placeholder="Correo electrónico"
              ></md-input>
            </md-field>

            <span style="color: red;" v-if="errores.email">{{ errores.email[0] }}</span>
          </div>

          <div class="form-group">
            <md-field md-clearable>
              <label>Password</label>
              <md-input
                id="password"
                type="password"
                class="form-control"
                name="password"
                v-model="user.password"
                placeholder="Contraseña"
              ></md-input>
            </md-field>

            <span style="color: red;" v-if="errores.password">{{ errores.password[0] }}</span>
          </div>
          <div class="form-group">
            <md-field md-clearable>
              <label>Confirmar Password</label>
              <md-input
                id="password"
                type="password"
                class="form-control"
                name="password_confirmation"
                v-model="user.password_confirmation"
                placeholder="Contraseña"
              ></md-input>
            </md-field>
          </div>
          <div class="form-group mb-0" v-if="proceso">
            <md-button class="md-raised" disabled>Registrarse</md-button>
            <Procesando/>
          </div>
          <div class="form-group mb-0" v-else>
            <md-button class="md-raised md-primary" type="submit">Registrarse</md-button>
          </div>
        </form>
      </md-card-content>
    </md-ripple>
  </md-card>
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