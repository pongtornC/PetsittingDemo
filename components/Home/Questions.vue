<template>
  <div>
    <section class="ftco-section bg-light ftco-faqs">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-md-last">
            <div
              class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
              style="background-image:url(images/about.jpg);"
            >
              <a
                href="https://vimeo.com/45830194"
                class="icon-video popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span class="fa fa-play"></span>
              </a>
            </div>
            <div class="d-flex mt-3">
              <div class="img img-2 mr-md-2" style="background-image:url(images/about-2.jpg);"></div>
              <div class="img img-2 ml-md-2" style="background-image:url(images/about-3.jpg);"></div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="heading-section mb-5 mt-5 mt-lg-0">
              <h2 class="mb-3">Frequently Asks Questions</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div id="accordion" class="myaccordion w-100" aria-multiselectable="true">
              <!--
                https://stackoverflow.com/questions/38428220/convert-string-to-dom-in-vuejs
              -->

              <div v-for="(x, index) in loadDataQuestion" :key="x.questionid" class="card">
                <div class="card-header p-0" v-bind:id="'heading'+x.questionid">
                  <h2 class="mb-0">
                    <button
                      v-bind:href="'#collapse'+x.questionid"
                      class="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      aria-expanded="true"
                      v-bind:aria-controls="'collapse'+x.questionid"
                    >
                      <p class="mb-0">{{x.questionname}}</p>
                      <i class="fa" aria-hidden="true"></i>
                    </button>
                  </h2>
                </div>

                <div
                  :class="{ 'show' : index == 0}"
                  class="collapse"
                  v-bind:id="'collapse'+x.questionid"
                  role="tabpanel"
                  v-bind:aria-labelledby="'heading'+x.questionid"
                >
                  <div class="card-body py-3 px-0">
                    <p v-html="x.questiondescription"></p>
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
  props: {
    loadDataQuestion: {
      type: Array,
      required: true
    }
  },
  methods: {
    test(x) {
      return x;
    }
  }
};
</script>

<style>
</style>