<template>
  <div class="bank-acount">
    <h5>
      <b> {{ bankName }}</b>
    </h5>
    <div class="bank-acount__container">
      <div class="text-center">Cuenta corriente - soles</div>
      <div class="bank-acount__data mt-2">
        <img src="@/assets/img/bcp-logo.png" alt="" class="bank-acount__img" />
        <div>
          <div><b>N°:</b> 1912170107071</div>
          <div><b>Titular:</b> DASEGUR SAC</div>
          <div><b>CCI:</b> 00219100217010707152</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    bankName: {
      type: String,
      default: "bcp",
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.bank-acount {
  &__container {
    border: 2px solid rgb(145, 145, 145);
    padding: 10px 15px;
    border-radius: 3px;
  }

  &__data {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  &__img {
    width: 100%;
    max-width: 120px;
    object-fit: contain;
    // object-fit: scale-down;
  }
}

@media (max-width: 675px) {
  .bank-acount {
    &__data {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
