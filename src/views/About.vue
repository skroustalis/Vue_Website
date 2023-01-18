
  <template>
    <div class="about">
      <section class="hero2-banner">
      </section>
      <section class="hero2">
          <div class="hero2-photo container">
            <img src="@/assets/avatar.png" alt="A beautiful photo">
          </div>
          <div class="hero2-text container">
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
        </section>
      </div>   
      <gmap-map
        :center="center"
        :zoom="10"
        style= "width:100%; height: 600px;">

      </gmap-map>
  </template>
  
  <script>
  export default { 
  };
  </script>
  
  <style lang="scss" scoped>
  .hero2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    justify-content:left;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      height: 100%;
    }
  

    .hero2-photo  img {
      object-fit: contain;
      width: 250px;
      border-radius: 5px;
      box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
      transition: box-shadow 0.3s ease;
      @media (max-width: 768px) {
        height:100%;
      }
      
      }

    .hero2-text {
      p{
        @media (min-width: 768px) {
          padding-right: 5rem;
        }
      }
      
      h1{
        color: #3a393a;
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 1.5rem;
      }
    }
  }

  .hero2-banner{
    background-image: url("../assets/whiteback.webp");
    background-attachment: fixed;
    position: relative;
    height: 40vh;
  }
  </style>