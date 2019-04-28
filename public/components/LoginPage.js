
export default {
  name: 'LoginPage',
  template: `
    <div class = "video-container">
      <div class="gradient"></div>
      <video frameborder=0 autoplay muted loop>
        <source src="../assets/video.mp4" type="video/mp4">
      </video>
      <div id="loginForm">
        <form @submit="onSubmit()" action="">
          <img src="https://www.edigitalagency.com.au/wp-content/uploads/square-payments-logo-png-transparent-background-horizontal.png"/>
          <label>Username</label>
          <br>
          <input type="text" id="username">
          <br>
          <label>Password</label>
          <br>
          <input type="password" id="password">
          <br>
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>  
  `,
  data() {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    onMessageChange() {
      this.msg = 'Hello there'
    },
    onSubmit()
    {
      console.log("hi");
      window.location.href = "http://localhost:3000/#/usage";
      return false;
    }
  }
}