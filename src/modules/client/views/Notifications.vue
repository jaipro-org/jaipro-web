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
          <b-button
            variant="primary"
            @click="loadNotifications"
            class="w-100 mb-4 notifications-list__btn-loading"
            v-if="newNotifications.length > 5"
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
            v-if="oldNotifications.length > 5"
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

<script setup lang="ts">
import {
  Notification,
  NotificationBack,
} from "@/interfaces/Notification.interface";
import { GeneralServices } from "@/services/api/generalServices";
import {
  alertLoading,
  alertSuccessfully,
  alertActionButton,
  alertError,
  closeAlert,
} from "@/utils/SweetAlert";
import NotificationCard from "@/modules/client/views/Components/NotificationCard.vue";
import { ref, onMounted } from "vue";
import { encryptAuthStorage } from "@/utils/Storage";

const authData: string = window.localStorage.getItem("@AUTH:security") || "";

const generalServices = new GeneralServices();

const idCustomer = ref();
const isLoadingNotifications = ref(false);
const newNotifications = ref<Notification[]>([]);
const oldNotifications = ref<Notification[]>([]);

onMounted(async () => {
  if (Boolean(authData)) {
    let data = encryptAuthStorage.decryptValue(authData);
    idCustomer.value = data.id;
  }
  await cargarNotificaciones();
});

//#region Cargar Notificaciones
async function cargarNotificaciones() {
  const payload = {
    profileType: 1,
    id: idCustomer.value,
  };

  const data = await generalServices.getNotification(
    payload.profileType,
    payload.id
  );

  let formatNotificationCurrent = data.map((value: NotificationBack) => {
    return {
      id: value.id,
      status: value.read ? 1 : 0,
      title: value.title,
      description: value.message,
      lastUpdate: value.modifiedDate,
      deleted: value.deleted,
      read: value.read
    };
  });

  formatNotificationCurrent = formatNotificationCurrent.filter(
    (data: Notification) => data.deleted === false
  );

  newNotifications.value = formatNotificationCurrent.filter(
    (data: Notification) => data.status === 0
  );
  oldNotifications.value = formatNotificationCurrent.filter(
    (data: Notification) => data.status === 1
  );
}
//#endregion Cargar Notificaciones

//#region Eliminar una notificación
async function handleDeleteNotification(id: string) {
  const alertResult = await alertActionButton(
    "Eliminar Notificación",
    "¿Seguro que desea eliminar la notificación?",
    "Si, Eliminar",
    "error"
  );
  if (alertResult) {
    try {
      alertLoading();
      const payload = {
        id: id,
        deleted: true,
      };
      await generalServices.putNotification(payload);
      await cargarNotificaciones();
      alertSuccessfully("Se elimino la notificación correctamente");
      
    } catch (error) {
      alertError("Sucedio algo inesperado");
    }
  }
}
//#endregion Eliminar una notificación

//#region Marcar como leida una notificación
async function handleCheckNotification(id: string) {
  try {
    alertLoading();
    const payload = {
      id: id,
      read: true,
    };
    await generalServices.putNotification(payload);
    await cargarNotificaciones();
    closeAlert();
  } catch (error) {
    alertError("Sucedio algo inesperado");
  }
}
//#endregion Marcar como leida una notificación

// Cargar mas notificación
function loadNotifications() {
  isLoadingNotifications.value = true;
  const notifications = {
    id: 6,
    status: 1,
    title: "Notificacion #105",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis sequi dolorem assumenda saa sd epe amet perspiciatis. Cupiditate incidunt dolorum pariatur, quisquam obcaecati ratione odio eveniet ",
    deleted: false,
  };

  const timeOut = setTimeout(() => {
    oldNotifications.value.push(notifications);
    oldNotifications.value.push(notifications);
    isLoadingNotifications.value = false;
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
@media (max-width: 991px) {
  .notifications__container {
    .notifications__title {
      font-size: 1.2rem;
    }
  }
}
</style>
