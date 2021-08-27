<template>
  <div>
    <br />
    <br />
     Upload File
    <br />
    <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
    <br />
    <br />
    <button type="button" @click="uploadFile()">Upload file</button>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
 // layout: "AdminLayout",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    uploadFile(e) {
        let formData = new FormData();
        formData.append('file', this.file);//
        this.$store
        .dispatch("updateFile", formData)
        .then(() => {
          // this.$router.push("/admin/gallery");
        });
    },
     onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      }
  }
};
</script>

<style>
</style>