<template>
  
  <div>
      
      <div class="container">
      <h2>Pricing</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">price</th>
            <th scope="col">Image</th>
            <th scope="col">Create</th>
            <th scope="col">Status</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ldp in loadDataPricing" :key="ldp.packageid">
            <td scope="row">{{ldp.packageid}}</td>
            <td>{{ldp.packagename}}</td>
            <td>{{ldp.price}}</td>
            <td>
              <img width="60" v-bind:src="ldp.image" />
            </td>
            <td>{{ldp.username}}</td>
            <td>{{ldp.statusname}}</td>
            <td>
              <a v-bind:href='"/admin/pricing/"+ldp.packageid' class="btn btn-info">จัดการ</a>
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
    
    var loadDataPricing = "";
    var pasreData = '{"isAdmin":"true"}';
    var myObj = JSON.parse(pasreData);

    await store.dispatch("getdataPackage",myObj).then(() => {
      loadDataPricing = store.getters.getHomePackage;
    });

    return { loadDataPricing };
  }
}
</script>

<style>

</style>