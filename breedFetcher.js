const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (body === "[]") { // Edge Case: Breed Not Found
      callback("Breed not found.", null);
      return;
    } else if (error) { //Edge Case: Request Failed
      callback("URL not found." + error, null);
      return;
    } else { 
      const data = JSON.parse(body);
      callback(null, data[0].description);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };