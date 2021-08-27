<template>
  <div>
    <h1>Edit Veterinarian ID {{VeterinarianID}}</h1>
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
                <label for="doctorname">Doctor Name</label>
                <input
                  v-model="loadDataVeterinarian.doctorname"
                  type="text"
                  class="form-control"
                  name="doctorname"
                  id="doctorname"
                />
              </div>

              <div class="form-group">
                <label for="image">Image</label>
                <input
                  v-model="loadDataVeterinarian.image"
                  type="text"
                  class="form-control"
                  name="image"
                  id="image"
                />
              </div>

              <div class="form-group">
                <label for="twitter">Twitter</label>
                <input
                  v-model="loadDataVeterinarian.twitter"
                  type="text"
                  class="form-control"
                  name="twitter"
                  id="twitter"
                />
              </div>

              <div class="form-group">
                <label for="facebook">Facebook</label>
                <input
                  v-model="loadDataVeterinarian.facebook"
                  type="text"
                  class="form-control"
                  name="facebook"
                  id="facebook"
                />
              </div>

              <div class="form-group">
                <label for="gmail">Gmail</label>
                <input
                  v-model="loadDataVeterinarian.gmail"
                  type="text"
                  class="form-control"
                  name="gmail"
                  id="gmail"
                />
              </div>

              <div class="form-group">
                <label for="instagram">Instagram</label>
                <input
                  v-model="loadDataVeterinarian.instagram"
                  type="text"
                  class="form-control"
                  name="instagram"
                  id="instagram"
                />
              </div>

              <div class="form-group">
                <label for="doctordescription">Description</label>
                <textarea
                  rows="5"
                  v-model="loadDataVeterinarian.doctordescription"
                  type="text"
                  class="form-control"
                  name="doctordescription"
                  id="doctordescription"
                ></textarea>
              </div>

              <div class="form-group">
                <label>Service Status</label>
                <select class="form-control" v-model="loadDataVeterinarian.positionid">
                  <option
                    v-for="dp in DataPosition"
                    :key="dp.positionid"
                    :value="dp.positionid"
                    :selected="loadDataVeterinarian.servicestatusid === dp.positionid"
                  >{{dp.positionname}}</option>
                </select>
              </div>

              <div class="form-group">
                <label>Status</label>
                <select class="form-control" v-model="loadDataVeterinarian.statusid">
                  <option
                    v-for="ds in DataStatus"
                    :key="ds.statusid"
                    :value="ds.statusid"
                    :selected="loadDataVeterinarian.statusid === ds.statusid"
                  >{{ds.statusname}}</option>
                </select>
              </div>

              <input v-model="loadDataVeterinarian.username" type="hidden" class="form-control" />

              <input v-model="loadDataVeterinarian.createdate" type="hidden" class="form-control" />

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
      loadDataVeterinarian: {
      }
    };
  },
  async asyncData({ $axios, params, store, route }) {
    const VeterinarianID = params.id;
    var DataStatus = store.getters.getloadDataStatus;
    var DataPosition= store.getters.getloadDataPosition;
    
    var loadDataVeterinarian = "";
    var pasreData = '{"dataid":"' + VeterinarianID + '"}';
    var myObj = JSON.parse(pasreData);
    await store.dispatch("getVeterinarianByID", myObj).then(() => {
      loadDataVeterinarian = store.getters.getloadDataVeterinarianeByID[0];
    });
    
    return { VeterinarianID, loadDataVeterinarian, DataStatus, DataPosition };
  },
  methods: {
    fnsubmit(e) {
      e.preventDefault();
      this.$store
        .dispatch("updateVeterinarianAdmin", this.loadDataVeterinarian)
        .then(() => {
          this.$router.push("/admin/veterinarian");
        });

    }
  }
};
</script>

<style>
</style>