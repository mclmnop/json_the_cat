//81dd32ec-3ee0-45e5-b650-b74596edc054 https://api.thecatapi.com/v1/breeds

const request = require('request');


const fetchBreedDescription = function(race, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${race}`, function(error, response, body) {

    const data = JSON.parse(body);
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const errorNotOK = 'Error not 200';
      return callback(errorNotOK, null);
    }
    if (Object.keys(data).length === 0) {
      const errorMessage = 'race not found';
      return callback(errorMessage, null);
    }
    callback(null, data[0].description);
  })
};

module.exports = { fetchBreedDescription };

