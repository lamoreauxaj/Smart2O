import NavBar from './NavBar.js'

export default {
  name: 'Layout',
  components: {NavBar},
  template: `
    <div
      id="layout">
	  <div class="upperHeader">
		<span class="userName"></span>
		<img class="userAvatar" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p160x160/38462817_2145135052393744_2504584752456007680_n.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-2.xx&oh=761876450882fff99b0e585e1a610c3f&oe=5D72490F"/>
	  </div>
      <div
        class="contentContainer">
          <NavBar/>
          <slot></slot>
      </div>
    </div>
  `,
  
  mounted(){
      document.getElementsByClassName("userName")[0].innerHTML = localStorage.getItem("username");
      document.getElementsByClassName("userName")[0].style.color = "white";
  }
}
