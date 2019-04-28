export default {
  name: 'NavBar',
  template: `
    <nav
      id="navBar">
      <ul
        class="navList">
        <li
          class="navElement">
            <router-link class="navLink" to="/my-pond">Usage</router-link>
          </li>
        <li
          class="navElement">
            <router-link class="navLink" to="/my-pond">Rank</router-link>
          </li>
        <li
          class="navElement">
            <router-link class="navLink" to="/my-pond">Footprint</router-link>
          </li>
        <li
          class="navElement">
            <router-link class="navLink" to="/my-pond">My Pond</router-link>
          </li>
      </ul>
    </nav>
  `
}
