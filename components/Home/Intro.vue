<template>
  <div>
    <section class="ftco-section bg-light ftco-no-pt ftco-intro section-service">
      <div class="container">
        <div class="row">
          <div
            v-for="lds in loadDataHomeService"
            :key="lds.serviceid"
            class="service-block col-md-4 d-flex align-self-stretch px-4 ftco-animate"
          >
            <div class="d-block services active text-center">
              <div class="icon d-flex align-items-center justify-content-center">
                <span :class="getIcon(lds.servicestatusid)"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">{{lds.servicename}}</h3>
                <p>{{lds.servicedescription}}</p>
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
export default {
  props: {
    loadDataHomeService: {
      type: Array,
      required: true
    }
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