<template>
  
  <div>
    
    <h1>Edit Feedbacks ID {{feedbacksID}}</h1>
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
                <label for="feedbacktitle">Feedbacks Title</label>
                <input v-model="loadDataFeedbacks.feedbacktitle" type="text" class="form-control" name="feedbacktitle" id="feedbacktitle" />
              </div>

              <div class="form-group">
                <label for="feedbackname">Feedbacks Name</label>
                <input v-model="loadDataFeedbacks.feedbackname" type="text" class="form-control" name="feedbackname" id="feedbackname" />
              </div>

               <div class="form-group">
                <label for="feedbackposition">Feedbacks Position</label>
                <input v-model="loadDataFeedbacks.feedbackposition" type="text" class="form-control" name="feedbackposition" id="feedbackposition" />
              </div>

              <div class="form-group">
                <label for="feedbackdescription">Feedbacks Description</label>
                <textarea v-model="loadDataFeedbacks.feedbackdescription" type="text" rows="5" class="form-control" name="feedbackdescription" id="feedbackdescription" />
              </div>

              <div class="form-group">
                <label for="Blogimage">Image</label>
                <input v-model="loadDataFeedbacks.image" type="text" class="form-control" name="Blogimage" id="Blogimage" />
              </div>


              <div class="form-group">
                <label>Status</label>
                <select class="form-control"
                  v-model="loadDataFeedbacks.statusid"
                >
                    <option 
                      v-for="ds in DataStatus" 
                      :key="ds.statusid" 
                      :value="ds.statusid"
                      :selected="loadDataFeedbacks.statusid === ds.statusid"
                    >
                      {{ds.statusname}}
                    </option>
                </select>  
              </div>

              <input v-model="loadDataFeedbacks.createby" type="hidden" class="form-control" />

               <input v-model="loadDataFeedbacks.createdate" type="hidden" class="form-control" />

              <button @click="fnsubmit" type="button" class="btn btn-success btn-lg float-right" id="btnLogin">Save</button>
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
      loadDataFeedbacks:{
      }
    };
  },
  async asyncData({ $axios, params, store, route }) {
    const feedbacksID = params.id;
    var DataStatus = store.getters.getloadDataStatus;
    var loadDataFeedbacks= "";
    var pasreData ='{"dataid":"'+feedbacksID+'"}';
    var myObj = JSON.parse(pasreData);
    await store.dispatch("getFeedbacksByID", myObj).then(() => {
      loadDataFeedbacks = store.getters.getloadDataFeedbacksByID[0];
    });
    return { feedbacksID, loadDataFeedbacks, DataStatus};
  },
  methods:{
    fnsubmit(e){
       e.preventDefault();
     //  console.log(this.loadDataFeedbacks);
        this.$store
        .dispatch("updateFeedbacksAdmin", this.loadDataFeedbacks)
        .then(() => {
           this.$router.push("/admin/feedbacks");
        });
    }
  }
};
</script>

<style>

</style>