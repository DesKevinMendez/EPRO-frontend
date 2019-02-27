<template>
  <div class="text-center error">
    <span class="badge badge-danger">{{error}}</span>
  </div>
</template>
<script>
export default {
  name: "Errores",
  props: ["error"]
};
</script>
