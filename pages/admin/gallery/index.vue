<template>
  <div>
      
      <div class="container">
      <h2>Gallery</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Create</th>
            <th scope="col">Status</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ldg in loadDataGallery" :key="ldg.galleryid">
            <th scope="row">{{ldg.galleryid}}</th>
            <td>{{ldg.galleryname}}</td>
            <td>{{ldg.gallerydescription}}</td>
            <td>
              <img width="60" v-bind:src="ldg.image" />
            </td>
            <td>{{ldg.categoryname}}</td>
            <td>{{ldg.username}}</td>
            <td>{{ldg.statusname}}</td>
            <td>
              <a v-bind:href='"/admin/gallery/"+ldg.galleryid' class="btn btn-info">จัดการ</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "AdminLayout",
    data(){
      return {
    }
  },
  async asyncData({ route, params, store }) {
    
    var loadDataGallery = store.getters.getHomeGallery;

    var pasreData = '{"isAdmin":"true"}';
    var myObj = JSON.parse(pasreData);

    await store.dispatch("getdataGallery",myObj).then(() => {
      loadDataGallery = store.getters.getHomeGallery;
    });

    return { loadDataGallery };
  }
}
</script>

<style>

</style>