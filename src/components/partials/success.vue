<template>
  <v-alert :value="true" type="success">{{ success }}</v-alert>
</template>
<script>
export default {
  name: "Errores",
  props: ["success"]
};
</script>
