<template>
  <div>
    
    <SubBanner :loadDataBanner="loadDataBanner"/>

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row">
					
          <div
            v-for="dc in loadDataDoctor"
            :key="dc.doctorid"
            class="col-md-6 col-lg-3 ftco-animate"
          >
            <div class="staff">
              <div class="img-wrap d-flex align-items-stretch">
                <div
                  class="img align-self-stretch"
                  v-bind:style="{ backgroundImage: 'url(' + dc.image + ')' }"
                ></div>
              </div>
              <div class="text pt-3 px-3 pb-4 text-center">
                <h3>{{dc.doctorname}}</h3>
                <span class="position mb-2">{{dc.positionname}}</span>
                <div class="faded">
                  <p>{{dc.doctordescription}}</p>
                  <ul class="ftco-social text-center">
                    <li class="ftco-animate">
                      <a
                        v-bind:href="dc.twitter"
                        v-bind:title="dc.doctorname"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a
                        v-bind:href="dc.facebook"
                        v-bind:title="dc.doctorname"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-facebook"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a
                        v-bind:href="dc.gmail"
                        v-bind:title="dc.doctorname"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-google"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a
                        v-bind:href="dc.instagram"
                        v-bind:title="dc.doctorname"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="fa fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
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
    var loadDataDoctor = "";

     await store.dispatch("getdataDoctor").then(() => {
      loadDataDoctor = store.getters.getDoctorData;
    });

    var BannerID = "0003";
    var loadDataBanner = {};
    await store.dispatch("getDataBanner", BannerID).then(() => {
      loadDataBanner = store.getters.getDataSubBanner;
    });

    

    return { loadDataDoctor, loadDataBanner };
  }
};
</script>

<style>
</style>