<template>
    <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile">
      <div class="navbar-container container">
				<!-- LOGO -->
				<div class="navbar-brand">
				<a class="navbar-brand-logo" href="#">
					<img src="@/assets/img/logo.png" width="155px">
				</a>
				</div>
				<button class="navbar-toggler" 
						type="button" 
						data-toggle="collapse" 
						data-target="#navbarNav" 
						aria-controls="navbarNav" 
						aria-expanded="false" 
						aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-around" id="navbarNav">
					<ul class="navbar-nav menu-navbar-nav">
						<!-- <li class="nav-item">
							<a class="nav-link" href="#top">
								<p class="nav-link-menu">Inicio</p>
							</a>
						</li> -->
						<li class="nav-item show">
							<a class="nav-link learn-more-btn btn-invert" href="#">Cotizar</a>
						</li>
						
						<li class="nav-item hide">
							<a class="nav-link" href="#services">
								<p class="nav-link-menu">Servicios</p>
							</a>
						</li>
						<li class="nav-item hide">
							<a class="nav-link" href="#afiliacion">
								<p class="nav-link-menu">Como afiliamos a los especialistas</p>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link learn-more-btn" href="#">Hazte especialista</a>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item">
							<b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" no-caret>
								<template #button-content>
									<i class="fa fa-bars"></i>
								</template>
								<b-dropdown-item href="#">Registrate</b-dropdown-item>
								<b-dropdown-item href="#">Iniciar Sesión</b-dropdown-item>
							</b-dropdown>
						</li>
					</ul>
				</div>
			</div>
    </nav>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.navChangeColor();
  },
  methods: {
    navChangeColor() {
      let navbar = document.querySelector('#navbar');
      window.onscroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add('header-scrolled');
        } else {
          navbar.classList.remove('header-scrolled');
        }
      };
    }
  }
}

</script>