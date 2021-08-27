<template>
  <div>
    
    <SubBanner :loadDataBanner="loadDataBanner"/> 
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div v-for="lg in loadDataGallery" :key="lg.galleryid" class="col-md-4 ftco-animate">
            <div
              class="work mb-4 img d-flex align-items-end"
              v-bind:style="{ backgroundImage: 'url(' + lg.image + ')' }"
            >
              <a
                v-bind:href="lg.image"
                class="icon image-popup d-flex justify-content-center align-items-center"
              >
                <span class="fa fa-expand"></span>
              </a>
              <div class="desc w-100 px-4">
                <div class="text w-100 mb-3">
                  <span>{{lg.categoryname}}</span>
                  <h2>
                    <a 
                      v-bind:href="lg.image"
                    >{{lg.galleryname}}</a>
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
import SubBanner from "@/components/Master/SubBanner.vue";
export default {
  components: {
    SubBanner
  },
  layout: "ShopCenterLayout",
  async asyncData({ $axios, params, store }) {
    
    var loadDataGallery = "";

    await store.dispatch("getdataGallery").then(() => {
      loadDataGallery = store.getters.getHomeGallery;
    });

    var BannerID = "0004";
    var loadDataBanner = {};
    await store.dispatch("getDataBanner", BannerID).then(() => {
      loadDataBanner = store.getters.getDataSubBanner;
    });
    return { loadDataGallery, loadDataBanner };
  }
};
</script>

<style>
</style>