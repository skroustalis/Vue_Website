<template>
    <div class="home">
      <section class="hero">
        <div class="hero-text container">
          <h4>Vue website project</h4>
          <hr />
          <h2>
            To Showcase <br />
            My Skills
          </h2>
          <hr />
          <button @click="onButtonClick">About</button>
        </div>    
      </section>
    </div>
    <hr />
    <div>
      <About />
    </div>
  </template>
  
  <script>
  import About from "./About.vue"
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
    height: 80vh;
    
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
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

      button {
        margin-top: 1.5rem;
        width: 20%;
        background-color: #333;
        color: #fff;
        padding: 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        transition: backround-color 0.3s ease;
        cursor: pointer;


        &:hover{
            background-color: #555;
        }
      }
      @media (max-width: 768px) {
      height: 100%;  
      }    
    }
  }
  

  </style>