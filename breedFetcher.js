const request = require('request');

let input = process.argv.slice(2);
let breedName = input[0];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (body === "[]") { // Edge Case: Breed Not Found
    console.log("Breed not found.")
  } else if (error !== null) { //Edge Case: Request Failed
    console.log('error:', error);
  } else { 
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});