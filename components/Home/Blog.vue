<template>
  <div>
      <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2>Latest news from our blog</h2>
          </div>
        </div>
        <div class="row d-flex">

          <div v-for="x in loadDataBlog" :key="x.articleid" class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <a
                v-bind:href="'/blog/'+x.articleid"
                class="block-20 rounded"
                v-bind:style="{ backgroundImage: 'url(' + x.image + ')' }"
              ></a>
              <div class="text p-4">
                <div class="meta mb-2">
                  <div>
                    <a v-bind:href="'/blog/'+x.articleid">April 07, 2020</a>
                  </div>
                  <div>
                    <a v-bind:href="'/blog/'+x.articleid">{{x.username}}</a>
                  </div>
                </div>
                <h3 class="heading">
                  <a v-bind:href="'/blog/'+x.articleid">
                    {{x.articletitle}}
                    </a>
                </h3>
              </div>
            </div>
          </div>




        </div>


        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props:{
    loadDataBlog:{
      type:Array,
      required:true
    }
  }
}
</script>

<style>

</style>