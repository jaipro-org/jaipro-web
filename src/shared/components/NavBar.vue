<template>
  <div class="navbar_clasic">
    <nav
      id="navbar"
      :class="showScrollClass ? 'header-scrolled' : ''"
      class="navbar navbar-expand-lg navbar-header navbar-mobile"
    >
      <div class="navbar-container container">
        <!-- LOGO -->
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img :src="logo" width="155px" alt="jaipro-logo" />
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
          <ul class="navbar-nav menu-navbar-nav list-sty">
            <li class="nav-item show-item">
              <router-link
                to="/general/nuevo-proyecto"
                custom
                v-slot="{ navigate, href }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="nav-link learn-more-btn btn-invert"
                  >Cotizar proyecto</a
                >
              </router-link>
            </li>
            <li class="nav-item hide-item">
              <a class="nav-link" href="#how-it-works" v-smooth-scroll>
                <p class="nav-link-menu">Cómo funciona</p>
              </a>
            </li>
            <li class="nav-item hide-item">
              <a class="nav-link" href="#services" v-smooth-scroll>
                <p class="nav-link-menu">Servicios</p>
              </a>
            </li>
            <li class="nav-item hide-item primary-menu__list-item">
              <a class="nav-link" href="#">
                <p class="nav-link-menu" @click="showMenuEsp = !showMenuEsp">
                  Especialistas
                  <span class="iconShowMenuMobile"
                    ><img
                      :style="!showMenuEsp ? '' : 'display:none'"
                      :src="downIcon"
                      alt="down"
                    />
                    <img
                      :style="!showMenuEsp ? 'display:none' : ''"
                      :src="upIcon"
                      alt="up"
                    />
                  </span>
                </p>
              </a>
              <div class="pin-container">
                <span class="pin-icon" />
              </div>
              <div class="primary-menu__dropdown">
                <b-container>
                  <div class="primary-menu__dropdown-item-wrapper">
                    <div class="primary-menu__dropdown-item">
                      <router-link
                        :to="{ name: 'affiliation-page' }"
                        class="primary-menu__dropdown-item-link"
                      >
                        <h4>Como te afiliamos</h4>
                        <p>Conoce nuestro proceso de afiliación</p>
                      </router-link>
                    </div>
                    <div class="primary-menu__dropdown-item">
                      <router-link
                        :to="{ name: 'search-specialist' }"
                        class="primary-menu__dropdown-item-link"
                      >
                        <h4>Buscar especialistas</h4>
                        <p>
                          Encuentra miles de especialistas interesados en tu
                          proyecto
                        </p>
                      </router-link>
                    </div>
                  </div>
                </b-container>
              </div>
            </li>
            <v-collapse v-show="showMenuEsp" class="menuEspMobile">
              <li class="nav-item hide-item">
                <router-link
                  :to="{ name: 'affiliation-page' }"
                  class="nav-link-menu"
                >
                  <h4>Como te afiliamos</h4>
                </router-link>
              </li>
              <li class="nav-item hide-item">
                <router-link
                  :to="{ name: 'search-specialist' }"
                  class="nav-link-menu"
                >
                  <h4>Buscar especialistas</h4>
                </router-link>
              </li>
            </v-collapse>
            <li
              class="nav-item minAjust"
              :style="showForWith ? '' : 'display:none'"
            >
              <router-link
                to="/general/nuevo-proyecto"
                custom
                v-slot="{ navigate, href }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="nav-link learn-more-btn btn-invert"
                  >Cotizar proyecto</a
                >
              </router-link>
            </li>
            <li class="nav-item minAjust">
              <router-link
                to="/auth/registro-especialista"
                custom
                v-slot="{ navigate, href }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="nav-link learn-more-btn"
                  >Soy especialista</a
                >
              </router-link>
            </li>
          </ul>

          <ul class="navbar-nav drop dropdown-menu-end">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle dropdown-toggle-no-caret btn-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-bars"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <b-dropdown-item
                  @click="$router.push({ name: 'register-type' })"
                  v-show="!loginON"
                  ><img
                    :src="registerIcon"
                    alt=""
                    class="iconLoginRegister"
                  />
                  Regístrate
                </b-dropdown-item>
                <b-dropdown-item
                  @click="$router.push({ name: 'login' })"
                  v-show="!loginON"
                >
                  <img
                    :src="userIcon"
                    alt=""
                    class="iconLoginRegister"
                  />
                  Iniciar sesión
                </b-dropdown-item>
                <b-dropdown-item
                  @click="$router.push({ name: pathNamePerfil })"
                  v-show="loginON"
                >
                  <img
                    :src="userIcon"
                    alt=""
                    class="iconLoginRegister"
                  />
                  Ver perfil
                </b-dropdown-item>
              </ul>
            </li>
          </ul>
          <div class="sub_option">
            <hr />
            <a
              class="nav-link"
              @click="$router.push({ name: 'register-type' })"
              v-show="!loginON"
            >
              <img
                :src="registerIcon"
                alt=""
                class="iconLoginRegister"
              />
              Regístrate
            </a>
            <a
              class="nav-link"
              @click="$router.push({ name: 'login' })"
              v-show="!loginON"
            >
              <img
                :src="userIcon"
                alt=""
                class="iconLoginRegister"
              />
              Iniciar sesión
            </a>
            <a
              class="nav-link"
              @click="$router.push({ name: pathNamePerfil })"
              v-show="loginON"
            >
              <img
                :src="userIcon"
                alt=""
                class="iconLoginRegister"
              />
              Ver perfil
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import logo from "@/assets/svg/logo.svg";
import downIcon from "@/assets/img/downIcon.png";
import upIcon from "@/assets/img/upIcon.png";
import registerIcon from "@/assets/img/registerIcon.png";
import userIcon from "@/assets/img/userIcon.png";
import { encryptAuthStorage } from "@/utils/Storage";

export default defineComponent({
  data() {
    return {
      showMenuEsp: ref(false),
      step_login: 0,
      step_register: 0,
      showScrollClass: ref(false),
      currentScrollPosY: ref(window.scrollY),
      anchura: window.innerWidth,
      showForWith: ref(false),
      logo,
      downIcon,
      upIcon,
      userIcon,
      registerIcon,
      loginON: ref<boolean>(),
      pathNamePerfil: ref(""),
    };
  },
  computed: {
    setScrollClass() {
      console.log("OK", window.scrollY);
      if (window.scrollY > 20) return true;
      else return false;
    },
  },
  watch: {
    currentScrollPosY(val, oldVal) {
      const anchura = window.innerWidth;
      if (anchura > 991) {
        if (val > 20) {
          this.showScrollClass = true;
        } else {
          this.showScrollClass = false;
        }
      } else {
        this.showScrollClass = false;
      }
    },
  },
  created() {
    setInterval(() => {
      this.currentScrollPosY = window.scrollY;
    }, 100);
  },
  methods: {
    actualizarAnchura() {
      this.anchura = window.innerWidth;
      if (this.anchura > 991) {
        this.showForWith = false;
      } else {
        this.showForWith = true;
      }
    },
  },
  beforeMount() {
    const authData: string =
      window.localStorage.getItem("@AUTH:security") || "";
    if (authData) this.loginON = true;
    else this.loginON = false;

    if (Boolean(authData)) {
      let data = encryptAuthStorage.decryptValue(authData);
      if (data.profileName === "CUSTOMER")
        this.pathNamePerfil = "client-profile";
      else this.pathNamePerfil = "specialist-profile";
    }
  },
  mounted() {
    window.addEventListener("resize", this.actualizarAnchura);
    this.actualizarAnchura();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.actualizarAnchura);
  },
});
</script>

<style scoped lang="scss">
.navbar_clasic {
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 900;
}
.learn-more-btn:hover {
  background-color: #f60;
}
.primary-menu__dropdown {
  width: 100%;
}
.list-sty {
  list-style: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAHZJREFUOE+t0lENgDAMRdE7BzjDAjjACgoABzgACUgiTQZZSlsWQv/Pmte9xMdJyjXABhxAH72p4Qq0GcwR1rADpmKTizUUU4UtWIU9aOERGK4Yv0Odc8nZ77vVHOeBRL99h4ksWBbARRaUyu25cpLTneiqYf1PdiIYDwBu6BAAAAAASUVORK5CYII=");
}
.menuEspMobile {
  list-style: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAD5JREFUOE9jZCATMJKpj2EIamxgYGCwJ9K/BxgYGBphfvxPpCaYMkaKNYKc6kCkrSCnNgzB6CDSewhlZPsRAHt6Bg8Xzl9JAAAAAElFTkSuQmCC");
}
.list-sty {
  li {
    padding-left: 0;
  }
}
img {
  vertical-align: sub;
}
.iconLoginRegister {
  width: 20px;
}
.menuEspMobile {
  text-align: center;
  display: none;
  li {
    a {
      :hover {
        color: #ff3e81 !important;
      }
      text-decoration: none;
      h4 {
        font-size: 18px !important;
        font-weight: 600;
        margin-bottom: 0;
      }
    }
  }
}
.iconShowMenuMobile {
  display: none;
}
@media (max-width: 991px) {
  .minAjust {
    position: relative;
    left: -30px;
    margin: auto;
  }
  .list-sty {
    align-items: flex-start;
    margin-left: 30px;
  }
  .iconShowMenuMobile {
    display: inline;
  }
  .menuEspMobile {
    text-align: center;
    display: contents;
    li {
      a {
        :hover {
          color: #ff3e81 !important;
        }
        text-decoration: none;
        h4 {
          font-size: 18px !important;
          font-weight: 600;
          margin-bottom: 0;
        }
      }
    }
  }
  //color: #ff3e81 !important;
  .hide-item {
    display: list-item;
  }
  .sub_option {
    margin-bottom: -30px;
    a {
      cursor: pointer;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      margin: 5px;
      margin-left: -15px;
    }
    a:hover {
      color: #ff3e81 !important;
    }
  }
}
</style>
