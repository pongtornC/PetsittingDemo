<template>
  
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	    	<a class="navbar-brand" href="/"><span class="flaticon-pawprint-1 mr-2"></span>Pet sitting</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="fa fa-bars"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	        	<li class="nav-item" :class="active.homeActive"
						><a href="/" class="nav-link">Home</a></li>
	        	<li class="nav-item" :class="active.aboutActive">
							<a href="about" class="nav-link">About</a></li>
	        	<li class="nav-item" :class="active.veterinarianActive">
							<a href="veterinarian" class="nav-link">Veterinarian</a></li>
	        	<li class="nav-item" :class="active.servicesActive">
							<a href="services" class="nav-link">Services</a></li>
	          <li class="nav-item" :class="active.galleryActive">
							<a href="gallery" class="nav-link">Gallery</a></li>
	          <li class="nav-item" :class="active.pricingActive">
							<a href="pricing" class="nav-link">Pricing</a></li>
	          <li class="nav-item" :class="active.blogActive">
							<a href="blog" class="nav-link">Blog</a></li>
	          <li class="nav-item" :class="active.contactActive">
							<a href="contact" class="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    <!-- END nav -->
    </div>


</template>

<script>
export default {
 data() {
      return {
				active: {
					homeActive:"",
					aboutActive:"",
					veterinarianActive:"",
					servicesActive:"",
					galleryActive:"",
					pricingActive:"",
					blogActive:"",
					contactActive:""
				}
      }
    },
  async mounted() {
			const pathName = this.$route.path;
		//	console.log(pathName);
			if (pathName === '/') {
				this.active.homeActive="active";
			}
      else if (pathName === '/about') {
				this.active.aboutActive="active";
			}
			else if (pathName === '/veterinarian') {
				
        this.active.veterinarianActive="active";
			}
			else if (pathName === '/services') {
        this.active.servicesActive="active";
			}
			else if (pathName === '/gallery') {
        this.active.galleryActive="active";
			}
			else if (pathName === '/pricing') {
        this.active.pricingActive="active";
			}
				else if (pathName === '/blog') {
        this.active.blogActive="active";
			}
			else if (pathName === '/contact') {
        this.active.contactActive="active";
			}
			else{

			}
  }
}
</script>

<style>

</style>