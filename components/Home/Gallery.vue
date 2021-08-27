<template>
  <div>
    <section class="ftco-section section-gallery-block">
      <div class="container">
        <div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2>Pets Gallery</h2>
          </div>
        </div>
        <div class="row">
          <div v-for="x in loadDataGallery" :key="x.galleryid" class="gallery-block col-md-4 ftco-animate">
            <div
              class="work mb-4 img d-flex align-items-end"
              v-bind:style="{ backgroundImage: 'url(' + x.image + ')' }"
            >
              <a
                v-bind:href="x.image"
                class="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span class="fa fa-expand"></span>
              </a>
              <div class="desc w-100 px-4">
                <div class="text w-100 mb-3">
                  <span>{{x.categoryname}}</span>
                  <h2>
                    <a href="#">{{x.galleryname}}</a>
                  </h2>
                </div>
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
    loadDataGallery: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.section-gallery-block .gallery-block:nth-child(1n+7) {
    display: none;
}
</style>