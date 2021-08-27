<template>
  <div>
    <h1>Edit Pricing ID {{PricingID}}</h1>
    <!--
    {{loadDataGallery.galleryname}}-->

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card card-outline-secondary">
          <div class="card-header">
            <h3 class="mb-0">รายละเอียด</h3>
          </div>
          <div class="card-body">
            <form
              class="form"
              role="form"
              autocomplete="off"
              id="loginForm"
              novalidate
              method="POST"
            >
              <div class="form-group">
                <label for="bannerid">Package Name</label>
                <input
                  v-model="loadDataPricing.packagename"
                  type="text"
                  class="form-control"
                  name="packagename"
                  id="packagename"
                />
              </div>

              <div class="form-group">
                <label for="bannerid">Price</label>
                <input
                  v-model="loadDataPricing.price"
                  type="text"
                  class="form-control"
                  name="price"
                  id="price"
                />
              </div>

              <div class="form-group">
                <label for="detail1">Detail1</label>
                <input
                  v-model="loadDataPricing.detail1"
                  type="text"
                  class="form-control"
                  name="detail1"
                  id="detail1"
                />
              </div>

              <div class="form-group">
                <label for="detail1">Detail2</label>
                <input
                  v-model="loadDataPricing.detail2"
                  type="text"
                  class="form-control"
                  name="detail2"
                  id="detail2"
                />
              </div>

              <div class="form-group">
                <label for="detail3">Detail3</label>
                <input
                  v-model="loadDataPricing.detail3"
                  type="text"
                  class="form-control"
                  name="detail3"
                  id="detail3"
                />
              </div>

              <div class="form-group">
                <label for="detail4">detail4</label>
                <input
                  v-model="loadDataPricing.detail4"
                  type="text"
                  class="form-control"
                  name="detail4"
                  id="detail4"
                />
              </div>

              <div class="form-group">
                <label for="buttontext">Button Text</label>
                <input
                  v-model="loadDataPricing.buttontext"
                  type="text"
                  class="form-control"
                  name="buttontext"
                  id="buttontext"
                />
              </div>

              <div class="form-group">
                <label for="redirect">Redirect</label>
                <input
                  v-model="loadDataPricing.redirect"
                  type="text"
                  class="form-control"
                  name="redirect"
                  id="redirect"
                />
              </div>

              <div class="form-group">
                <label for="image">Image</label>
                <input
                  v-model="loadDataPricing.image"
                  type="text"
                  class="form-control"
                  name="image"
                  id="image"
                />
              </div>

              

              <div class="form-group">
                <label>Status</label>
                <select class="form-control" v-model="loadDataPricing.statusid">
                  <option
                    v-for="ds in DataStatus"
                    :key="ds.statusid"
                    :value="ds.statusid"
                    :selected="loadDataPricing.statusid === ds.statusid"
                  >{{ds.statusname}}</option>
                </select>
              </div>

              <input v-model="loadDataPricing.createby" type="hidden" class="form-control" />

              <input v-model="loadDataPricing.createdate" type="hidden" class="form-control" />

              <button
                @click="fnsubmit"
                type="button"
                class="btn btn-success btn-lg float-right"
                id="btnLogin"
              >Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: "AdminLayout",
  data() {
    return {
      loadDataPricing: {
        packagename: "",
        image: "",
        price: "",
        detail1: "",
        detail2: "",
        detail3: "",
        detail4: "",
        buttontext: "",
        redirect: "",
        statusid: "",
        statusname: "",
        createby: "",
        username: "",
        createdate: ""
      }
    };
  },
  async asyncData({ $axios, params, store, route }) {
    const PricingID = params.id;
    var DataStatus = store.getters.getloadDataStatus;
    var loadDataPricing = "";
    var pasreData = '{"dataid":"' + PricingID + '"}';
    var myObj = JSON.parse(pasreData);
    await store.dispatch("getpackageByID", myObj).then(() => {
      loadDataPricing = store.getters.getloadDataPackgeByID[0];
    });
    
    return { PricingID, loadDataPricing, DataStatus };
  },
  methods: {
    fnsubmit(e) {
      e.preventDefault();
      this.$store
        .dispatch("updatePricingAdmin", this.loadDataPricing)
        .then(() => {
          this.$router.push("/admin/pricing");
        });

     
    }
  }
};
</script>

<style>
</style>