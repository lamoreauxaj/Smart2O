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

app.get('/:user/waterUse', function(req, res){
	res.json({"use":
				{"showers":8.8, "washing_machine":10.0, "toilet":8.2,
				"dishwashers":.7, "baths":1.2, "leaks":4.0,"faucets":10.8}
			}
	)
});

app.use(express.static('public'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))
