import App from './components/App.js'
import UsagePage from './components/UsagePage.js'

const routes = [
  { path: '/usage', component: UsagePage }
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
