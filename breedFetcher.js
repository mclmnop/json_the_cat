//81dd32ec-3ee0-45e5-b650-b74596edc054 https://api.thecatapi.com/v1/breeds

const request = require('request');
const userInput = process.argv.slice(2)[0];

const catBreeds = function(race) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${race}`, function(error, response, body) {

    const data = JSON.parse(body);
    if (error) {
      console.log(error.message);
    }
    if (Object.keys(data).length === 0) {
      console.log('race not found');
      return;
    }
    console.log(data[0].description);
  })
};

catBreeds(userInput);
