<template>
  <v-alert :value="true" type="error">{{error}}</v-alert>
</template>
<script>
export default {
  name: "Errores",
  props: ["error"]
};
</script>
