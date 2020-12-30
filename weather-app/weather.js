const request = require('postman-request');

//? main func
const weather =(query, callback) => {
    const access_key = '016e3e85055f985ab9f55b8c52681370'
    const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + encodeURI(query) // API link that we will be visiting
    
//!for seeing changes in request func refer to initial_app.js file
//? to prevent writing parse for conversion everytime, we change the request's "url" property by adding "json:" object
    request({url, json: true }, (error, res, data) => {
        if (error) {
           callback('No Connection Available', undefined) // to send the error; 'No _ _ _ able'-is the error and data is 'undefined'
        }
        else if (data.error) { 
            callback('Location is Invalid', undefined)
        } // this will read if data has any error
        else{
           // callback(undefined, data) // undefined since no error - this will send all the raw information
            callback(undefined, { // to send particular object
                temp: data.current.temperature,
                location: data.location.name,
                des: data.current.weather_descriptions[0]
            })
        }
     })
}

module.exports = weather