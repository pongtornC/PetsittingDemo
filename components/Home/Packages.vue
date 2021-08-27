<template>
  <div>
    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2>Affordable Packages</h2>
          </div>
        </div>
        <div class="row">
          <div v-for="x in loadDataPackage" :key="x.packageid" class="col-md-4 ftco-animate">
            <div class="block-7">
              <div class="img" v-bind:style="{ backgroundImage: 'url(' + x.image + ')' }"></div>
              <div class="text-center p-4">
                <span class="excerpt d-block">{{x.packagename}}</span>
                <span class="price">
                  <sup>$</sup>
                  <span class="number">{{x.price}}</span>
                  <sub>/mos</sub>
                </span>

                <ul class="pricing-text mb-5">
                  <li>
                    <span class="fa fa-check mr-2"></span>
                    {{x.detail1}}
                  </li>
                  <li>
                    <span class="fa fa-check mr-2"></span>
                    {{x.detail2}}
                  </li>
                  <li>
                    <span class="fa fa-check mr-2"></span>
                    {{x.detail3}}
                  </li>
                  <li>
                    <span class="fa fa-check mr-2"></span>
                    {{x.detail4}}
                  </li>
                </ul>

                <a
                  v-bind:href="x.redirect"
                  class="btn btn-primary d-block px-2 py-3"
                >{{x.buttontext}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    loadDataPackage: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>