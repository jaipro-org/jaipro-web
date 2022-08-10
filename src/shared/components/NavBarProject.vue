<template>
  <div class="nav__container">
    <b-navbar
      id="navbar-client"
      :class="setScrollClass ? 'header-client-scrolled' : ''"
      toggleable="lg"
      type="dark"
      class="navbar py-1 bg-white navbar-dark navbar-expand-lg"
    >
      <b-container fluid="lg">
        <div class="navbar-brand">
          <a class="navbar-brand-logo" @click="$router.push({ name: 'home' })">
            <img src="@/assets/img/logo.png" width="155px" />
          </a>
        </div>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
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
