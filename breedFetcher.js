const request = require('request');
// request('https://api.thecatapi.com/v1/breeds/search?name=Persian', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
//   const data = JSON.parse(body);
//   // console.log(data);
//   fetchBreedDescription(data[0].name)
// });

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    try {
      // console.log(data[0].description);
      callback(null, data[0].description);
    } catch (error) {
      callback(error);
      console.error("Error fetching cat data:", error);
    }
  });
};

module.exports = { fetchBreedDescription };