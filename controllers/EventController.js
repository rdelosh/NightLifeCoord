const axios = require('axios')
const config = require('../config')
const EventObject = require('../models/event')
const Event = EventObject.model

exports.searchCity = function(req,res){
    var headers = {
        'Authorization': config.yelpAPIKey,
        'Content-Type': 'application/json'
    }

    axios.get(`https://api.yelp.com/v3/businesses/search?term=bar&location=${req.body.searchterm}`,{'headers':headers})
    .then(yelpResponse=>{
        // console.log(yelpResponse.data)
        // console.log(yelpResponse.data.businesses.length)
        var arrayofpromises= []
        yelpResponse.data.businesses.map(function(business){
            arrayofpromises.push(new Promise(function(resolve,reject){
                Event.findOne({businessid:business.id},function(err,foundevent){
                    if(err){return res.send(err)}
                    if(foundevent){
                        resolve(foundevent)
                        // console.log(foundevent)
                    }else{
                        var currentDate = new Date() // today 8:24 am
                        var _5amdate = new Date() //today 5:00am
                        _5amdate.setHours(5)
                        _5amdate.setMinutes(0)
                        _5amdate.setSeconds(0)
    
                        var expiredate
    
                        if(currentDate>_5amdate){
                            _5amdate.setDate(_5amdate.getDate()+1)
                            expiredate=_5amdate
                        }else{
                            expiredate=_5amdate
                        }
    
                        const newevent = new Event({
                            expireAt: expiredate,
                            businessid:business.id,
                            name:business.name,
                            image_url:business.image_url,
                            people:[]
    
                        })
                        newevent.save(function(err){
                            if(err){return next(err)}
                            resolve(newevent)
                        })
    
                    }

                })
            }))


        })
        Promise.all(arrayofpromises).then(function(promiseResult){
            
            console.log(promiseResult)
            res.send({businesses:promiseResult})
        })
        // console.log(arrayofpromises)
        
        
    })
    .catch(err=>{
        // console.log(err)
        res.send(err)
    })
    
}
exports.attend = function(req,res,next){
    
    Event.findOne({businessid:req.body.businessid},function(err,foundevent){
        if(err){return res.send(err)}
        // if(foundevent){
        //     return res.send(foundevent)
        // }

        var mydate = new Date()
        mydate.setMinutes(mydate.getMinutes()+2)
        
		const newevent = new Event({
            expireAt: new Date('April 26, 2018 6:43:00'),
			businessid:req.body.businessid
        })
        
		newevent.save(function(err){
            if(err){return next(err)}
            return res.send(newevent)
			
		})


    })
}