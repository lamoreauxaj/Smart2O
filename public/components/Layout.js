import NavBar from './NavBar.js'

export default {
  name: 'Layout',
  components: {NavBar},
  template: `
    <div
      id="layout">
      <div
        class="contentContainer">
          <NavBar/>
          <slot></slot>
      </div>
    </div>
  `
}
