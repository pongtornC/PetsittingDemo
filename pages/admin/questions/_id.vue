<template>
  
  <div>
    
    <h1>Edit Questions ID {{QuestionsID}}</h1>
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
                <label for="questionname">Question Name</label>
                <input v-model="loadDataQuestions.questionname" type="text" class="form-control" name="questionname" id="questionname" />
              </div>

              <div class="form-group">
                <label for="questiondescription">Question Description</label>
                <textarea v-model="loadDataQuestions.questiondescription" type="text" rows="5" class="form-control" name="questiondescription" id="questiondescription" />
              </div>

              <div class="form-group">
                <label>Status</label>
                <select class="form-control"
                  v-model="loadDataQuestions.statusid"
                >
                    <option 
                      v-for="ds in DataStatus" 
                      :key="ds.statusid" 
                      :value="ds.statusid"
                      :selected="loadDataQuestions.statusid === ds.statusid"
                    >
                      {{ds.statusname}}
                    </option>
                </select>  
              </div>

              <input v-model="loadDataQuestions.createby" type="hidden" class="form-control" />

               <input v-model="loadDataQuestions.createdate" type="hidden" class="form-control" />

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
      loadDataQuestions:{
      }
    };
  },
  async asyncData({ $axios, params, store, route }) {
    const QuestionsID = params.id;
    var DataStatus = store.getters.getloadDataStatus;
    var loadDataQuestions= "";
    var pasreData ='{"dataid":"'+QuestionsID+'"}';
    var myObj = JSON.parse(pasreData);
    await store.dispatch("getQuestionsByID", myObj).then(() => {
      loadDataQuestions = store.getters.getloadDataQuestionsByID[0];
    });
    return { QuestionsID, loadDataQuestions, DataStatus};
  },
  methods:{
    fnsubmit(e){
       e.preventDefault();
       this.$store
        .dispatch("updatequestionsAdmin", this.loadDataQuestions)
        .then(() => {
           this.$router.push("/admin/questions");
        });
    }
  }
};
</script>

<style>

</style>