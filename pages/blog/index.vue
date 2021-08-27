<template>
  <div>
    <SubBanner :loadDataBanner="loadDataBanner" />

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row d-flex">
          <div v-for="lb in loadDataBlog" :key="lb.articleid" class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <a
                v-bind:href="'/blog/'+lb.articleid"
                class="block-20 rounded"
                v-bind:style="{ backgroundImage: 'url(' + lb.image + ')' }"
              ></a>
              <div class="text p-4">
                <div class="meta mb-2">
                  <div>
                    <a v-bind:href="'/blog/'+lb.articleid">April 07, 2020</a>
                  </div>
                  <div>
                    <a v-bind:href="'/blog/'+lb.articleid">{{lb.username}}</a>
                  </div>
                </div>
                <h3 class="heading">
                  <a v-bind:href="'/blog/'+lb.articleid">{{lb.articletitle}}</a>
                </h3>
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
  data() {
    return {};
  },
  async asyncData({ $axios, params, store }) {
    var loadDataBlog = "";

    await store.dispatch("getdataBlog").then(() => {
      loadDataBlog = store.getters.getHomeBlog;
    });

    var BannerID = "0006";
    var loadDataBanner = {};
    await store.dispatch("getDataBanner", BannerID).then(() => {
      loadDataBanner = store.getters.getDataSubBanner;
    });
    return { loadDataBlog, loadDataBanner };
  }
};
</script>

<style>
</style>