<template>
  <div>
    <b-card class="notification-card" v-if="notification">
      <div class="d-flex justify-content-between flex-wrap-reverse">
        <h1 class="notification-card__title">{{ notification.title }}</h1>
        <div
          class="d-flex d-md-block justify-content-end notification-card__butotn"
        >
          <b-nav-item-dropdown right block offset="25" class="justify-self-end">
            <template #button-content>
              <i class="fa-solid fa-ellipsis" role="button"></i>
            </template>

            <b-dropdown-item
              @click="
                $emit('handle-delete', {
                  id: notification.id,
                  status: notification.status,
                })
              "
            >
              <i class="fa-solid fa-trash-can me-2 icon-danger"></i>Eliminar
            </b-dropdown-item>
            <b-dropdown-item
              @click="$emit('handle-check', notification.id)"
              v-if="notification.status == 0"
            >
              <i class="fa-solid fa-check me-2 icon-success"></i>Marcar como
              leído
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </div>
      <b-row class="mt-2">
        <b-col
          cols="12"
          md="10"
          class="d-flex flex-wrap justify-content-center justify-content-md-between pe-3 pe-md-0"
        >
          <div class="notification-card__image">
            <img src="@/assets/img-delete/notification.png" alt="" />
          </div>
          <div class="notification-card__description">
            {{ notification.description }}
          </div>
        </b-col>
        <b-col cols="12" md="2" class="text-end"> Hace 4 horas </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const notification!: any = ref({});
</script>

<style lang="scss">
.notification-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

  .notification-card__butotn {
    width: auto;
  }

  .notification-card__title {
    font-size: 1.1rem;
  }

  .notification-card__image {
    width: 65px;
    height: 65px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .notification-card__description {
    width: calc(100% - 80px);
  }
}

.dropdown-toggle {
  padding: 0px;
  background-color: transparent !important;
  color: rgb(126, 126, 126) !important;
  border: none !important;
  outline: none !important;

  &::after {
    display: none !important;
  }
}

.icon-danger {
  color: #ff5050;
}

.icon-success {
  color: rgb(64, 231, 114);
}

@media (max-width: 768px) {
  .notification-card {
    .notification-card__butotn {
      width: 100%;
      margin-bottom: 10px;
    }

    .notification-card__image {
      width: 65px;
      height: 65px;
    }

    .notification-card__description {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
}
</style>
