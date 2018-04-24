const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy


const localLogin = new LocalStrategy({usernameField:'email'}, function(email,password,done){
	User.findOne({email:email},function(err,user){
		if(err){return done(err)}
		if(!user){return done(null,false)}

		user.comparePassword(password,function(err,isMatch){
		if(err){return done(err)}
		if(!isMatch){return done(null,false)}

		return done(null,user)
	})

	})
	
})


const jwtOptions = {
	jwtFromRequest:ExtractJwt.fromHeader('authorization'),
	secretOrKey:config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload,done){
	User.findById(payload.sub,function(err,user){
		if(err){return done(err,false)}
		if(user){
			done(null,user);
		}else{
			done(null,false)
		}
	})
})

passport.serializeUser((user,done)=>{
	done(null,user.id)
})

passport.deserializeUser((id,done)=>{
	User.findById(id).then((user)=>{
		done(null,user)
	})
	
})

const googleOptions = {
	clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
}
const googleLogin = new GoogleStrategy(googleOptions,function(token, tokenSecret, profile, done) {
	// console.log(profile)
	console.log("token")
	console.log(token)
    User.findOne({googleid:profile.id}, function(err, currentUser) {
	  if (err) { return done(err); }
	  if(currentUser){
		   return done(null,currentUser)
	  }else{
		var newuser = new User
		newuser.email=profile.id
		newuser.googleid = profile.id
		newuser.save().then(saveduser=>{
			return done(null,saveduser)
		})
	  }
	  
      
	});
	// return done(null,profile)
	
  })

passport.use(jwtLogin)
passport.use(localLogin)
passport.use(googleLogin)