<template>
  <b-card class="project-card" v-if="project">
    <div class="d-flex justify-content-between flex-wrap-reverse">
      <h1 class="project-card__title">
        Profesión: <span class="project-card__work">{{ project.professionName }} </span>
      </h1>
      <div
        class="d-flex d-md-block justify-content-end project-card__status-icon"
        v-if="project.status == 3"
      >
        <i
          class="fa-solid fa-circle-check icon-success"
          v-b-tooltip.hover
          title="Trabajo finalizado"
        ></i>
      </div>
    </div>
    <p>
      {{ project.detail }}
    </p>
    <span class="project-card__date">Fecha: 21 de Enero del 2021</span>
    <div
      class="d-flex justify-content-between align-items-center mt-3"
      v-if="project.status != 3"
    >
      <div>
        <span class="project-card__status" v-if="project.status == 0"
          >Propuestas: 2</span
        >
        <span class="project-card__status" v-if="project.status == 1"
          >Propuesta aceptada</span
        >
        <span class="project-card__status" v-if="project.status == 2"
          >Pendiente de pago</span
        >
      </div>
      <b-button variant="primary" @click="handleRedirectView"
        >Ver Detalle</b-button
      >
    </div>
    <div v-else class="d-flex justify-content-end mt-3">
      <div class="d-flex align-items-center">
        <i
          class="fa-solid fa-star me-3 project-card__icon-star"
          :class="{ active: project.isQualified }"
          v-b-tooltip.hover
          :title="
            project.isQualified
              ? 'Calificación realizada'
              : 'Calificar al profesional'
          "
          @click="
            !project.isQualified
              ? $emit('calification-modal', project.id)
              : null
          "
          role="button"
        ></i>
        <b-button variant="primary" @click="handleRedirectView"
          >Ver Detalle</b-button
        >
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  project: any;
}>();

const router = useRouter();
const { project } = toRefs(props);

function handleRedirectView() {
  if (project.value.status == 2) {
    router.push({ name: "home" });
  } else {
    router.push({
      name: "project-detail",
      params: { projectId: props.project!.id },
    });
  }
}
</script>

<style lang="scss">
.project-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

  .project-card__butotn {
    width: auto;
  }

  .project-card__title {
    font-size: 1.1rem;

    .project-card__work {
      color: #3a88ec;
    }
  }

  .project-card__status-icon {
    font-size: 1.2rem;
  }

  .project-card__date {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgb(155, 155, 155);
  }

  .project-card__status {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .project-card__icon-star {
    font-size: 1.3rem;
    color: rgb(165, 165, 165);

    &:hover {
      color: rgb(255, 196, 0);
    }

    &.active {
      color: rgb(255, 196, 0);
    }
  }
}

.icon-success {
  color: rgb(64, 231, 114);
}

@media (max-width: 768px) {
  .project-card {
    .project-card__status-icon {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
