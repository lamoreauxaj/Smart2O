import App from './components/App.js'
import UsagePage from './components/UsagePage.js'
import LoginPage from './components/LoginPage.js'
import MyPondPage from './components/MyPondPage.js'

const routes = [
  { path: '/usage', component: UsagePage },
  { path: '/login', component: LoginPage },
  { path: '/my-pond', component: MyPondPage }
]

const router = new VueRouter({
  routes
})

let vue = new Vue({
  el: '#app',
  components: { App },
  template: `
    <App/>
  `,
  router
})
