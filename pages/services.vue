<template>
  <div>
    

    <SubBanner :loadDataBanner="loadDataBanner"/>
    <ChooseUS/>

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row mb-5 pb-5">


          <div v-for="lhs in loadDataHomeService" :key="lhs.serviceid" class="col-md-4 d-flex align-self-stretch px-4 ftco-animate mb-5 pb-5">
            <div class="d-block services text-center">
              <div class="icon d-flex align-items-center justify-content-center">
                <span span :class="getIcon(lhs.servicestatusid)"></span>
              </div>
              <div class="media-body p-4">
                <h3 class="heading">{{lhs.servicename}}</h3>
                <p>{{lhs.servicedescription}}</p>
                <a href="#" class="btn-custom d-flex align-items-center justify-content-center">
                  <span class="fa fa-chevron-right"></span>
                  <i class="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>


        </div>

        
      </div>
    </section>
  </div>
</template>

<script>
import ChooseUS from "@/components/Home/ChooseUS.vue";
import SubBanner from "@/components/Master/SubBanner.vue";
export default {
  components: {
    ChooseUS,
    SubBanner
  },
  layout: "ShopCenterLayout",
  async asyncData({ $axios, params, store }) {

    var BannerID = "0002";
    var loadDataBanner = {};
    var loadDataHomeService = "";

    await store.dispatch("getdataService").then(() => {
      loadDataHomeService = store.getters.getHomeService;
    });

    await store.dispatch("getDataBanner", BannerID).then(() => {
      loadDataBanner = store.getters.getDataSubBanner;
    });
    
    return { loadDataHomeService, loadDataBanner };
  },
  
  methods: {
    getIcon(x) {
      var classIcon = "";
      if (x == "0001") {
        classIcon = "flaticon-blind";
      } else if (x == "0002") {
        classIcon = "flaticon-dog-eating";
      } else if (x == "0003") {
        classIcon = "flaticon-grooming";
      } else {
        classIcon = "flaticon-grooming";
      }
      return classIcon;
    }
  }
};
</script>

<style>
</style>