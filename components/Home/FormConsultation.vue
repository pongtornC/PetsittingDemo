<template>
  <div>
    <section
      class="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img"
      style="background-image: url(images/bg_3.jpg);"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row d-md-flex justify-content-end">
          <div class="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5 ftco-animate">
            <h2 class="mb-4">Free Consultation</h2>
            <form class="appointment">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-field">
                      <div class="select-wrap">
                        <div class="icon">
                          <span class="fa fa-chevron-down"></span>
                        </div>
                        <select v-model="DataConsultation.services" class="form-control">
                          <option disabled value>Select option</option>
                          <option
                            v-for="x in loadDataService"
                            :key="x.serviceid"
                            v-bind:value="x.serviceid"
                          >{{x.servicename}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      v-model="DataConsultation.name"
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      v-model="DataConsultation.vehiclenumber"
                      type="text"
                      class="form-control"
                      placeholder="Vehicle number"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-wrap">
                      <div class="icon">
                        <span class="fa fa-calendar"></span>
                      </div>
                      <input type="text" class="form-control appointment_date" placeholder="Date" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-wrap">
                      <div class="icon">
                        <span class="fa fa-clock-o"></span>
                      </div>
                      <input type="text" class="form-control appointment_time" placeholder="Time" />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      v-model="DataConsultation.message"
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      v-on:click="onSubmitForm($event)"
                      type="button"
                      value="Send message"
                      class="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
export default {
  data() {
    return {
      DataConsultation: {
        name: "",
        services: "",
        vehiclenumber: "",
        message: "",
        date: "",
        time: ""
      }
    };
  },
  props: {
    loadDataService: {
      type: Array,
      required: true
    }
  },
  mounted() {},
  methods: {
    async onSubmitForm(e) {
      e.preventDefault();
      var txtdate = document.getElementsByClassName("appointment_date");
      var txttime = document.getElementsByClassName("appointment_time");
      this.DataConsultation.date = txtdate[0].value;
      this.DataConsultation.time = txttime[0].value;
      //console.log("test =", this.DataConsultation);
      if (
        this.DataConsultation.name == "" ||
        this.DataConsultation.services == "" ||
        this.DataConsultation.vehiclenumber == "" ||
        this.DataConsultation.message == "" ||
        this.DataConsultation.date == "" ||
        this.DataConsultation.time == ""
      ) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return false;
      }
       this.$store
        .dispatch("addConsultation", this.DataConsultation)
        .then(() => {
          alert("เราได้รับข้อมูลของคุณเรียบร้อยแล้ว");
            this.DataConsultation.name = "";
                this.DataConsultation.services = "";
                this.DataConsultation.vehiclenumber = "";
                this.DataConsultation.message = "";
                document.getElementsByClassName("appointment_date")[0].value='';
                document.getElementsByClassName("appointment_time")[0].value='';
          //*
        });
    }
  }
};
</script>

<style>
</style>