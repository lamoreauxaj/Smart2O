import Layout from './Layout.js'

export default {
  name: 'RankPage',
  components: { Layout },
  template: `
  	<Layout>
		<div class="leaderboard">
		<div class = "overlay">
		   <div class = "detail">
		     <span class = "name">Leaderboard</span>
		     <span class = "sub">
		       <span class = "bold">1</span>
		     </span>
		   </div>
		 </div>
		   <div class="row">
		     <div class="icon"></div>
		     <span class="avatar"></span>
		     <span class="name">Randy Goldman</span>
		     <span class="points">0</span>
		   </div>
		 </div>
		</div>   
    </Layout>  
  `
}