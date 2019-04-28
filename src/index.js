const express = require('express')
const path = require('path')
const config = require('./config.js')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.get('/login', function(req, res){
	res.send(true);
})

// GET /user/wateruse
app.get('/:user/wateruse', function(req, res){
	res.json({"name": req.params.user,
			"friends": ["flexadecimal","aaronl"],
			"totalUse": 100.3,
			"waterBillPrice":40.81,
			"gallonsPerDay":
				{"showers":30.1, "washing_machine":10.0, "toilet":24.1,
				"dishwashers":4.3, "baths":0.0, "leaks":4.0,"faucets":10.9,"other": 16.9}
			}
	)
});

// GET /user/game
app.get('/:user/game', function(req, res){
	var rand = Math.floor(Math.random()*100);
	res.json({"name":req.params.user,
			"gamescore": rand});
});

app.use(express.static('public'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))
