import Layout from './Layout.js'
import Leaderboard from './Leaderboard.js'

export default {
  name: 'RankPage',
  components: { Layout, Leaderboard},
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
			 	<Leaderboard></Leaderboard>
			</div>
		</div>   
    </Layout>  
  `
}