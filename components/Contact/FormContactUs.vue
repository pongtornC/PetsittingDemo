<template>
  <div>
    <form method="POST" id="contactForm" name="contactForm" class="contactForm">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label" for="name">Full Name</label>
            <input v-model="DataContact.fullname" type="text" class="form-control" name="name" id="name" placeholder="Name" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label" for="email">Email Address</label>
            <input v-model="DataContact.email" type="email" class="form-control" name="email" id="email" placeholder="Email" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="label" for="subject">Subject</label>
            <input
              v-model="DataContact.subject"
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="label" for="#">Message</label>
            <textarea
              v-model="DataContact.message"
              name="message"
              class="form-control"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input @click="sbcontact" type="button" value="Send Message" class="btn btn-primary" />
            <div class="submitting"></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    data() {
    return {
      DataContact:{
          fullname:"",
          email:"",
          subject:"",
          message:""
      }
    };
  },
  methods:{
      sbcontact(e){
          e.preventDefault();
          
       this.$store
        .dispatch("addContact", this.DataContact)
        .then(() => {
          alert("เราได้รับข้อมูลของคุณเรียบร้อยแล้ว");
          this.DataContact.fullname="";
          this.DataContact.email="";
          this.DataContact.subject="";
          this.DataContact.message="";
        });
      }
  }
};
</script>

<style>
</style>