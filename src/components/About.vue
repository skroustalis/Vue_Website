
<template>
    <section class="about">
        <div class="about__container container">
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
            </div>
          </div>
      </section>   
</template>
  
  <script>
  export default { 
  };
  </script>
  
  <style lang="scss" scoped>
  .about__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    height: 80vh;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      height: 100%;
      padding: 1.5rem;
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
          font-size: 20px;
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
    }
  }
  </style>