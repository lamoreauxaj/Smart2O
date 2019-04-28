import Layout from './Layout.js'
import Pond from './Pond.js'

export default {

  name: 'MyPondPage',
  components: {Layout, Pond},
  template: `
    <Layout>
	  <Pond></Pond>
    </Layout>
  `
  
}