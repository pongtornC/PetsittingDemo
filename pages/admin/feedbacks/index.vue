<template>
  <div>
    <div class="container">
      <h2>Feedbacks</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Create</th>
            <th scope="col">Status</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ldf in loadDataFeedbacks" :key="ldf.feedbackid">
            <th scope="row">{{ldf.feedbackid}}</th>
            <td>{{ldf.feedbacktitle}}</td>
            <td>
              <img width="60" v-bind:src="ldf.image" />
            </td>
            <td>{{ldf.username}}</td>
            <td>{{ldf.statusname}}</td>
            <td>
              <a v-bind:href='"/admin/feedbacks/"+ldf.feedbackid' class="btn btn-info">จัดการ</a>
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

    var loadDataFeedbacks = "";
    var pasreData = '{"isAdmin":"true"}';
    var myObj = JSON.parse(pasreData);

    await store.dispatch("getdataFeedback",myObj).then(() => {
      loadDataFeedbacks = store.getters.getHomeFeedback;
    });

    return { loadDataFeedbacks };
  }
};
</script>

<style>
</style>