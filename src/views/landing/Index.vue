<template>
  <div>
    <div class="header">
			<div class="container header-container">
				<div class="col-lg-6 header-img-section">
					<img src="@/assets/img/header.png">
				</div>
				<div class="col-lg-5 offset-lg-1 header-title-section">
					<p class="header-subtitle">Multipurpose landing template</p>
					<h1 class="header-title">Beautifully simple, code.</h1>
					<p class="header-title-text">Codelander is a beautifully simple, clean and lightweight landing page template for all types of businesses, with bold and bright colours.</p>
					<div class="learn-more-btn-section">
						<a class="nav-link learn-more-btn btn-invert" href="#services">Cotizar</a>
					</div>
				</div>
			</div>
		</div>
    <!-- SECTION LABEL -->
			<div id="services"></div>
    <!-- STRATEGY SECTION -->
		<div class="strategy-section">
			<div class="pricing-title container">
				<h2>Como Funciona</h2>
				<p>Offer multiple packages or monthly subscriptions? Why not showcase your featured price plans here, bold and beautifully.</p>
        <div class="tab-pills">
          <!-- <button class="nav-link learn-more-btn btn-invert">Para Clientes</button>
          <button class="nav-link learn-more-btn">Para Especialistas</button> -->
          <b-button variant="outline-primary" @click="tabIndex=0" :class='{active : (tabIndex==0)}'>Para Clientes</b-button>
          <b-button variant="outline-primary" @click="tabIndex=1" :class='{active : (tabIndex==1)}'>Para Especialistas</b-button>
        </div>
			</div>
			<div class="strategy-section-bg-graphics-section">
				<img src="@/assets/img/strategy-section-bg.png">
			</div>
			<div class="container strategy-container">
				<div class="col-lg-3 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
					<div class="strategy-card">
						<div class="strategy-card-icon-section">
							<img src="@/assets/img/strategy-1.png">
						</div>
						<h2>Strategy</h2>
						<p>We'll work with you to develop the right strategy</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
					<div class="strategy-card">
						<div class="strategy-card-icon-section">
							<img src="@/assets/img/strategy-2.png">
						</div>
						<h2>Automation</h2>
						<p>Work synchronization and automated services</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
					<div class="strategy-card">
						<div class="strategy-card-icon-section">
							<img src="@/assets/img/strategy-3.png">
						</div>
						<h2>Deployment</h2>
						<p>Dedicated servers to deploy and test applications</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-xs-8 offset-xs-2 strategy-card-section">
					<div class="strategy-card">
						<div class="strategy-card-icon-section">
							<img src="@/assets/img/strategy-4.png">
						</div>
						<h2>Education</h2>
						<p>Stay informed on all our tools and technologies</p>
					</div>
				</div>
			</div>
		</div>
    <!-- SECTION LABEL -->
		<div id="especialidades"></div>
		<!-- ESPECIALIDADES -->
		<div class="blog-section">
			<div class="blog-section-right-bg">
				<img src="@/assets/img/blog-section-right-bg.png">
			</div>
			<div class="blog-section-left-bg">
				<img src="@/assets/img/blog-section-left-bg.png">
			</div>
			<div class="container blog-container">
				<div class="blog-title-section">
					<p class="blog-subtitle">Recent updates</p>
					<h2 v-if="tabIndex == 0"  class="blog-title">Servicios</h2>
					<h2 v-else class="blog-title">Especialidades</h2>
				</div>
				<div class="blog-posts-section">
          <carousel :autoplay="true" :nav="false" :responsive="{0:{items:1,nav:false},600:{items:2},992:{items:3}}" :loop="true">
            <div class="blog-post-card-container">
              <div class="blog-post-card">
                <div class="blog-post-icon">
                  <img src="@/assets/img/blog-card-1.png">
                </div>
                <h3 class="blog-post-title">Remote Working</h3>
                <p class="blog-post-text">Making it easier to connect with every client worldwide</p>
                <a  class="blog-post-link" href="#news">Read More</a>
              </div>
            </div>
            <div class="blog-post-card-container">
              <div class="blog-post-card">
                <div class="blog-post-icon">
                  <img src="@/assets/img/blog-card-2.png">
                </div>
                <h3 class="blog-post-title">Remote Working</h3>
                <p class="blog-post-text">Making it easier to connect with every client worldwide</p>
                <a  class="blog-post-link" href="#news">Read More</a>
              </div>
            </div>
            <div class="blog-post-card-container">
              <div class="blog-post-card">
                <div class="blog-post-icon">
                  <img src="@/assets/img/blog-card-3.png">
                </div>
                <h3 class="blog-post-title">Communication</h3>
                <p class="blog-post-text">We've made our client support services easy to access</p>
                <a class="blog-post-link" href="#news">Read More</a>
              </div>
            </div>
            <div class="blog-post-card-container">
              <div class="blog-post-card">
                <div class="blog-post-icon">
                  <img src="@/assets/img/blog-card-3.png">
                </div>
                <h3 class="blog-post-title">Communication</h3>
                <p class="blog-post-text">We've made our client support services easy to access</p>
                <a class="blog-post-link" href="#news">Read More</a>
              </div>
            </div>
          </carousel>
				</div>
			</div>
		</div>
			<!-- SECTION LABEL -->
			<div id="afiliacion"></div>
			<!-- SERVICES -->
		<div class="services-section" v-if="tabIndex == 0">
			<div class="services-section-bg-graphics">
				<img src="@/assets/img/services-section-bg.png">
			</div>
			<div class="container services-container">
				<div class="col-lg-5 services-title-section">
					<h2 class="services-title">Como afiliamos a los especialistas</h2>
					<p class="services-text">This is a great section to introduce your company and showcase your featured services.</p>		
					<div class="services-accordion">
	          <button>Como afiliamos a los especialistas</button>
					</div>				
				</div>
				<div class="col-lg-6 offset-lg-1 services-header-img-section">
					<img src="@/assets/img/services-header.png">
				</div>
			</div>
		</div>
		
    <!-- SECTION LABEL -->
		<div id="clients"></div>
    <!-- CLIENTS -->
		<div class="clients-section">
			<div class="container clients-container">
				<div class="clients-title-section">
					<p class="clients-subtitle">Our clients</p>
					<h2 v-if="tabIndex == 0" class="clients-title">Clientes Satisfechos</h2>
					<h2 v-else class="clients-title">Comentarios de especialistas</h2>
				</div>
				<div class="clients-container-cards">
          <div class="col-md-6 col-xs-12">
            <div class="client-card">
              <p>Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual y el doctor lo...</p>
              <div class="profile">
                <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                <div class="info">
                  <b-form-rating value=3 variant="warning" class="mb-2"></b-form-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="client-card">
              <p>Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual y el doctor lo...</p>
              <div class="profile">
                <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                <div class="info">
                  <b-form-rating value=3 variant="warning" class="mb-2"></b-form-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="client-card">
              <p>Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual y el doctor lo...</p>
              <div class="profile">
                <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                <div class="info">
                  <b-form-rating value=3 variant="warning" class="mb-2"></b-form-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="client-card">
              <p>Excelente profesional. Tenía una asimetría de los párpados muy marcada, otros Medicos me habían dicho que no se podría quedar 100% igual y el doctor lo...</p>
              <div class="profile">
                <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                <div class="info">
                  <b-form-rating value=3 variant="warning" class="mb-2"></b-form-rating>
                  <h6>Pedro Pablo Agustin</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
		<!-- SECTION LABEL -->
		<div id="contact"></div>
		<!-- CONTACT -->
		<div v-if="tabIndex == 0" class="contact-section">
			<div class="container contact-container">
				<div class="contact-title-section">
					<h2 class="contact-title">¿Tienes alguna duda?<br>Visita nuestro</h2>
					<div class="learn-more-btn-section">
						<a class="nav-link learn-more-btn btn-invert" href="mailto:name@domain.com">Centro de ayuda</a>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    
  }
}

</script>

<style>

</style>