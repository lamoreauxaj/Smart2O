import HelloWorld from './components/HelloWorld.js'

let vue = new Vue({
  el: '#app',
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
