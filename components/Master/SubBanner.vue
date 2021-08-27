<template>
  <div>
      <section
      class="hero-wrap hero-wrap-2"
      v-bind:style="{ backgroundImage: 'url(' + loadDataBanner.image + ')' }"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end">
          <div class="col-md-9 ftco-animate pb-5">
            <p class="breadcrumbs mb-2">
              <span class="mr-2">
                <a href="index.html">
                  <i class="ion-ios-arrow-forward"></i>
                </a>
              </span>
              <span>
                {{loadDataBanner.bannerbreadcrumbs}}
                <i class="ion-ios-arrow-forward"></i>
              </span>
            </p>
            <h1 class="mb-0 bread">{{loadDataBanner.bannerdescription}}</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
 props:{
    loadDataBanner:{
      type:Object,
      required:true
    }
  }
}
</script>

<style>

</style>