<template>
  <div>
    <SubBanner :loadDataBanner="loadDataBanner"/>  

		<Packages :loadDataPackage="loadDataPackage" />

    <formConsultation :loadDataService="loadDataService" />
  </div>
</template>

<script>
import Packages from "@/components/Home/Packages.vue";
import formConsultation from "@/components/Home/formConsultation.vue";
import SubBanner from "@/components/Master/SubBanner.vue";
export default {
  components: {
    Packages,
    formConsultation,
    SubBanner
  },
  layout: "ShopCenterLayout",
  async asyncData({ $axios, params, store }) {
		var loadDataPackage = store.getters.getHomePackage;
    var loadDataService = store.getters.getHomeService;

    await store.dispatch("getdataPackage").then(() => {
      loadDataPackage = store.getters.getHomePackage;
    });

    await store.dispatch("getdataService").then(() => {
      loadDataService = store.getters.getHomeService;
    });

    var BannerID = "0005";
    var loadDataBanner = {};
    await store.dispatch("getDataBanner", BannerID).then(() => {
      loadDataBanner = store.getters.getDataSubBanner;
    });

    return { loadDataPackage, loadDataService, loadDataBanner };
  }
};
</script>

<style>
</style>