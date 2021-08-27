<template>
  <div>
    <div class="container">
      <h2>Blog</h2>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Status</th>
            <th scope="col">Create</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ldb in loadDataBlog" :key="ldb.articleid">
            <th scope="row">{{ldb.articleid}}</th>
            <td>{{ldb.articlename}}</td>
            <td>{{ldb.articletitle}}</td>
            <td>
              <img width="60" v-bind:src="ldb.image" />
            </td>
            <td>{{ldb.statusname}}</td>
            <td>{{ldb.username}}</td>
            <td>
              <a v-bind:href='"/admin/blog/"+ldb.articleid' class="btn btn-info">จัดการ</a>
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
    var loadDataBlog = "";

    var pasreData = '{"isAdmin":"true"}';
    var myObj = JSON.parse(pasreData);

    await store.dispatch("getdataBlog",myObj).then(() => {
      loadDataBlog = store.getters.getHomeBlog;
    });

    return { loadDataBlog };
  }
};
</script>

<style>
</style>