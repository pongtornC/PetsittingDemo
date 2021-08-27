<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark ftco-navbar-light">
      <div class="container">
        <!-- Brand -->
        <a href="/" class="navbar-brand mr-0">
          <span class="flaticon-pawprint-1 mr-2"></span>Pet sitting
        </a>

        <div id="ftco-nav" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >Home</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/feedbacks">List Feedbacks</a>
                <a class="dropdown-item" href="/admin/questions">List Questions</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >About</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/banner?bn=0001">Banner</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >Veterinarian</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/banner?bn=0003">Banner</a>
                <a class="dropdown-item" href="/admin/veterinarian">List Veterinarian</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >Services</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/banner?bn=0002">Banner</a>
                <a class="dropdown-item" href="/admin/servicee">List Services</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >Gallery</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/banner?bn=0004">Banner</a>
                <a class="dropdown-item" href="/admin/gallery">List Gallery</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >Pricing</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/banner?bn=0005">Banner</a>
                <a class="dropdown-item" href="/admin/pricing">List Pricing</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >Blog</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/banner?bn=0006">Banner</a>
                <a class="dropdown-item" href="/admin/blog">List Blog</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >Contact</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/admin/contact">List Contact</a>
                <a class="dropdown-item" href="/admin/banner?bn=0007">Banner</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">จัดการระบบหลังบ้าน</h1>
        <p class="lead">สวัสดีคุณ {{username}} - {{userID}}</p>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: "../../js/jquery.min.js"
      },
      {
        src: "../../js/popper.min.js"
      },
      {
        src: "../../js/bootstrap.min.js"
      }
    ]
  },
  data() {
    return {
      userID: "",
      username: ""
    };
  },
  mounted() {
    this.storage();
  },
  methods: {
    storage() {
      this.userID = localStorage.getItem("userID");
      this.username = localStorage.getItem("userName");
    },
    LogOut() {
      alert(1);
    }
  }
};
</script>