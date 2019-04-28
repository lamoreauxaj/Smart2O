const express = require('express')
const path = require('path')
const config = require('./config.js')
const fs = require('fs');

const app = express()

/*const datafile = path.join(__dirname + '/../src/data.txt');

var appdata = null

fs.readFile(datafile, function (err, data){
	if(err) console.log(err);
	appdata = data;
});

console.log(appdata)*/

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.get('/loginauth', function(req, res){
	res.send(true);
})

// GET /user/wateruse
app.get('/:user/wateruse', function(req, res){
    if(req.params.user == 'syedpervaiz'){
        res.json({"name": req.params.user,
            "profilepic": "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p160x160/38462817_2145135052393744_2504584752456007680_n.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-2.xx&oh=761876450882fff99b0e585e1a610c3f&oe=5D72490F",
			"friends": ["flexadecimal","aaronl"],
            "score":3,
			"totalUse": 100.3,
			"waterBillPrice":40.81,
			"gallonsPercents":
				{"showers":52, "washing_machine":10.0, "toilet":12,
				"dishwashers":3,"faucets":21,"other": 12}
			}
	)}
});

// GET /user/game
app.get('/:user/game', function(req, res){
	var rand = Math.floor(Math.random()*100);
	res.json({"name":req.params.user,
			"gamescore": rand});
});

app.use(express.static('public'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))
