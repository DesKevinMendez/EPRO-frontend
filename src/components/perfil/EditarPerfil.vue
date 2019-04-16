<template>
  <v-container fluid>
    <v-card>
      <TituloVCard titulo="Editar perfil" body="Asegúrate de tener siempre tus datos actualizados"/>
      <div v-if="errorPass!==''">
        <Exitoso v-if="!errorPass.error" :success="errorPass.mensaje"/>
        <Error v-if="errorPass.error" :error="errorPass.mensaje"/>
      </div>
      <v-card-text>
        <v-form ref="form" lazy-validation autocomplete="off" v-model="valid">
          <v-text-field type="password" label="Password actual" v-model="password_actual"/>
          <span
            v-if="getErrores.password_actual"
            style="color:red;"
          >{{ getErrores.password_actual[0] }}</span>

          <v-text-field
            type="password"
            browserAutocomplete
            name="cambiarpassword"
            label="Password"
            v-model="password_nuevo"
          />
          <span v-if="getErrores.password" style="color:red;">
            {{ getErrores.password[0] }}
          </span>
          <v-text-field
            type="password"
            label="Confirmar contraseña"
            v-model="password_confirmation"
          />
          <v-btn v-if="proceso" :disabled="valid" color="success" @click="validate">
            Espere...
          </v-btn>
          <v-btn v-if="!proceso" :disabled="!valid" color="success" @click="validate">
            Actualizar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TituloVCard from "@/components/partials/titulo-v-card.vue";
import Error from "@/components/partials/errores.vue";
import Exitoso from "@/components/partials/success.vue";
import Procesando from "@/components/partials/proceso.vue";
import { Action, Getter } from "vuex-class";

@Component({
  name: "EditarPerfil",
  components: {
    TituloVCard, Error, Exitoso, Procesando
  },
  props: {
    perfil: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      valid: true,
      password_actual: "",
      password_nuevo: "",
      password_confirmation: ""
    };
  }
})
class EditarPerfil extends Vue {
  $refs!: {
    form: HTMLFormElement
  }

  validate() {
    if (this.$refs.form.validate()) {
      this.refreshPass({
        password_actual: this.$data.password_actual,
        password_nuevo: this.$data.password_nuevo,
        password_confirmation: this.$data.password_confirmation
      });

      this.$data.password_actual = "";
      this.$data.password_nuevo = "";
      this.$data.password_confirmation = "";
    }
  }

  reset() {
    this.$refs.form.reset();
  }

  resetValidation() {
    this.$refs.form.resetValidation();
  }

  @Action("authModule/REFRESHPASS") refreshPass: any;

  @Getter("authModule/MENSAJESUCCESS") errorPass: any;

  @Getter("authModule/ERROR") getErrores: any;

  @Getter("proceso") proceso: any;
}
export default EditarPerfil;
</script>
