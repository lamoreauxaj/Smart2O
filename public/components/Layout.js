import NavBar from './NavBar.js'

export default {
  name: 'Layout',
  components: {NavBar},
  template: `
    <div
      id="layout">
	  <div class="upperHeader">
		<span class="userName">Randy Goldman</span>
		<img class="userAvatar" src="https://randomuser.me/api/portraits/men/29.jpg"/>
	  </div>
      <div
        class="contentContainer">
          <NavBar/>
          <slot></slot>
      </div>
    </div>
  `
}
