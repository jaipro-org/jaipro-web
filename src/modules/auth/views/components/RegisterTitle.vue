<template>
  <div class="register-user-title-section">
    <h2 class="register-user-title">{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Titulo de Registro",
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.register-user-title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
}

.register-user-title {
  font-family: Montserrat;
  font-weight: 800;
  font-size: 45px;
  line-height: 1;
  color: #303669;
  margin-bottom: 0;
}
</style>
