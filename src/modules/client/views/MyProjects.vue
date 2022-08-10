<template>
  <div class="row projects__container mx-0 pt-0 pt-lg-2 pb-2 mt-0">
    <div cols="12" lg="3" class="profile__menu col-12 col-lg-3">
      <div class="menu__container py-3 px-4 bg-white d-block d-lg-none">
        <div>
          <div class="mb-2">
            <i class="fa-solid fa-house-circle-check me-2"></i
            ><span>Mis Proyectos</span
            ><i class="fa-solid fa-angle-down ms-2"></i>
          </div>
          <b-collapse visible id="collapse-3" class="ps-4 py-2">
            <span
              class="d-block mb-2 menu__subitem"
              :class="{ active: isCurrentTab }"
              @click="isCurrentTab = true"
              >Vigentes (2)</span
            >
            <span
              class="d-block menu__subitem"
              :class="{ active: !isCurrentTab }"
              @click="isCurrentTab = false"
              >Pasados (3)</span
            >
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart me-2"></i><span>Favoritos</span></div>
      </div>
      <div
        id="menu__container--web"
        :class="menuChange ? 'menu__container--web' : ''"
        class="menu__container py-3 px-4 bg-white d-none d-lg-block"
      >
        <div>
          <div class="mb-2">
            <i class="fa-solid fa-house-circle-check me-2"></i
            ><span>Mis Proyectos</span
            ><i class="fa-solid fa-angle-down ms-2"></i>
          </div>
          <b-collapse visible id="collapse-3" class="ps-4 py-2">
            <span
              class="d-block mb-2 menu__subitem"
              :class="{ active: isCurrentTab }"
              @click="isCurrentTab = true"
              >Vigentes (2)</span
            >
            <span
              class="d-block menu__subitem"
              :class="{ active: !isCurrentTab }"
              @click="isCurrentTab = false"
              >Pasados (3)</span
            >
          </b-collapse>
        </div>
        <hr />
        <div><i class="fa-solid fa-heart me-2"></i><span>Favoritos</span></div>
      </div>
    </div>
    <div cols="12" lg="9" class="projects__content col-12 col-lg-9">
      <div v-if="isCurrentTab">
        <h1 class="projects__title">Mis Proyectos Vigentes (13)</h1>
        <div>
          <project-card
            v-for="(project, index) in currentProjects"
            :key="index"
            :project="project"
          ></project-card>
        </div>
      </div>
      <div v-else>
        <h1 class="projects__title">Mis Proyectos Pasados (13)</h1>
        <div>
          <project-card
            v-for="(project, index) in pastProjects"
            :key="index"
            :project="project"
            @calification-modal="openCalificationModal"
          ></project-card>
        </div>
      </div>
      <b-button
        variant="primary"
        @click="loadProjects"
        class="w-100 mb-4 notifications-list__btn-loading"
      >
        <i
          class="fa-regular me-2"
          :class="isLoadingProjects ? 'fas fa-spinner fa-spin' : 'fa-plus'"
        ></i>
        {{ isLoadingProjects ? "Cargando" : "Ver mas" }}
      </b-button>
    </div>
    <b-modal
      v-model="showModalCalification"
      ref="modalCalification"
      id="modal-calification"
      centered
      class="modal-calification"
      title="Calificar"
      hide-footer
    >
      <div class="d-flex flex-wrap justify-content-center flex-row-reverse">
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 5)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 4)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 3)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 2)"
        ></i>
        <i
          class="fa-solid fa-star me-3 modal-calification__icon"
          role="button"
          @click="checkQualifaction($event, 1)"
        ></i>
      </div>
      <div class="col-12 text-center mt-4">
        <b-button class="btn-lg" variant="primary" @click="sendQualification"
          >Enviar calificación</b-button
        >
      </div>
    </b-modal>
    <div id="footer__limit"></div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/modules/client/views/Components/ProjectCard.vue";
import {
  alertLoading,
  alertSuccessfully,
  closeAlert,
} from "@/utils/SweetAlert";
import {
  onMounted,
  ref,
  watch,
  watchEffect,
  computed,
  defineProps,
  toRefs,
} from "vue";

const props = defineProps<{
  type: string;
}>();

const { type } = toRefs(props);

const modalCalification = ref(null);
const showModalCalification = ref(false);

const isLoading = ref(true);
const isLoadingProjects = ref(false);
const isCurrentTab = ref(true);
const projectSelected = ref(0);
const qualificationSelected = ref(0);
// Ejemplo de estados del projecto para la simulación
// Status: 0 (Abierto) , 1(Propuesta Aceptada), 2(Pendiente de pago) , 3(Terminada)
const currentProjects = ref([
  {
    id: 1,
    work: "Carpintero",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?",
    status: 0,
    isQualified: false,
  },
  {
    id: 2,
    work: "Pintor",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil volem?",
    status: 1,
    isQualified: false,
  },
  {
    id: 3,
    work: "Maestro de obra",
    description:
      " Lorem ipsum dolor sit amet consectetur, ecto est animi vel tenetur ut repellat reprehenderit exercitationem?",
    status: 2,
    isQualified: false,
  },
]);
const pastProjects = ref([
  {
    id: 4,
    work: "Tecnico",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?",
    status: 3,
    isQualified: false,
  },
  {
    id: 5,
    work: "Electricista",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil volem?",
    status: 3,
    isQualified: false,
  },
  {
    id: 6,
    work: "Carpintero",
    description:
      " Lorem ipsum dolor sit amet consectetur, ecto est animi vel tenetur ut repellat reprehenderit exercitationem?",
    status: 3,
    isQualified: false,
  },
]);

onMounted(() => {
  if (type.value == "current") {
    isCurrentTab.value = true;
  } else {
    isCurrentTab.value = false;
  }
  isLoading.value = false;
});

function loadProjects() {
  isLoadingProjects.value = true;
  if (isCurrentTab.value) {
    loadCurrentProjects();
  } else {
    loadPastProjects();
  }
}

//Carga projectos vigentes
function loadCurrentProjects() {
  const project = {
    id: 7,
    work: "Tecnico",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?",
    status: 0,
    isQualified: false,
  };
  console.log("Exec loadCurrentProjects...");
  const timeOut = setTimeout(() => {
    console.log("Inside setTimeout...");
    currentProjects.value.push(project);
    currentProjects.value.push(project);
    console.log(currentProjects);
    isLoadingProjects.value = false;
    clearTimeout(timeOut);
  }, 2000);
}

watch(currentProjects, (newValue, OldValue) => {
  console.log(OldValue, newValue);
});

watchEffect(() => {
  console.log(currentProjects.value.length);
});

//Carga proyectos pasados
function loadPastProjects() {
  const project = {
    id: 8,
    work: "Tecnico",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nihil voluptatem architecto est animi vel tenetur ut repellat reprehenderit exercitationem?",
    status: 3,
    isQualified: false,
  };

  const timeOut = setTimeout(() => {
    pastProjects.value.push(project);
    pastProjects.value.push(project);
    isLoadingProjects.value = false;
    clearTimeout(timeOut);
  }, 2000);
}

//Abrir el Modal de Calificacion
function openCalificationModal(id: number) {
  projectSelected.value = id;
  console.log(modalCalification.value, id);
  showModalCalification.value = true;
  // this.$bvModal.show('modal-calification')
}

//Cerrar el Modal de calificación
function closeCalificationModal() {
  showModalCalification.value = false;
}

//Enviar una calificacion
function checkQualifaction(event: Event, qualification: number) {
  clearIcons();
  const icon: any = event.target;
  icon.classList.add("active");
  qualificationSelected.value = qualification;
}

function sendQualification() {
  alertLoading();
  const project = pastProjects.value.find(
    (proj) => proj.id == projectSelected.value
  );
  project!.isQualified = true;
  const timeOut = setTimeout(() => {
    alertSuccessfully("Se envio la calificación exitosamente");
    clearIcons();
    closeCalificationModal();
    const timeOut2 = setTimeout(() => {
      closeAlert();
      clearTimeout(timeOut2);
    }, 1500);
    clearTimeout(timeOut);
  }, 1500);
}

function clearIcons() {
  const iconList = document.querySelectorAll(".modal-calification__icon");
  iconList.forEach((icon) => {
    icon.classList.remove("active");
  });
}

const menuChange = computed(() => {
  if (!isLoading.value) {
    let footer: any = document.getElementById("footer__limit");
    let footerScrollY = Number(footer.offsetTop) - 320;
    const scrollY = window.scrollY;
    if (scrollY > 70 && Number(scrollY) < footerScrollY) {
      return true;
    }
  }
  return false;
});
</script>

<style lang="scss" scoped>
.projects__container {
  .profile__menu {
    .menu__container {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;

      div {
        cursor: pointer;

        .menu__subitem {
          &.active {
            color: #3a88ec;
          }
        }
      }
    }

    .menu__container--web {
      position: fixed;
      top: 90px;
      padding-top: 0;
      width: 100%;
      max-width: 250px;
    }
  }

  .card {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.274) !important;
  }

  .profile__menu {
    padding-top: 48px;
  }

  .projects__content {
    padding-top: 48px;

    .projects__title {
      font-size: 1.5rem;
    }
  }
}

#modal-calification {
  .modal-calification__icon {
    color: rgb(165, 165, 165);
    font-size: 1.5rem;

    &:hover {
      color: rgb(255, 196, 0);
    }

    &:hover ~ .modal-calification__icon {
      color: rgb(255, 196, 0);
    }

    &.active {
      color: rgb(255, 196, 0);
    }

    &.active ~ .modal-calification__icon {
      color: rgb(255, 196, 0);
    }
  }
}

.collapse {
  box-shadow: none !important;
}

@media (max-width: 991px) {
  .projects__container {
    .profile__menu {
      padding: 0;
      z-index: 1;
      position: fixed;
      top: 75px;
      left: 0;
    }

    .projects__content {
      padding-top: 180px;
    }
  }
}
</style>
