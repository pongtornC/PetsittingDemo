<template>
  
  <div>
    
    <h1>Edit Blog ID {{BlogID}}</h1>
    
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
                <label for="bannerid">Article Name</label>
                <input v-model="loadDataBlog.articlename" type="text" class="form-control" name="articlename" id="articlename" />
              </div>

              <div class="form-group">
                <label for="articletitle">Article Title</label>
                <input v-model="loadDataBlog.articletitle" type="text" class="form-control" name="articletitle" id="articletitle" />
              </div>

              <div class="form-group">
                <label for="articledescription">Article Description</label>
                <textarea v-model="loadDataBlog.articledescription" type="text" rows="5" class="form-control" name="articledescription" id="articledescription" />
              </div>

              <div class="form-group">
                <label for="Blogimage">Image</label>
                <input v-model="loadDataBlog.image" type="text" class="form-control" name="Blogimage" id="Blogimage" />
              </div>

              <div class="form-group">
                <label for="paragraph">Paragraph</label>
                <textarea v-model="loadDataBlog.paragraph" type="text" rows="5" class="form-control" name="paragraph" id="paragraph" />
              </div>

              <div class="form-group">
                <label for="articletag">Article Tag</label>
                <input v-model="loadDataBlog.articletag" type="text" class="form-control" name="articletag" id="articletag" />
              </div>

              <div class="form-group">
                <label>Status</label>
                <select class="form-control"
                  v-model="loadDataBlog.statusid"
                >
                    <option 
                      v-for="ds in DataStatus" 
                      :key="ds.statusid" 
                      :value="ds.statusid"
                      :selected="loadDataBlog.statusid === ds.statusid"
                    >
                      {{ds.statusname}}
                    </option>
                </select>  
              </div>

              <input v-model="loadDataBlog.userid" type="hidden" class="form-control" />

               <input v-model="loadDataBlog.createdate" type="hidden" class="form-control" />

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
      loadDataBlog:{
        articlename:"",
        articletitle:"",
        articledescription:"",
        image:"",
        paragraph:"",
        articletag:"",
        userid:"",
        createdate:"",
        status:""
      }
    };
  },
  async asyncData({ $axios, params, store, route }) {
    const BlogID = params.id;
    var DataStatus = store.getters.getloadDataStatus;
    var loadDataBlog= "";
    var pasreData ='{"dataid":"'+BlogID+'"}';
    var myObj = JSON.parse(pasreData);
    await store.dispatch("getBlogByID", myObj).then(() => {
      loadDataBlog = store.getters.getBlogByID[0];
    });
    return { BlogID, loadDataBlog, DataStatus};
  },
  methods:{
    fnsubmit(e){
       e.preventDefault();

this.$store
        .dispatch("updateBlogAdmin", this.loadDataBlog)
        .then(() => {
          //alert("บันทึกข้อมูลเรียบร้อยแล้ว");
           this.$router.push("/admin/blog");
        });
    }
  }
};
</script>

<style>
</style>