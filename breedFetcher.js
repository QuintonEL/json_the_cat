const request = require('request');
const breed = process.argv.splice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) { //requested breed not found
    console.log('invalid breed name');
  } else {
    console.log(data[0]['description']); //print the cat description
  }
});