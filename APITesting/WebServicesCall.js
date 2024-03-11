

const axios = require('axios');

// Define the API endpoint
const apiUrl = 'https://api.example.com/endpoint';

// Define the JSON payload
const payload = {
  key1: 'value1',
  key2: 'value2'
};

// Send POST request with JSON payload
axios.post(apiUrl, payload)
  .then(response => {
    // Log the response data
    console.log('Response:', response.data);

    // Perform validation
    if (response.status === 200) {
      // Status code validation
      console.log('Status code is 200 OK');

      // Perform additional validations based on response data
      // For example, checking if certain fields exist or have expected values
      if (response.data.hasOwnProperty('key')) {
        console.log('Key exists in response:', response.data.key);
      } else {
        console.error('Key does not exist in response');
      }
    } else {
      console.error('Unexpected status code:', response.status);
    }
  })
  .catch(error => {
    // Log any errors
    console.error('Error:', error.message);
  });
