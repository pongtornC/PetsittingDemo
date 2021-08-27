<template>
   <div>
      
      <div class="container">
      <h2>Veterinarian</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Position</th>
            <th scope="col">Create</th>
            <th scope="col">Status</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ldd in loadDataDoctor" :key="ldd.doctorid">
            <td scope="row">{{ldd.doctorid}}</td>
            <td>{{ldd.doctorname}}</td>
            <td>{{ldd.doctordescription}}</td>
            <td>
              <img width="60" v-bind:src="ldd.image" />
            <td>
              {{ldd.positionname}}
            </td>
            <td>{{ldd.username}}</td>
            <td>{{ldd.statusname}}</td>
            <td>
              <a v-bind:href='"/admin/veterinarian/"+ldd.doctorid' class="btn btn-info">จัดการ</a>
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
    
    var loadDataDoctor = "";
    var pasreData = '{"isAdmin":"true"}';
    var myObj = JSON.parse(pasreData);

    await store.dispatch("getdataDoctor",myObj).then(() => {
      loadDataDoctor = store.getters.getDoctorData;
    });

    return { loadDataDoctor };
  }
}
</script>

<style>

</style>