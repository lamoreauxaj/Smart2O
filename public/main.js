import HelloWorld from './components/HelloWorld.js'

let vue = new Vue({
  el: '#app',
  components: { HelloWorld },
  template: `
    <div>
      <h1> {{ msg }}! </h1>
      <HelloWorld></HelloWorld>
    </div>
  `,
  data() {
    return {
      msg: 'Syed'
    }
  }
})
