<template>
  <div class="login container">
    <div class="row justify-content-center">
      <div class="card">
        <div class="card-header">Registrate</div>
        <div class="card-body">
          <RegistroForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegistroForm from "@/components/Registro/registroform.vue";
@Component({
  components: { RegistroForm }
})
export default class Registro extends Vue {}
</script>
