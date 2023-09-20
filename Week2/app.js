const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env

// Define your API key from environment variables
const apiKey = 'BMPJncBCATmCkXiUbM6bStGT0Il65HfdtkLpBH0S085v4nR8LvmySVDZ77NUUtuL';

// Define the request data
const requestData = {
  dataSource: 'Cluster0',
  database: 'Contacts',
  collection: 'Contacts',
  projection: { title: 1 },
};

// Define the headers for the request
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': apiKey,
  },
};

// Define the URL for the POST request
const apiUrl = 'https://data.mongodb-api.com/app/data-jrhxc/endpoint/data/v1/action/findOne';

// Make the POST request using Axios
axios
  .post(apiUrl, requestData, axiosConfig)
  .then(function (response) {
    console.log('Response data:', response.data);
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
