import Layout from './Layout.js'

export default {
  name: 'UsagePage',
  components: { Layout },
  template: `
    <Layout>
      <svg id="fillgauge1" width="97%" height="250"></svg>
    </Layout>
  `,
  mounted(){

      var gauge1 = loadLiquidFillGauge("fillgauge1", 55);
  }
}