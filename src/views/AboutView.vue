
  <template>
    <div class="about-view">
      <Banner />
      <About />
    </div>
  </template>
  
  <script>
  import About from "../components/About.vue"
  import Banner from "../components/Banner.vue"
  export default { 
    components:{
      About,
      Banner
    }
  };
  </script>
  
  <style lang="scss" scoped>

  </style>