<template>
  <div>
    <SubBanner :loadDataBanner="loadDataBanner" />

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">Contact Form #03</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row mb-5">
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-map-marker"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Phone:</span>
                        <a href="tel://1234567920">+ 1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-paper-plane"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Email:</span>
                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-globe"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Website</span>
                        <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-7">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Contact Us</h3>
                    <formConsultation />
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-stretch">
                  <div
                    class="info-wrap w-100 p-5 img"
                    style="background-image: url(images/img.jpg);"
                  ></div>
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
import formConsultation from "@/components/Contact/FormContactUs.vue";
import SubBanner from "@/components/Master/SubBanner.vue";
export default {
  layout: "ShopCenterLayout",
  components: {
    formConsultation,
    SubBanner
  },
  async asyncData({ $axios, params, store }) {
    var BannerID = "0007";
    var loadDataBanner = {};
    await store.dispatch("getDataBanner", BannerID).then(() => {
      loadDataBanner = store.getters.getDataSubBanner;
    });
    console.log("loadDataBanner =",loadDataBanner);
    return { loadDataBanner };
  }
};
</script>

<style>
</style>