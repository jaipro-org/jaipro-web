<template>
  <div class="nav__container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid container-lg">
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img :src="logo" width="155px" />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="router-link">
                <div class="text-center">
                  <i class="fa-solid fa-house me-2 me-lg-0"></i>
                </div>
                <span class="d-block">Inicio</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'payments' }" class="router-link">
                <div class="text-center">
                  <i class="fa-solid fa-credit-card me-2 me-lg-0"></i>
                </div>
                <span class="d-block"> Pagos</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'proposals' }" class="router-link">
                <div class="text-center">
                  <i class="fa-solid fa-wrench me-2 me-lg-0"></i>
                </div>
                <span class="d-block">Propuestas</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'jobs-list' }" class="router-link">
                <div class="text-center">
                  <i class="fa-solid fa-wrench me-2 me-lg-0"></i>
                </div>
                <span class="d-block">Trabajos</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'specialist-notifications' }"
                class="router-link"
              >
                <div class="text-center">
                  <i class="fa-solid fa-bell me-2 me-lg-0"></i>
                </div>
                <span class="d-block">Notificaciones</span>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="user__image">
                  <img :src="
                  photoPerfil ||
                  require('@/assets/img-delete/profile.jpg')
                " alt="" />
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <router-link
                    :to="{ name: 'specialist-profile' }"
                    class="router-link dropdown-item"
                  >
                    <i class="fa-solid fa-user me-2"></i>Ver Perfil
                  </router-link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <router-link
                    @click="closeSession()"
                    :to="{}"
                    class="router-link dropdown-item"
                  >
                    <i class="fa-solid fa-right-from-bracket me-2"></i>Cerrar
                    Session
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref  } from "vue";
import logo from "@/assets/svg/logo.svg";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/store";

const photoPerfil = ref(window.localStorage.getItem("photoAccount") || "")
const loginStore = useLoginStore();
const router = useRouter();

onMounted(async () => {
  window.addEventListener('photoAccount-localstorage-changed', (event: any) => {
    photoPerfil.value = event.detail.storage || "";
  });
});

function closeSession() {
  setTimeout(() => {
    loginStore.logout();
    router.push({ name: "home" });
  }, 10);
}
</script>

<style lang="scss" scoped>
.nav__container {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 4;

  .header-specialist-scrolled {
    width: 100%;
    height: 75px;
    background-color: #fff !important;
    box-shadow: 0 4px 6px 0 rgb(12 0 46 / 5%);
  }

  .navUser__box {
    .navUser__image {
      width: 60px;
      height: 60px;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
      }
    }

    h1 {
      font-size: 1.2rem;
    }

    .dropdown__name {
      font-size: 0.95rem;
    }
  }

  .nav-item {
    cursor: pointer;

    span {
      font-size: 0.9rem;
    }

    .router-link {
      color: #7e7e7e;
      text-decoration: none;

      &:hover {
        color: #3a88ec;
      }

      &.router-link-active {
        color: #3a88ec !important;
      }
    }
  }

  .nav-item .collapse {
    .router-link {
      color: #181818;
      text-decoration: none;

      &:hover {
        color: #3a88ec;
      }
    }
  }

  .user__image {
    height: 40px;
    width: 40px;
    display: inline-flex;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
}

@media (max-width: 991px) {
  .collapse.show {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.11);
  }
}
</style>
