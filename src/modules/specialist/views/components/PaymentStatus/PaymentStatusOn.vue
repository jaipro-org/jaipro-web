<template>
  <div class="d-flex justify-content-center">
    <b-button variant="primary" @click="$emit('on-payment-init')">
      <i class="fa-solid fa-money-bill me-1"></i>
      Cobrar Servicio</b-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
