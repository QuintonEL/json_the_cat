const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined) {  
      error = 1;
      callback(error, null);
    } else {
    const desc = (data[0]['description']); //description of cat breed
    callback(error, desc);
    }
  });
};

module.exports = { fetchBreedDescription };