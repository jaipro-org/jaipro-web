<template>
  <div class="nav__container">
    <b-navbar
      id="navbar-client"
      :class="setScrollClass ? 'header-client-scrolled' : ''"
      toggleable="lg"
      type="dark"
      class="py-1 bg-white"
    >
      <b-container fluid="lg">
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img src="@/assets/img/logo.png" width="155px" />
          </a>
        </div>

        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <div class="navUser__box d-block d-lg-none">
              <div class="navUser__image mx-auto">
                <img src="@/assets/img-delete/profile.jpg" alt="" />
              </div>
              <h1 class="text-center">Armando Paredes</h1>
            </div>
            <div class="mx-3 navItem my-2 my-lg-0 d-flex d-lg-block">
              <div class="text-center">
                <i class="fa-solid fa-house mr-2 mr-lg-0"></i>
              </div>
              <span class="d-block">Inicio</span>
            </div>
            <div class="mx-3 navItem my-2 my-lg-0 d-flex d-lg-none">
              <div class="text-center">
                <i class="fa-solid fa-user mr-2"></i>
              </div>
              <span class="d-block">Ver Perfil</span>
            </div>
            <div class="mx-3 navItem my-2 my-lg-0 d-flex d-lg-none">
              <div class="text-center">
                <i class="fa-solid fa-right-from-bracket mr-2"></i>
              </div>
              <span>Cerrar Session</span>
            </div>

            <b-nav-item-dropdown right class="d-none d-lg-block">
              <template #button-content>
                <div class="user__image">
                  <img src="@/assets/img-delete/profile.jpg" alt="" />
                </div>
              </template>
              <b-dropdown-item is="div">
                <div class="navUser__box">
                  <div class="navUser__image mx-auto">
                    <img src="@/assets/img-delete/profile.jpg" alt="" />
                  </div>
                  <h1 class="text-center dropdown__name">Armando Paredes</h1>
                </div>
              </b-dropdown-item>
              <b-dropdown-item href="#"
                ><i class="fa-solid fa-user mr-2"></i>Ver
                Perfil</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><i class="fa-solid fa-right-from-bracket mr-2"></i>Cerrar
                Session</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse> -->
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      step_login: 0,
      step_register: 0,
    };
  },
  computed: {
    ...mapGetters(["getScroll"]),
    setScrollClass() {
      if (this.getScroll > 20) return true;
      else return false;
    },
  },
};
</script>

<style lang="scss">
.nav__container {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;

  .header-client-scrolled {
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
  }

  .navItem:hover {
    color: #3a88ec;
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
