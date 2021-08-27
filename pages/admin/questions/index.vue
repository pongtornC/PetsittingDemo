<template>
  <div>
      
      <div class="container">
      <h2>Questions</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Create</th>
            <th scope="col">Status</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ldq in loadDataQuestion" :key="ldq.questionid">
            <th scope="row">{{ldq.questionid}}</th>
            <td>{{ldq.questionname}}</td>
            <td>{{ldq.username}}</td>
            <td>{{ldq.statusname}}</td>
            <td>
              <a v-bind:href='"/admin/questions/"+ldq.questionid' class="btn btn-info">จัดการ</a>
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
    
    var loadDataQuestion = "";
    var pasreData = '{"isAdmin":"true"}';
    var myObj = JSON.parse(pasreData);

    await store.dispatch("getdataQuestion",myObj).then(() => {
      loadDataQuestion = store.getters.getHomeQuestion;
    });

    return { loadDataQuestion };
  }
}
</script>

<style>

</style>