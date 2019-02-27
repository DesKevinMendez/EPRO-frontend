<template>
  <div class="login container">
    <div class="md-layout md-gutter">
      <FormLogin/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormLogin from "@/components/Login/login.vue";
@Component({
  name: "LoginView",
  components: { FormLogin }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
}
</style>