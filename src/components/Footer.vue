<template>
  <hr/>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna at malesuada bibendum, ipsum elit aliquet velit, at suscipit velit velit ut velit.</p>
          </div>
          <div class="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <div class="footer-section contact-form">
            <h2>Contact Us</h2>
            <form>
            <ul>
              <li><input type="email" placeholder="Enter your email"></li>
              <li><textarea placeholder="Your message"></textarea></li>
              <li><button type="submit">Send</button></li>
            </ul>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright &copy; {{ new Date().getFullYear() }} | All rights reserved</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "footer-component"
  }
  </script>

<style lang="scss">
.footer {
  background-color:rgb(228, 229, 230);
  color: rgb(110, 110, 112);
  padding: 2rem 0;

  .container {
    max-width: auto;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .footer-content {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .footer-section {
        flex: 1;
        padding: 1rem;

        h2 {
          color: #3a393a;
          margin-bottom: 1rem;
        }

        p {
          color: #3a393a;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            margin-bottom: 0.5rem;
            font-size: 1rem;
          }
        }

        a {
          color: #3a393a;
          text-decoration: none;
        }

        form {
          display: flex;
         flex-wrap: wrap;

          input, textarea {
            background-color: rgb(255, 255, 255);
            border: none;
            border-radius: 5px;
            padding: 1rem;
            font-size: 1rem;
            text-align: center;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s ease;
            

            &:focus{
                outline: none;
                box-shadow:0px 4px 6px rgba(0,0,0,0.5) ;
            }
          }

          button {
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
        }
      }
    }

    .footer-bottom {
      color: #3a393a;
      padding: 1rem;
      text-align: center;
     width: 100%;
    }
  }

  // Media Queries
  @media only screen and (max-width: 768px) {
    .footer-content {
      flex-wrap: wrap;
      flex-direction: column;

      .footer-section {
        flex: 1;
        width: 100%;
        padding: 1rem 0;
      }
    }
  }
}

</style>