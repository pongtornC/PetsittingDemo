<template>
  <div>
     
     
    <SubBanner :loadDataBanner="loadDataBanner"/>    

    <ChooseUS />

    <Counter />

    <Questions :loadDataQuestion="loadDataQuestion" />

    <Feedbacks :loadDataFeedback="loadDataFeedback" />

    <formConsultation :loadDataService="loadDataService" />
  </div>
</template>

<script>
import ChooseUS from "@/components/Home/ChooseUS.vue";
import Counter from "@/components/Home/Counter.vue";
import Questions from "@/components/Home/Questions.vue";
import Feedbacks from "@/components/Home/Feedbacks.vue";
import formConsultation from "@/components/Home/formConsultation.vue";
import SubBanner from "@/components/Master/SubBanner.vue";

export default {
  components: {
    ChooseUS,
    Counter,
    Questions,
    Feedbacks,
    formConsultation,
    SubBanner
  },
  layout: "ShopCenterLayout",
  async asyncData({ $axios, params, store }) {
    var loadDataQuestion = "";
    var loadDataFeedback = "";
    var loadDataService = "";

    await store.dispatch("getdataQuestion").then(() => {
      loadDataQuestion = store.getters.getHomeQuestion;
    });

    await store.dispatch("getdataFeedback").then(() => {
      loadDataFeedback = store.getters.getHomeFeedback;
    });

    await store.dispatch("getdataService").then(() => {
      loadDataService = store.getters.getHomeService;
    });

    var BannerID = "0001";
    var loadDataBanner = {};
    await store.dispatch("getDataBanner", BannerID).then(() => {
      loadDataBanner = store.getters.getDataSubBanner;
    });

    return { loadDataQuestion, loadDataFeedback, loadDataService, loadDataBanner };
  }
};
</script>

<style>
</style>