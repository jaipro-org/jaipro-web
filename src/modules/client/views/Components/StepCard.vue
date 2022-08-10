<template>
  <div>
    <b-card class="step-card">
      <div
        class="d-flex justify-content-between step-card__item"
        v-if="!isShow"
      >
        <h1 class="step-card__title">
          {{ title }}
        </h1>
        <i class="fa-solid fa-angle-down" @click="openCollapse"></i>
      </div>
      <div
        v-else
        class="step-card__item step-card__item--collapse"
        :class="{ active: isActive }"
      >
        <b-row class="mx-0">
          <b-col cols="12" class="d-block d-md-none text-end mb-3">
            <i class="fa-solid fa-angle-up" @click="closeCollapse"></i>
          </b-col>
          <b-col
            cols="12"
            md="10"
            class="d-flex flex-wrap justify-content-center justify-content-md-start px-0"
          >
            <h1 class="step-card__title">
              {{ title }}
            </h1>
          </b-col>
          <b-col cols="2" class="px-0 text-end d-none d-md-block">
            <i class="fa-solid fa-angle-up" @click="closeCollapse"></i>
          </b-col>
        </b-row>
        <div class="mt-3">
          <slot></slot>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script setup lang="ts">
const title = "Paso";

const isShow = true;
const isActive = true;

function openCollapse() {
  this.isShow = true;
  setTimeout(() => {
    this.isActive = true;
  }, 100);
}

function closeCollapse() {
  this.isActive = false;
  setTimeout(() => {
    this.isShow = false;
  }, 700);
}
</script>

<style lang="scss" scoped>
.step-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

  .step-card__item {
    i {
      cursor: pointer;
    }

    .step-card__title--collapse {
      font-size: 1.3rem;
      margin-bottom: 0;
      font-weight: 600;
    }

    .step-card__title {
      font-size: 1.7rem;
      margin-bottom: 0;
      font-weight: 600;
      color: #3a88ec !important;
    }
  }

  .step-card__item--collapse {
    min-height: 20px;
    max-height: 20px;
    overflow-y: hidden;
    transition: max-height 0.65s cubic-bezier(0.26, 0.11, 0.29, 1);

    & .active {
      max-height: 2000px;
    }
  }
}
</style>
