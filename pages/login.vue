<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 m-auto">
          <h2 class="mt-5 mb-4">Login</h2>
          <form method="POST" id="contactForm" name="contactForm" class="contactForm">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="label" for="username">UserName</label>
                  <input v-model="DataLogin.username" type="text" class="form-control" name="username" id="username" placeholder="username" />
                </div>
              </div>
              
              <div class="col-md-12">
                <div class="form-group">
                  <label class="label" for="password">Password</label>
                  <input v-model="DataLogin.userpassword" type="password" class="form-control" name="password" id="password" placeholder="password" />
                </div>
              </div>
              
              <div class="col-md-12 text-center">
                <div class="form-group">
                  <input @click="fnsubmit($event)" type="button" value="Login" class="btn btn-primary" />
                  <div class="submitting"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      DataLogin:{
          username:"",
          userpassword:""
      }
    }
  },
  methods:{
    fnsubmit(e){
       e.preventDefault();
       this.$store
        .dispatch("getUserLogin", this.DataLogin)
        .then(() => {
          var dataLogin = this.$store.getters.getDataUserLogin;
          if(dataLogin.status=="fail"){
            this.$store.commit('setDataLogin','');
            alert(dataLogin.alert);
          }
          else{
            this.$store.commit('setDataLogin', this.$store.getters.getDataUserLogin[0]);
            localStorage.setItem("userID",this.$store.getters.getDataUserLogin[0].userid);
            localStorage.setItem("userName",this.$store.getters.getDataUserLogin[0].username);
            localStorage.setItem("userStatus",true);
            this.$router.push('/admin')
          }
        });
    }
  }
};
</script>

<style>
</style>