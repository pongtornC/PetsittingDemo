<template>
  <div>
    <h1>Banner - {{DataBanner.bannername}}</h1>

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
                <label for="bannerid">Banner ID</label>
                <input v-model="DataBanner.bannerid" type="text" class="form-control" name="bannerid" id="bannerid" readonly />
              </div>

              <div class="form-group">
                <label for="bannername">Banner Name</label>
                <input v-model="DataBanner.bannername" type="text" class="form-control" name="bannername" id="bannername" />
              </div>

              <div class="form-group">
                <label for="bannerbreadcrumbs">Banner Breadcrumbs</label>
                <input v-model="DataBanner.bannerbreadcrumbs" type="text" class="form-control" name="bannerbreadcrumbs" id="bannerbreadcrumbs" />
              </div>

              <div class="form-group">
                <label for="bannerdescription">Banner Description</label>
                <textarea v-model="DataBanner.bannerdescription" type="text" rows="5" class="form-control" name="bannerdescription" id="bannerdescription" />
              </div>

               <input v-model="DataBanner.userid" type="hidden" class="form-control" />

               <input v-model="DataBanner.createdate" type="hidden" class="form-control" />

              <div class="form-group">
                <label for="bannerimage">Image</label>
                <input v-model="DataBanner.image" type="text" class="form-control" name="bannerimage" id="bannerimage" />
              </div>
              <button @click="fnsubmit" type="button" class="btn btn-success btn-lg float-right" id="btnLogin">Save</button>
            </form>
          </div>
          <!--/card-body-->
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
      DataBanner:{
      }
    };
  },
  async asyncData({ route, params, store }) {
    var DataBannerID = route.query.bn;
    var StatusPage = "";
    var DataBanner = "";
    await store.dispatch("getDataBanner", DataBannerID).then(() => {
      StatusPage = store.getters.getDataStatusPage;
      DataBanner = store.getters.getDataSubBanner;
    });
    console.log("DataBanner =",DataBanner);
    return { StatusPage, DataBanner };
  },
  methods:{
    fnsubmit(e){

      e.preventDefault();
       this.$store
        .dispatch("updateBannerAdmin", this.DataBanner)
        .then(() => {
          alert("บันทึกข้อมูลเรียบร้อยแล้ว");
        });

    }
  }
};
</script>

<style>
</style>