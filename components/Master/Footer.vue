<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 class="footer-heading">Petsitting</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <ul class="ftco-footer-social p-0">
            <li class="ftco-animate">
              <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter">
                <span class="fa fa-twitter"></span>
              </a>
            </li>
            <li class="ftco-animate">
              <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook">
                <span class="fa fa-facebook"></span>
              </a>
            </li>
            <li class="ftco-animate">
              <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram">
                <span class="fa fa-instagram"></span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 class="footer-heading">Latest News</h2>

          <div
            class="block-21 mb-4 d-flex"
            v-for="(item, index) in getBlog"
            :key="item.articletitle"
            v-bind:class = "(index+1)>2 ?'d-none latest-news' :''"
          >

            <a
              class="img mr-4 rounded"
              v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }"
            ></a>
            <div class="text">
              <h3 class="heading">
                <a v-bind:href="'/blog/'+item.articleid">{{item.articletitle}}</a>
              </h3>
              <div class="meta">
                <div>
                  <a v-bind:href="'/blog/'+item.articleid">
                    <span class="icon-calendar"></span> April 7, 2020
                  </a>
                </div>
                <div>
                  <a v-bind:href="'/blog/'+item.articleid">
                    <span class="icon-person"></span>
                    {{item.username}}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
          <h2 class="footer-heading">Quick Links</h2>
          <ul class="list-unstyled">
            <li>
              <a href="/" class="py-2 d-block">Home</a>
            </li>
            <li>
              <a href="/about" class="py-2 d-block">About</a>
            </li>
            <li>
              <a href="/services" class="py-2 d-block">Services</a>
            </li>
            <li>
              <a href="/works" class="py-2 d-block">Works</a>
            </li>
            <li>
              <a href="/blog" class="py-2 d-block">Blog</a>
            </li>
            <li>
              <a href="/contact" class="py-2 d-block">Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 class="footer-heading">Have a Questions?</h2>
          <div class="block-23 mb-3">
            <ul>
              <li>
                <span class="icon fa fa-map"></span>
                <span class="text">70 Soi Ban Bat Bamrung Muang Road Ban Bat Subdistrict, Pom Prap District, Bangkok 10100</span>
              </li>
              <li>
                <a href="#">
                  <span class="icon fa fa-phone"></span>
                  <span class="text">083-227-5180</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon fa fa-paper-plane"></span>
                  <span class="text">pongtorn.chot@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <p class="copyright">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;
            <script>
  document.write(new Date().getFullYear());
            </script>All rights reserved | This template is made with
            <i
              class="fa fa-heart"
              aria-hidden="true"
            ></i> by
            <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      getBlog:this.$store.getters.getHomeBlog,
      limitationList: 2
    };
  },
  computed: {
  }
};
</script>

<style>

.latest-news.d-none{
  display: none!important;
}

</style>