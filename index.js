var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var router = require('./routes/router')
var cookieSession = require('cookie-session')
var passport =require('passport')
var cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost:27017/nightlifecoord')


// app.use(cookieSession({
// 	name:'jwt',
// 	maxAge:5*60*100,
// 	signed:false,
// 	httpOnly:false
	
// }))
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())


app.use(morgan('combined'))
app.use(bodyParser.json({type:'*/*'}))
router(app)
// app.get('/api/signup',function(req,res){
// 	res.send({hi:'there'})
// })



app.use(express.static('./clientApp/wwwroot/'))
app.get('*',function(req,res){
	res.sendFile(path.resolve(__dirname,'clientApp','wwwroot','index.html'))
})


app.listen(3000)