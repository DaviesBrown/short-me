<!-- <div class="contain">
  <div class="hero-image">
    <div class="hero-text">
    <h1> am John Doe</h1>
    <p>And I'm a Photographer</p>
    <button>Hire me</button>
  </div>
</div>
</div>
<div class="about-section">
  <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  
  <h2 style="text-align:center">Our Team</h2>
  <div class="contact-container">
    <div class="row">
      <div class="column">
      <div class="card">
        <img src="../w3images/team1.jpg" alt="Jane" style="width:100%">
        <div class="container">
          <h2>Jane Doe</h2>
          <p class="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src="../w3images/team2.jpg" alt="Mike" style="width:100%">
        <div class="container">
          <h2>Mike Ross</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>
  
<style>
  .contain {
    position: relative;
    height: 800px;
  }
  .contact-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-image {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("apple.jpg");

    /* Set a specific height */
    height: 50%;

    /* Position and center the image to scale nicely on all screens */
    background-position: center middle;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  /* Place text in the middle of the image */
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
    
  *, *:before, *:after {
      box-sizing: inherit;
    }
    
    .column {
      width: 50%;
      margin-bottom: 16px;
      padding: 0 8px;
    }
    
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 8px;
    }
    
    .about-section {
      padding: 50px;
      text-align: center;
      background-color: #474e5d;
      color: white;
    }
    
    .container {
      padding: 0 16px;
    }
    
    
    
    .title {
      color: grey;
    }
    
    .button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
    }
    
    .button:hover {
      background-color: #555;
    }
    
    @media screen and (max-width: 650px) {
      .column {
        width: 100%;
        display: block;
      }
    }
</style> -->

<script>
  import "@picocss/pico"
</script>

<section class="hero-section">
 <h2>Maskme</h2>
 <p>Hide any link with your domain</p>
 <a href="/">Try it out &neArr;</a>
</section>
<div class="container">
   <section class="feature-section">
    <h2>Features</h2>
    <div class="feature-box">
      <div class="container">
        <h4 style="text-align:center;margin:0">Mask any link with the default random strings.</h4>
        <img src="capture.jpg" alt="">
      </div>
      <div class="container">
        <h4 style="text-align:center;margin:0">Mask any link by adding a title.</h4>
        <img src="capture2.jpg" alt="">
      </div>
      <div class="container">
        <h4 style="text-align:center;margin:0">Track the top 10 links you created.</h4>
        <img src="capture3.jpg" alt="">
      </div>
    </div>
   </section>
   <section class="about-section">
    <h2>About</h2>
    <div class="project-description">
      <p>This is my portfolio project for the alx se porfolio project about making short/hidden links</p>
      <p>I was inspired by alx intranet which uses a custom link to mask links to 
        different resource websites making it consistent, and ever since I noticed it earlier
        this year when I began learning svelte I decided to build out this mini project on
        the idea.
      </p>
    </div>
    <div class="card">
      <div class="profile-name">
        Nwosu David
      </div>
      <div class="profile-description">
        I am a fullstack software engineer looking to better the world with
        new tooling and infrastructures.
      </div>
      <div class="profile-links">
        <a href="https://linkedin.com/nwosudavid">
          <img src="favicon.png" alt="" class="link">
        </a>
        <a href="https://twitter.com/nwosudavid14">
          <img src="favicon.png" alt="" class="x">
        </a>
        <a href="https://github.com/daviesbrown">
          <img src="favicon.png" alt="" class="git">
        </a>
      </div>
    </div>
   </section>
</div>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero-section {
    width: 100%;
    height: 500px;
    background-image: url("1.jpg");
    background-repeat: repeat-x;
    background-position: center;
  }
  .hero-section h2,
  .hero-section p {
    color: grey;
  }
  .card {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    padding: 14px;
    box-shadow: 0 4px 8px 0 rgba(70, 69, 69, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .profile-name {
    font-size: 1.2rem;
    font-weight: 700;
  }
  .profile-description {
    line-height: 24px;
  }
  .profile-links {
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-around;
  }
  .profile-links img {
    width: 40px;
  }
  .about-section {
    margin-top: -70px;
    text-align: center;
  }
  .project-description {
    max-width: 700px;
  }
  .container {
    margin-bottom: 70px;
  }
</style>