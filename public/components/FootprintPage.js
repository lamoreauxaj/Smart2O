import Layout from './Layout.js'

export default {
  name: 'FootprintPage',
  components: {Layout},
  template: `
    <Layout>
      <div class="grid-container">
        <div class="card">
          <div class="bg-img">
            <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7OlAvKgMD0CwtGU8slbND-XgQ7XLAyuuJmO7nEenIISg0XQH"/>
          </div>
          <div class="content">
            <h4>Take 10 Minute Showers</h4>
            <p> Each extra minute in the shower wastes about 2.1 extra Gallons of water. </p>
          </div>
        </div>  
        <div class="card">
          <div class="bg-img">
            <img width="100%" src="https://cdn.shopify.com/s/files/1/1172/5864/files/17562081826_2fe31437e8_z_1_large.jpg"/>
          </div> 
          <div class="content">
<<<<<<< HEAD
          <h4>Use Less than 2000 Gallons of Water this Month</h4>
          <p> By developing energy saving habits, both water and money are saved! </p></div>
        </div>
        <div class="card">
          <div class="bg-img">
            <img width="100%" src="https://wateruseitwisely.com/wp-content/uploads/2014/08/low-flow-toilet.jpg"/>
=======
            <h4>Use Less than 2000 Gallons of Water this Month</h4>
            <p> By developing energy saving habits, both water and money are saved! </p>
          </div>
        </div>  
        <div class="card">
          <div class="bg-img">
            <img width="100%" src="https://www.americanstandard-us.com/-/media/sites/asus/images/products/toilets/champion-4-right-height-elongated-toilet-2002014/2002014-champion-4-right-height-elongated-toilet.png?w=613&hash=CE6D57DFA637E7EFD749E743E2266292ADFDAC99"/>
          </div> 
          <div class="content">
          <h4>Purchase a Low-Flow Toilet</h4>
          <p> Low-flow toilets can save people around 5,000 Gallons, eventually covering the cost of the purchase itself. </p></div>
        </div>
      </div>
    </Layout>
  `
}