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
			       		<span class = "bold">
			       			<span>#24 in Dallas</span>
			       		</span>
			     	</span>
			   	</div>
			   	<a href="/#/rank" class="button selected"><i class="fas fa-map-marker"></i></a>
			   	<a href="/#/rank" class="button"><i class="fas fa-flag"></i></a>
			   	<a href="/#/rank" class="button"><i class="fas fa-globe"></i></a>
			</div>
			 	<div class="row">
			     <span class="icon"><i class="fas fa-trophy"></i></span>
			     <span class="avatar"></span>
			     <span class="name">Randy Goldman</span>
			     <span class="points">0</span>
			   </div>
			   <div class="row">
			     <span class="icon"><i class="fas fa-trophy"></i></span>
			     <span class="avatar"></span>
			     <span class="name">Randy Goldman</span>
			     <span class="points">0</span>
			   </div>
			   <div class="row">
			     <span class="icon"><i class="fas fa-trophy"></i></span>
			     <span class="avatar"></span>
			     <span class="name">Randy Goldman</span>
			     <span class="points">0</span>
			   </div>
			   <div class="row">
			     <span class="icon">4</span>
			     <span class="avatar"></span>
			     <span class="name">Randy Goldman</span>
			     <span class="points">0</span>
			   </div>
			</div>
		</div>   
    </Layout>  
  `
}