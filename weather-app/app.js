const weather = require('./weather.js');

// weather('Bangalore', (error, data) => {
//     if (error !== undefined) { // if error is there
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// })

// weather('Bangalore', (error, {temp, location, des}) => { // Bangalore is given as query
//     if (error !== undefined) { // if error is there
//         console.log(error);
//     }
//     else{
//         console.log('Location -' + location);
//         console.log('Temperature -' + temp);
//         console.log('Weather Description -' + des);
//     }
// })

const query = process.argv[2]
if (query == undefined) {
    console.log('Please enter the Location');
}
else{
    weather(query, (error, {temp, location, des}) => { // query will be accepted from command line
            if (error !== undefined) { // if error is there
                console.log(error);
            }
            else{
                console.log('Location -' + location);
                console.log('Temperature -' + temp);
                console.log('Weather Description -' + des);
            }
        })
}