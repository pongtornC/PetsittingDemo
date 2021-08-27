<template>
  <div>
    <section
      class="hero-wrap hero-wrap-2"
      style="background-image: url('/images/bg_2.jpg');"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end">
          <div class="col-md-9 ftco-animate pb-5">
            <p class="breadcrumbs mb-2">
              <span class="mr-2">
                <a href="/">
                  Home
                  <i class="ion-ios-arrow-forward"></i>
                </a>
              </span>
              <span class="mr-2">
                <a href="blog.html">
                  Blog
                  <i class="ion-ios-arrow-forward"></i>
                </a>
              </span>
              <span>
                Blog Single
                <i class="ion-ios-arrow-forward"></i>
              </span>
            </p>
            <h1 class="mb-0 bread">Blog</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-degree-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ftco-animate">
            <div v-html="DataBlogByID.articledescription"></div>
          </div>

          <!-- .col-md-8 -->
          <div class="col-lg-4 sidebar pl-lg-5 ftco-animate">
            
            <div class="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>

              <div v-for="x in loadDataBlog" :key="x.articleid" class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" v-bind:style="{ backgroundImage: 'url(' + x.image + ')' }"></a>
                <div class="text">
                  <h3 class="heading">
                    <a v-bind:href="'/blog/'+x.articleid">{{x.articletitle}}</a>
                  </h3>
                  <div class="meta">
                    <div>
                      <a v-bind:href="'/blog/'+x.articleid">
                        <span class="icon-calendar"></span> April 7, 2020
                      </a>
                    </div>
                    <div>
                      <a v-bind:href="'/blog/'+x.articleid">
                        <span class="icon-person"></span>
                        {{x.username}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>

              <div class="tagcloud" v-html="taglink(DataBlogByID.articletag)"></div>
            </div>

            <div class="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>{{DataBlogByID.paragraph}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- .section -->
  </div>
</template>

<script>
export default {
  layout: "ShopCenterLayout",
  async asyncData({ $axios, params, store, route }) {
    var datainformation = '{"datatype":"getbyID","dataid":"' + params.id + '"}';
    var myObj = JSON.parse(datainformation);
    var DataBlogByID = [];
    await store.dispatch("getBlogByID", myObj).then(() => {
      DataBlogByID = store.getters.getBlogByID[0];
    });

    const loadDataBlog = store.getters.getHomeBlog;

    return { DataBlogByID, loadDataBlog };
  },
   methods: {
    taglink(x) {
      var str = "LIFE,SPORT,TECH,TRAVEL";
      var res = str.split(",");
      var i;
      var text = "";
      for (i = 0; i < res.length; i++) {
        text += "<a href='#"+res[i]+"' class='tag-cloud-link'>" + res[i] + "</a>";
      }
      return text;
    }
  }
};
</script>

<style>
</style>