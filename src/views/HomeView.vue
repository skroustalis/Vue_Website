<template>
      <section class="hero">
        <div class="hero-text container">
          <h4>Vue website project</h4>
          <hr />
          <h2>
            To Showcase <br />
            My Skills
          </h2>
          <hr />
        </div>    
      </section>
      <hr/>
    <div>
      <About />
    </div>
  </template>
  
  <script>
  import About from "../components/About.vue"
  export default { 
    name:"Home",
    components:{
      About
    },
    methods: {
      onButtonClick() {
        this.$router.push({ name: "About" })
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .hero {
    background-image: url("../assets/whiteback.webp");
    background-attachment: fixed;
    position: relative;
    height: 70vh;
    .hero-text {
      padding-top: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #3a393a;
      h4 {
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 4px;
      }
      h2 {
        font-size: 50px;
        @media (min-width: 550px) {
          font-size: 80px;
        }
      }
      hr:nth-child(2) {
        max-width: 365px;
        margin-bottom: 16px;
      }
      hr:nth-child(4) {
        height: 6px;
        background-color: #3a393a;
        border: none;
        max-width: 85px;
        margin-top: 16px;
      }
      @media (max-width: 768px) {
      height: 100%;  
      }    
    }
  }

</style>