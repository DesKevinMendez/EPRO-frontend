<template>
  <div class="registro container">
    <div class="md-layout md-gutter">
      <RegistroForm/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegistroForm from "@/components/Registro/registroform.vue";

@Component({
  name: "Registro",
  components: { RegistroForm }
})
class Registro extends Vue {}
export default Registro;
</script>

<style lang="scss">
.registro {
  display: flex;
  justify-content: center;
}
</style>