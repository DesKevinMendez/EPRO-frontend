<template>
  <v-container fluid>
    <v-card>
      <TituloVCard :titulo="tituloCard" :body="bodyCard" style="
        padding-bottom: 0px;
        margin-bottom: 0px;"
      />
      <v-container fluid>
        <v-form
          ref="form"
          lazy-validation
          v-model="valid"
        >
          <v-text-field
            :rules="nameRules"
            label="Nombre"
            required
            v-model="data.nombre"
          />
          <v-text-field
            :rules="nameRules"
            label="Apellido"
            required
            v-model="data.apellido"
          />

          <v-text-field
            :rules="emailRules"
            label="E-mail"
            required
            v-model="data.email"
          />
          <v-btn
            v-if="show"
            color="info"
            @click="validate"
          >
            Autorizar permiso
          </v-btn>
          <v-btn
            v-if="!show"
            color="info"
            disabled
            @click="validate"
          >
            Espere...
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
import { http } from "@/utils/HTTP.ts";
import TituloVCard from "@/components/partials/titulo-v-card.vue";

export default {
  name: "InvitarNuevo",
  components: { TituloVCard },
  props: {
    tituloCard: {
      type: String,
      required: false,
      default: "Nuevo"
    },
    bodyCard: {
      type: String,
      required: false,
      default: "Llena la siguiente información para un nuevo invitado"
    }
  },
  data() {
    return {
      valid: true,
      show: true,
      data: {
        nombre: "",
        apellido: "",
        email: "",
        fecha_registro: ""
      },
      nameRules: [
        (v) => { return !!v || "Este campo es requerido"; }
      ],
      emailRules: [
        (v) => { return !!v || "E-mail es requerido"; },
        (v) => { return /.+@.+/.test(v) || "E-mail debe de ser válido"; }
      ],
      infoNuevoInvitado: []
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$data.show = false;
        const fecha = new Date();
        const ano = fecha.getFullYear();
        const mes = fecha.getMonth();
        const dia = fecha.getDay();

        this.$data.data.fecha_registro = `${ano}-${mes}-${dia}`;

        http.post("nuevoInvitado", this.$data.data).then((res) => {
          if (res.status === 200) {
            this.$emit("datosInvitados");
            this.$data.data.nombre = "";
            this.$data.data.apellido = "";
            this.$data.data.email = "";
            this.$data.data.fecha_registro = "";
          }
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          this.$data.show = true;
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
