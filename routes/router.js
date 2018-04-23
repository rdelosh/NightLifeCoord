const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt',{session:false})
const requireSignin = passport.authenticate('local',{session:false})
const requireGoogleSignUP = passport.authenticate('google',{scope:['profile']})
module.exports = function(app){
	app.get('/protfeat',requireAuth,function(req,res){
		res.send({hello:"trolo"})
	})
	app.post('/signin',requireSignin,Authentication.signin)
	app.post('/signup',Authentication.signup)
	app.get('/auth/google',requireGoogleSignUP)
	// app.get('/google/redirect',passport.authenticate('google') ,(req,res)=>{
	// 	res.send("reached the call back uri")
	// })
	app.get('/google/redirect',	passport.authenticate('google'),Authentication.signgoogle)
	
	


}