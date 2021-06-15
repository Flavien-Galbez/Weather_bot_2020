"use strict";
const axios = require ("axios") ;
const apikey = 'a8495bb4cf2fb0f5704188205ea83abe'; // your api key to the apixu

const request = require('request');

var getWeather = (city, callback) => {
  request({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Darksky.net server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(JSON.parse(body));
    }
  });
};


module.exports = getWeather ;
