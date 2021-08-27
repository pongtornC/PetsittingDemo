<template>
  <div>

    <client-only><BannerHero /></client-only>
    <!-- Banner Hero -->
    <client-only>
      <Intro :loadDataHomeService="loadDataHomeService" />
    </client-only>
    <!-- Intro -->
    <client-only><ChooseUS /></client-only>
    <!-- ChooseUS -->
    <client-only><Counter /></client-only>
    <!-- Counter -->
    <client-only>
      <Questions :loadDataQuestion="loadDataQuestion" />
    </client-only>
    <!-- Questions -->
    <client-only><Feedbacks :loadDataFeedback="loadDataFeedback"/></client-only>
    <!-- Feedbacks -->
    <client-only><Packages :loadDataPackage="loadDataPackage" /></client-only>
    <!-- Packages -->
    <client-only><Gallery :loadDataGallery="loadDataGallery" /></client-only>
    <!-- Gallery -->
    <client-only><Blog :loadDataBlog="loadDataBlog" /></client-only>
    <!-- Blog -->
    <client-only><formConsultation :loadDataService="loadDataService" /></client-only>
    <!-- formConsultation -->
  </div>
</template>

<script>
import BannerHero from "@/components/Home/BannerHero.vue";
import Intro from "@/components/Home/Intro.vue";
import ChooseUS from "@/components/Home/ChooseUS.vue";
import Counter from "@/components/Home/Counter.vue";
import Questions from "@/components/Home/Questions.vue";
import Feedbacks from "@/components/Home/Feedbacks.vue";
import Packages from "@/components/Home/Packages.vue";
import Gallery from "@/components/Home/Gallery.vue";
import Blog from "@/components/Home/Blog.vue";
import formConsultation from "@/components/Home/formConsultation.vue";

export default {
  components: {
    BannerHero,
    Intro,
    ChooseUS,
    Counter,
    Questions,
    Feedbacks,
    Packages,
    Gallery,
    Blog,
    formConsultation
  },
  layout: "ShopCenterLayout",
  async asyncData({ $axios, params, store }) {
    var loadDataGallery = "";
    var loadDataFeedback = "";
    var loadDataPackage = "";
    var loadDataQuestion = "";
    var loadDataService = "";
    var loadDataBlog = "";
    var loadDataHomeService = "";

    await store.dispatch("getdataGallery").then(() => {
      
      loadDataGallery = store.getters.getHomeGallery;
    });

     await store.dispatch("getdataFeedback").then(() => {
      loadDataFeedback = store.getters.getHomeFeedback;
    });

     await store.dispatch("getdataPackage").then(() => {
      loadDataPackage = store.getters.getHomePackage;
    });

     await store.dispatch("getdataQuestion").then(() => {
      loadDataQuestion = store.getters.getHomeQuestion;
    });

     await store.dispatch("getdataService").then(() => {
      loadDataService = store.getters.getHomeService;
    });

     await store.dispatch("getdataBlog").then(() => {
      loadDataBlog = store.getters.getHomeBlog;
    });

     await store.dispatch("getdataServiceHome").then(() => {
      loadDataHomeService = store.getters.getDataService;
    });
    
    return { loadDataHomeService, loadDataGallery, loadDataFeedback, loadDataPackage, loadDataQuestion, loadDataService, loadDataBlog };
  }

};
</script>

<style>
.section-service .service-block:nth-child(1n+4){
  display: none!important;
}
</style>