<template>
  <div class="notifications__container mb-2">
    <div class="row mx-0 pt-4">
      <div cols="12" class="col-12 mb-3 mb-md-1">
        <h1 class="notifications__title mb-3">Recientes</h1>
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
      </div>
      <div cols="12" class="col-12 mb-3 mb-md-1">
        <h1 class="notifications__title mb-3">Leídos</h1>
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
              class="fa-regular me-2"
              :class="
                isLoadingNotifications ? 'fas fa-spinner fa-spin' : 'fa-plus'
              "
            ></i>
            {{ isLoadingNotifications ? "Cargando" : "Ver mas" }}
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  alertLoading,
  alertSuccessfully,
  alertActionButton,
  closeAlert,
} from "@/utils/SweetAlert";
import NotificationCardComponent from "@/modules/client/views/Components/NotificationCard.vue";
import { defineComponent, ref } from "vue";
import Notification from "@/interfaces/Notification.interface";

export default defineComponent({
  name: "NotificationComponent",
  setup() {
    const isLoadingNotifications = ref(false);
    const newNotifications = ref<Notification[]>([
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
    ]);
    const oldNotifications = ref<Notification[]>([
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
    ]);

    // Eliminar una notificación
    const handleDeleteNotification = async (notification: any) => {
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
            index = newNotifications.value.findIndex(
              (not: any) => not.id == notification.id
            );
            newNotifications.value.splice(index, 1);
          } else {
            index = oldNotifications.value.findIndex(
              (not: any) => not.id == notification.id
            );
            oldNotifications.value.splice(index, 1);
          }

          alertSuccessfully("Se elimino la notificación correctamente");
          const timeOut2 = setTimeout(function () {
            closeAlert();
            clearTimeout(timeOut2);
          }, 2500);
          clearTimeout(timeOut);
        }, 1500);
      }
    };

    // Marcar como leida una notificación
    const handleCheckNotification = (id: number) => {
      alertLoading();
      const notification: any = newNotifications.value.find(
        (not: any) => not.id == id
      );
      const index = newNotifications.value.findIndex(
        (not: any) => not.id == id
      );
      notification!.status = 1;
      const timeOut = setTimeout(() => {
        oldNotifications.value.unshift(notification);
        newNotifications.value.splice(index, 1);
        alertSuccessfully("Notificacion actualizada");
        const timeOut2 = setTimeout(() => {
          closeAlert();
          clearTimeout(timeOut2);
        }, 1500);
        clearTimeout(timeOut);
      }, 1500);
    };

    // Cargar mas notificación
    const loadNotifications = () => {
      isLoadingNotifications.value = true;
      const notifications: Notification = {
        id: 6,
        status: 1,
        title: "Notificacion #105",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
      };

      const timeOut = setTimeout(() => {
        oldNotifications.value.push(notifications);
        oldNotifications.value.push(notifications);
        isLoadingNotifications.value = false;
        clearTimeout(timeOut);
      }, 2000);
    };

    return {
      isLoadingNotifications,
      newNotifications,
      oldNotifications,
      handleDeleteNotification,
      handleCheckNotification,
      loadNotifications,
    };
  },
});
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