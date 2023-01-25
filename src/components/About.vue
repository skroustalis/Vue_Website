<template>
  <section class="about container">
    <div class="about__container ">
      <div class="about__photo">
        <img src="@/assets/avatar.png" alt="A beautiful photo">
      </div>
      <div class="about__text">
        <h1>Demo Text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor magna id 
          lacus convallis, euismod auctor nibh congue. Sed eget risus euismod, 
          bibendum velit id, laoreet augue. Praesent velit metus, convallis at 
          velit id, malesuada congue nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor magna id 
          lacus convallis, euismod auctor nibh congue. Sed eget risus euismod, 
          bibendum velit id, laoreet augue. Praesent velit metus, convallis at 
          velit id, malesuada congue nunc.
        </p>
        <a href="#"><span></span></a>
        <button @click="toggleText()" v-if="showButton"><span>Show More</span></button>
      </div>
    </div>
      <div v-show="moreText" class="about_more_text container">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti suscipit voluptatibus ea, dolorum perferendis omnis sunt quisquam voluptates expedita eum odio in ad autem.
          Dolore reiciendis magnam dignissimos, quos soluta quod temporibus? Molestiae provident sit corporis, asperiores iste veritatis commodi consequuntur velit laudantium quibusdam nemo ipsam quidem in maxime similique quam quis est eos possimus fuga enim.
          Est explicabo, praesentium totam, illum optio dignissimos nisi asperiores voluptatum atque eos tenetur eaque rem at beatae unde. Atque optio cum suscipit nostrum possimus distinctio?
          Repudiandae blanditiis maxime molestiae nisi saepe sint, sapiente omnis suscipit beatae libero. Vero sunt sapiente ex, facere asperiores non explicabo rerum dolor in, commodi cumque qui!
          Nulla fugiat, consequuntur nisi magni expedita nobis doloremque animi impedit optio itaque ratione pariatur ducimus eligendi enim, mollitia distinctio ipsa! Necessitatibus consequatur rem nihil quisquam dicta reiciendis soluta quod dolorum nesciunt nam sapiente accusantium impedit et dolores libero deserunt velit voluptas est, iusto eveniet maiores asperiores id voluptatem nisi.
          Ipsam quos numquam, praesentium culpa nesciunt atque ullam inventore voluptas sint sapiente nihil repellat sunt nisi animi cum autem consequuntur, esse magnam quasi adipisci sed ipsum molestias ab!
          Sunt est pariatur deleniti nobis minima distinctio itaque eligendi, dolorem aperiam temporibus exercitationem optio quibusdam.
        </p>
      </div>
  </section>   
</template>
  
 <script>
  export default {
    name:'about',
    data(){
      return{
        moreText: true,
        showButton: null
      }
    },
    mounted() {
    this.$el.classList.add('loaded');
    },
    created() {
        if (this.$route.path !== '/About') {
            this.showButton = true;
            this.moreText = false
        }
    },
    methods:{
      toggleText(){
        this.$router.push({path:"/About"})
        this.showButton = false
        this.moreText = true
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

