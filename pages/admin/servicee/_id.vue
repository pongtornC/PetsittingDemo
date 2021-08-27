<template>
  <div>
    <h1>Edit Service ID {{ServiceID}}</h1>

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
                <label for="servicename">Service Name</label>
                <input
                  v-model="loadDataService.servicename"
                  type="text"
                  class="form-control"
                  name="servicename"
                  id="servicename"
                />
              </div>

              <div class="form-group">
                <label for="servicedescription">Description</label>
                <textarea
                  rows="5"
                  v-model="loadDataService.servicedescription"
                  type="text"
                  class="form-control"
                  name="servicedescription"
                  id="servicedescription"
                ></textarea>
              </div>

              <div class="form-group">
                <label>Service Status</label>
                <select class="form-control" v-model="loadDataService.servicestatusid">
                  <option
                    v-for="dss in DataServiceStatus"
                    :key="dss.servicestatusid"
                    :value="dss.servicestatusid"
                    :selected="loadDataService.servicestatusid === dss.servicestatusid"
                  >{{dss.servicestatusname}}</option>
                </select>
              </div>

              <div class="form-group">
                <label>Status</label>
                <select class="form-control" v-model="loadDataService.statusid">
                  <option
                    v-for="ds in DataStatus"
                    :key="ds.statusid"
                    :value="ds.statusid"
                    :selected="loadDataService.statusid === ds.statusid"
                  >{{ds.statusname}}</option>
                </select>
              </div>

              <input v-model="loadDataService.createby" type="hidden" class="form-control" />

              <input v-model="loadDataService.createdate" type="hidden" class="form-control" />

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
      loadDataService: {
        serviceid:"",
        servicename:"",
        servicedescription:"",
        servicestatusid:"",
        statusid:"",
        createby:"",
        createdate:""
      }
    };
  },
  async asyncData({ $axios, params, store, route }) {
    const ServiceID = params.id;
    var DataStatus = store.getters.getloadDataStatus;
    var DataServiceStatus = store.getters.getloadDataServiceStatus;
    var loadDataService = "";
    var pasreData = '{"dataid":"' + ServiceID + '"}';
    var myObj = JSON.parse(pasreData);
    await store.dispatch("getServiceByID", myObj).then(() => {
      loadDataService = store.getters.getloadDataServiceByID[0];
    });
    
    return { ServiceID, loadDataService, DataStatus, DataServiceStatus };
  },
  methods: {
    fnsubmit(e) {
      e.preventDefault();

      console.log(this.loadDataService);
      this.$store
        .dispatch("updateServiceAdmin", this.loadDataService)
        .then(() => {
          this.$router.push("/admin/servicee");
        });

     /**/
    }
  }
};
</script>

<style>
</style>