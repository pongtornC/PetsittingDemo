<template>
  <div>
    <div class="container">
      <h2>Contact</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Create</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ldc in loadDataContact" :key="ldc.contactid">
            <th scope="row">{{ldc.contactid}}</th>
            <td>{{ldc.contactfullname}}</td>
            <td>{{ldc.contactemail}}</td>
            <td>{{ldc.contactsubject}}</td>
            <td>{{ldc.contactmessage}}</td>
            <td>{{ldc.createdate}}</td>
            <td>
              <a v-bind:href='"/admin/contact/"+ldc.contactid' class="btn btn-info">จัดการ</a>
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
  data() {
    return {};
  },
  async asyncData({ route, params, store }) {
    var loadDataContact= "";
    await store.dispatch("getdataContact").then(() => {
      loadDataContact = store.getters.getloadDataContact;
    });
    

    return { loadDataContact };
  }
};
</script>

<style>
</style>