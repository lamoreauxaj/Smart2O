import Layout from './Layout.js'

export default {
  name: 'UsagePage',
  components: { Layout },
  template: `
    <Layout>
      <h5 id="testh5">Username</h5>
    </Layout>
  `,
  mounted(){
      document.getElementById("testh5").innerHTML = localStorage.getItem("username");
  }
}