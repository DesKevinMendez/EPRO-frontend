<template>
  <div class="login container">
    <div class="row justify-content-center">
      <div class="card">
        <div class="card-header">Inicia sesión</div>
        <div class="card-body">
          <FormLogin/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormLogin from "@/components/Login/login.vue";
@Component({
  components: { FormLogin }
})
export default class Home extends Vue {}
</script>
