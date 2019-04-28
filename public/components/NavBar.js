export default {
  name: 'NavBar',
  template: `
    <nav
      id="navBar">
      <ul
        class="navList">
        <li
          class="navElement">
            <router-link class="navLink" to="/usage">Usage</router-link>
          </li>
        <li
          class="navElement">
            <router-link class="navLink" to="/rank">Rank</router-link>
          </li>
        <li
          class="navElement">
            <router-link class="navLink" to="/footprint">Footprint</router-link>
          </li>
        <li
          class="navElement">
            <router-link class="navLink" to="/my-pond">My Pond</router-link>
          </li>
      </ul>
    </nav>
  `
}
