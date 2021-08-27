<template>
  
  <div>
    
    <h1>Edit Gallery ID {{GalleryID}}</h1>
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
                <label for="bannerid">Gallery Name</label>
                <input v-model="loadDataGallery.galleryname" type="text" class="form-control" name="galleryname" id="galleryname" />
              </div>

              <div class="form-group">
                <label for="gallerydescription">Gallery Description</label>
                <textarea v-model="loadDataGallery.gallerydescription" type="text" rows="5" class="form-control" name="gallerydescription" id="gallerydescription" />
              </div>

              <div class="form-group">
                <label for="Blogimage">Image</label>
                <input v-model="loadDataGallery.image" type="text" class="form-control" name="Blogimage" id="Blogimage" />
              </div>

              <div class="form-group">
                <label>Category</label>
                <select class="form-control"
                  v-model="loadDataGallery.categoryid"
                >
                    <option 
                      v-for="dc in DataCategory" 
                      :key="dc.categoryid" 
                      :value="dc.categoryid"
                      :selected="loadDataGallery.categoryid === dc.categoryid"
                    >
                    {{dc.categoryname}}
                    </option>
                </select>  
              </div>

              <div class="form-group">
                <label>Status</label>
                <select class="form-control"
                  v-model="loadDataGallery.statusid"
                >
                    <option 
                      v-for="ds in DataStatus" 
                      :key="ds.statusid" 
                      :value="ds.statusid"
                      :selected="loadDataGallery.statusid === ds.statusid"
                    >
                      {{ds.statusname}}
                    </option>
                </select>  
              </div>

              <input v-model="loadDataGallery.userid" type="hidden" class="form-control" />

               <input v-model="loadDataGallery.createdate" type="hidden" class="form-control" />

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
      loadDataGallery:{
        galleryname:"",
        gallerydescription:"",
        image:"",
        categoryid:"",
        statusid:"",
        createby:"",
        userid:"",
        createdate:""
      }
    };
  },
  async asyncData({ $axios, params, store, route }) {
    const GalleryID = params.id;
    var DataStatus = store.getters.getloadDataStatus;
    var DataCategory = store.getters.getloadDataCategory;
    var loadDataGallery= "";
    var pasreData ='{"dataid":"'+GalleryID+'"}';
    var myObj = JSON.parse(pasreData);
    await store.dispatch("getGalleryByID", myObj).then(() => {
      loadDataGallery = store.getters.getloadDataGalleryByID[0];
    });
    return { GalleryID, loadDataGallery, DataStatus, DataCategory};
  },
  methods:{
    fnsubmit(e){
       e.preventDefault();
        this.$store
        .dispatch("updateGalleryAdmin", this.loadDataGallery)
        .then(() => {
           this.$router.push("/admin/gallery");
        });
    }
  }
};
</script>

<style>

</style>