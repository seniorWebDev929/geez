const productsRouter = require('./routes/products.js');

const
	dotenv = require('dotenv'),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://zorandev:zoranqwer@cluster0.eocan.mongodb.net/geezla',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js'),
	productsRoutes = require('./routes/products.js'),
	cors = require('cors');

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors());

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)
app.use('/api/products', productsRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
