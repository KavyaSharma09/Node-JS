//TODO---- Command Line Weather APP--------


//? to require the postman-request module
const request = require('postman-request');

const access_key = '016e3e85055f985ab9f55b8c52681370'
const query = 'Bangalore' //this will read query as bangalore but if we put space anywhere it will create problem ex: New York
//const url = 'http://api.weatherstack.com/current?access_key=016e3e85055f985ab9f55b8c52681370&query=Bangalore'
//! to avoid the above space problem in query we use a function   "encodeURI()"   to enclose the data --> this will format the query in URL format
const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + encodeURI(query) // API link that we will be visiting

//? to access request (Asynchronous function)
// request(url, callback)
//* 3 arguments of callback function
//* Error -if any error occurs, this argument will receive some data
//* Response (res) - message (stores log details of all the actions performed -- like the request sent and received response) and status code
//* Data - if request is successful then data receives the data from the server - data recived is in JSON format

//request(url, (error, res, data) => {
//   const dataOBJ = JSON.parse(data) // this will convert the received JSON content to JS object
//   console.log(dataOBJ); // this will print the data in parsed form
//   console.log('Temparature - ' + dataOBJ.current.temperature)
//})

//? to prevent writing parse for conversion everytime, we change the request's "url" property by adding "json:" object
request({url, json: true }, (error, res, data) => {
    if (error) {
        console.log('No Connection Available'); // if accesskey is wrong or net is off,etc
    }
    else if (data.error) { 
        console.log('Location is Invalid');
    } // this will read if data has any error
    else{
    console.log('Location - ' + data.location.name)
    console.log('Temparature - ' + data.current.temperature)
    console.log('Weather Description - ' + data.current.weather_descriptions[0]) //since its an array
    }
 })

 //TODO --------/ CLI WEATHER APP ---------