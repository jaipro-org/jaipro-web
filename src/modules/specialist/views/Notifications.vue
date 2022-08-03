<template>
  <div class="notifications__container mb-2">
    <b-row class="mx-0 pt-4">
      <b-col cols="12" class="mb-3 mb-md-1">
        <h1 class="notifications__title">Nuevas</h1>
        <div class="notifications-list">
          <notification-card
            v-for="(notification, index) in newNotifications"
            :key="index"
            :notification="notification"
            @handle-delete="handleDeleteNotification"
            @handle-check="handleCheckNotification"
          />
        </div>
        <span
          class="d-block text-center notifications__subtitle"
          v-if="newNotifications.length <= 0"
          >No se encontraron nuevas notificaciones</span
        >
      </b-col>
      <b-col cols="12" class="mb-3 mb-md-1">
        <h1 class="notifications__title">Anteriores</h1>
        <div class="notifications-list">
          <notification-card
            v-for="(notification, index) in oldNotifications"
            :key="index"
            :notification="notification"
            @handle-delete="handleDeleteNotification"
          />
          <b-button
            variant="primary"
            @click="loadNotifications"
            class="w-100 mb-4 notifications-list__btn-loading"
          >
            <i
              class="fa-regular mr-2"
              :class="
                isLoadingNotifications ? 'fas fa-spinner fa-spin' : 'fa-plus'
              "
            ></i>
            {{ isLoadingNotifications ? "Cargando" : "Ver mas" }}
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import {
  alertLoading,
  alertSuccessfully,
  alertActionButton,
  closeAlert,
} from "@/utils/SweetAlert";
import NotificationCard from "@/modules/client/views/Components/NotificationCard.vue";

const isLoadingNotifications = false;
const newNotifications: any = [
  {
    id: 1,
    status: 0,
    title: "Notificacion #100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
  },
  {
    id: 2,
    status: 0,
    title: "Notificacion #101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
  },
];
const oldNotifications: any = [
  {
    id: 3,
    status: 1,
    title: "Notificacion #102",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
  },
  {
    id: 4,
    status: 1,
    title: "Notificacion #103",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
  },
  {
    id: 5,
    status: 1,
    title: "Notificacion #104",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
  },
];

// Eliminar una notificación
async function handleDeleteNotification(notification: any) {
  const alertResult = await alertActionButton(
    "Eliminar Notificación",
    "¿Seguro que desea eliminar la notificación?",
    "Rechazar",
    "error"
  );
  if (alertResult) {
    //Simulación de carga del Backend
    alertLoading();
    const timeOut = setTimeout(() => {
      let index = 0;
      if (notification.status == 0) {
        index = this.newNotifications.findIndex(
          (not: any) => not.id == notification.id
        );
        this.newNotifications.splice(index, 1);
      } else {
        index = this.oldNotifications.findIndex(
          (not: any) => not.id == notification.id
        );
        this.oldNotifications.splice(index, 1);
      }

      alertSuccessfully("Se elimino la notificación correctamente");
      const timeOut2 = setTimeout(function () {
        closeAlert();
        clearTimeout(timeOut2);
      }, 2500);
      clearTimeout(timeOut);
    }, 1500);
  }
}

// Marcar como leida una notificación
function handleCheckNotification(id: number) {
  alertLoading();
  const notification = this.newNotifications.find((not: any) => not.id == id);
  const index = this.newNotifications.findIndex((not: any) => not.id == id);
  notification.status = 1;
  const timeOut = setTimeout(() => {
    this.oldNotifications.unshift(notification);
    this.newNotifications.splice(index, 1);
    alertSuccessfully("Notificacion actualizada");
    const timeOut2 = setTimeout(() => {
      closeAlert();
      clearTimeout(timeOut2);
    }, 1500);
    clearTimeout(timeOut);
  }, 1500);
}

// Cargar mas notificación
function loadNotifications() {
  this.isLoadingNotifications = true;
  const notifications = {
    id: 6,
    status: 1,
    title: "Notificacion #105",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
  };

  const timeOut = setTimeout(() => {
    this.oldNotifications.push(notifications);
    this.oldNotifications.push(notifications);
    this.isLoadingNotifications = false;
    clearTimeout(timeOut);
  }, 2000);
}
</script>

<style lang="scss" scoped>
.notifications__container {
  .notifications__title {
    font-size: 1.5rem;
  }

  .notifications__subtitle {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .notifications-list {
    .notifications-list__btn-loading {
      font-size: 1rem;

      i {
        font-weight: 600;
      }
    }
  }
}
</style>
