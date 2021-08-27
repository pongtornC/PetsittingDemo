<template>
  <div>
    <Top />
    <!-- Top -->
    <Header />
    <!-- Header -->
    <Nuxt />
    <Footer />
    <!-- footer -->
    <!-- <Loader />
    loader-->

    <script src="../js/jquery.min.js"></script>
    <script src="../js/jquery-migrate-3.0.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.easing.1.3.js"></script>
    <script src="../js/jquery.waypoints.min.js"></script>
    <script src="../js/jquery.stellar.min.js"></script>
    <script src="../js/jquery.animateNumber.min.js"></script>
    <script src="../js/bootstrap-datepicker.js"></script>
    <script src="../js/jquery.timepicker.min.js"></script>
    <script src="../js/owl.carousel.min.js"></script>
    <script src="../js/jquery.magnific-popup.min.js"></script>
    <script src="../js/scrollax.min.js"></script>
    <script src="../js/main.js"></script>
  </div>
</template>

<script>
import Top from "@/components/Master/Top.vue";
import Header from "@/components/Master/Header.vue";
import Footer from "@/components/Master/Footer.vue";
import Loader from "@/components/Master/Loader.vue";

export default {
  components: {
    Top,
    Header,
    Footer,
    Loader
  }
};
</script>
