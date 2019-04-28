
export default {
  name: 'LoginPage',
  template: `
    <div>
      <input name="username"/>
      <input name="password"/>
      {{ msg }}
      <button @click="onMessageChange">Click me!</button>
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
    }
  }
}