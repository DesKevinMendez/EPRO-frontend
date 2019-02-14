<template>
  <div class="home">Usuario Logeado</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
@Component({
  name: "Home"
})
export default class Home extends Vue {
  @Getter("authModule/USER") user: any;
}
</script>
