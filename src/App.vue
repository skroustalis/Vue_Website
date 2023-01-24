<template>
  <div class="app">
    <Navbar />
      <router-view /> 
    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components:{
    Navbar,
    Footer,
 }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wight@400;500&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

</style>