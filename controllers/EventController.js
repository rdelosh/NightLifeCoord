const axios = require('axios')
const config = require('../config')
exports.searchCity = function(req,res){
    var headers = {
        'Authorization': config.yelpAPIKey,
        'Content-Type': 'application/json'
    }

    axios.get('https://api.yelp.com/v3/businesses/search?term=bar&location=memphis',{'headers':headers})
    .then(yelpResponse=>{
        console.log(yelpResponse.data)
        res.send(yelpResponse.data)
    })
    .catch(err=>{
        console.log(err)
        res.send(err)
    })
    
}