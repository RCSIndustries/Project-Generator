import axios from 'axios';


const BASE_URL = 'http://code-catalyst.com:4000';

export const useGeneratorServices = async (setData) => {
  await axios(`${BASE_URL}/api/generate/`, {
    method: 'GET',
    headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        },
 }).then(response => {
    // You can access the response data here
    const responseData = response.data[0];
    setData(responseData);
  }).catch(error => {
    // Handle any errors that may occur during the request
    console.error('An error occurred:', error);
  });
 }