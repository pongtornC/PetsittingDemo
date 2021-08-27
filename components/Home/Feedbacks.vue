<template>
  <div>
    <section
      class="ftco-section testimony-section"
      style="background-image: url('images/bg_2.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2>Happy Clients &amp; Feedbacks</h2>
          </div>
        </div>
        <div class="row ftco-animate">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel ftco-owl">
              <div v-for="x in loadDataFeedback" :key="x.feedbackid" class="item">
                <div class="testimony-wrap py-4">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-quote-left"></span>
                  </div>
                  <div class="text">
                    <p class="mb-4">{{getPostBody(x.feedbackdescription)}}</p>
                    <div class="d-flex align-items-center">
                      <div
                        class="user-img"
                        v-bind:style="{ backgroundImage: 'url(' + x.image + ')' }"
                      ></div>
                      <div class="pl-3">
                        <p class="name">{{x.feedbackname}}</p>
                        <span class="position">{{x.feedbackposition}}</span>
                      </div>
                    </div>
                  </div>
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
  methods: {
    getPostBody(post) {
      let body = post;

      return body.length > 290 ? body.substring(0, 290) + "..." : body;
    },

  },
  props: {
    loadDataFeedback: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>