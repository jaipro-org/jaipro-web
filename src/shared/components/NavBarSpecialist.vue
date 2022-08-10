<template>
  <div class="nav__container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid container-lg">
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img src="@/assets/img/logo.png" width="155px" />
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
              <a class="nav-link active" aria-current="page" href="#">
                <div class="text-center">
                  <i class="fa-solid fa-house mr-2 mr-lg-0"></i>
                </div>
                <span class="d-block">Inicio</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <div class="text-center">
                  <i class="fa-solid fa-credit-card"></i>
                </div>
                <span class="d-block">Mis pagos</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <div class="text-center">
                  <i class="fa-solid fa-list-ul mr-2 mr-lg-0"></i>
                </div>
                <span class="d-block">Mis propuestas</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <div class="text-center">
                  <i class="fa-solid fa-wrench mr-2 mr-lg-0"></i>
                </div>
                <span class="d-block">Trabajos</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <div class="text-center">
                  <i class="fa-solid fa-bell mr-2 mr-lg-0"></i>
                </div>
                <span class="d-block">Notificaciones</span>
              </a>
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
                  <img src="@/assets/img-delete/profile.jpg" alt="" />
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      step_login: 0,
      step_register: 0,
    };
  },
  computed: {
    setScrollClass() {
      if (window.scrollY > 20) return true;
      else return false;
    },
  },
});
</script>

<style lang="scss" scoped>
.nav__container {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;

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

  .navItem {
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

  .navItem-collapse {
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

.collapse.show {
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.11);
}
</style>
