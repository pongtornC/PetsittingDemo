<template>
  <div>
      
      <div class="container">
      <h2>service</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Service Status</th>
            <th scope="col">Create</th>
            <th scope="col">Status</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lds in loadDataService" :key="lds.serviceid">
            <td scope="row">{{lds.serviceid}}</td>
            <td>{{lds.servicename}}</td>
            <td>{{lds.servicedescription}}</td>
            <td>{{lds.servicestatusname}}</td>
            <td>{{lds.username}}</td>
            <td>{{lds.statusname}}</td>
            <td>
              <a v-bind:href='"/admin/servicee/"+lds.serviceid' class="btn btn-info">จัดการ</a>
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
  async asyncData({ route, params, store }) {
    
    var loadDataService = "";

    var pasreData = '{"isAdmin":"true"}';
    var myObj = JSON.parse(pasreData);

    await store.dispatch("getdataService",myObj).then(() => {
      loadDataService = store.getters.getHomeService;
    });

    //console.log(loadDataService);

    return { loadDataService };
  }
}
</script>

<style>

</style>