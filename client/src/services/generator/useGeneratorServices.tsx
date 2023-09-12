import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', // Your API base URL
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    },
  });

export const useGeneratorServices = async () => {
    let data: object;

    await axiosInstance.get('/api/generate/')
    
  .then((response) => {
    // handle success
    console.log(response.data);
    data = response.data[0];
  })
  .catch((error) => {
    // handle error
    console.log(error);
    data = {
        "project_name":"",
        "project_desc":"",
        "project_diff":"",
        "project_lang":""
    };
  })
  .finally(() => {
    // always executed
    console.log('Returned Data: ', data);
    return data;
  });  
 }