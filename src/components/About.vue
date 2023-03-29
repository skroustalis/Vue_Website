<template>
  <section class="about container">
    <div class="about__container ">
      <div class="about__photo">
        <img src="@/assets/avatar.png" alt="A beautiful photo">
      </div>
      <div class="about__text">
        <h1>{{ aboutStore.data.title }}</h1>
        <p>{{ aboutStore.data.paragraph1 }}</p>
        <button @click="toggleText()" v-if="showButton"><span>Show More</span></button>
      </div>
    </div>
      <div v-show="moreText" class="about_more_text container">
        <p> {{ aboutStore.data.paragraph2 }}</p>
      </div>
  </section>   
</template>
  
 <script>
 import aboutStore from "../store/AboutStore";
  export default {
    name:'about',
    data(){
      return{
        moreText: true,
        showButton: null,
        aboutStore
      }
    },
    mounted() {
      aboutStore.mounted.call(this);
    },
    created() {
      aboutStore.created.call(this);
    },
    methods:{
      toggleText(){
        aboutStore.methods.toggleText.call(this);
      }
    }
  };
</script>
  
<style lang="scss" scoped>
  .about__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    height: 100%;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      height: 100%;
      padding: 1.5rem;
    }

    @media (min-width: 780px) {
      margin: 5%;
    }

    .about__photo { img {
      object-fit: contain;
      width: 250px;
      border-radius: 5px;
      box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
      transition: box-shadow 0.3s ease;
       
      }
      @media (max-width: 768px) {
        display: flex;
        height:100%;
        justify-content: center;
      }
    }

    .about__text {
      p{
        @media (min-width: 768px) {
          padding-right: 5rem;
          font-size: 16px;
        }
        @media (max-width: 768px){
          display: flex;
          justify-content: center;   
          padding: 0;
        }
      }
      
      h1{
        color: #3a393a;
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 1.5rem;
      

        @media (max-width: 768px){
            display: flex;
            justify-content: center;   
        }
      }

      button {
        margin-top: 1.5rem;
        padding: 1rem;
        font-size: 1rem;
        cursor: pointer;
        position: relative;
        display: inline-block;
        padding: 15px 30px;
        border: 2px solid #111;
        text-transform: uppercase;
        color: #111;
        text-decoration: none;
        font-weight: 600;

        &::before{
          content: '';
          position: absolute;
          top: 6px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% - 12px);
          background: #f1f1f1;
          transition: 0.5s ease-in-out;
          transform: scaleY(1);
          transition-delay: 0.5s;
        }

        &:hover::before{
           transform: scaleY(0);
        }

        &::after{
          content: '';
          position: absolute;
          left: 6px;
          top: -2px;
          height: calc(100% + 4px);
          width: calc(100% - 12px);
          background: #f1f1f1;
          transition: 0.5s ease-in-out;
          transform: scaleX(1);
        }

        &:hover::after{
           transform: scaleX(0);
        }

        span{
          position: relative;
          z-index: 3;
        }
      }
    }
  }

  .about_more_text{
    margin-bottom: 1.5rem;
    animation: fade-in 1.2s ease;
    animation-fill-mode: forwards;

    p{
      @media (min-width: 769px) {
        padding-right: 5rem;
        font-size: 16px;
        //margin-left: 5%;
        //margin-right: 5%;
      }
      @media (max-width: 768px){
          display: flex;
          justify-content: center;   
          padding: 0;
        }
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>

