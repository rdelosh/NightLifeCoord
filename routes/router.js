const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const EventController = require('../controllers/EventController')



const requireAuth = passport.authenticate('jwt',{session:false})
const requireSignin = passport.authenticate('local',{session:false})
const requireGoogleSignUP = passport.authenticate('google',{scope:['profile']})
module.exports = function(app){
	app.get('/protfeat',requireAuth,function(req,res){
		res.send({hello:"trolo"})
	})
	app.post('/signin',requireSignin,Authentication.signin)
	app.post('/signup',Authentication.signup)
	// app.get('/auth/google',requireGoogleSignUP)
	app.get('/auth/google',function(req, res){
		passport.authenticate("google",
			{
				scope:['profile'],
				state: req.query.returnto
			})(req, res)
		});
	app.post('/api/searchCity',EventController.searchCity)
	
	
	app.get('/google/redirect',	passport.authenticate('google'),Authentication.signgoogle)
	
	


}