import axios, * as others from 'axios';
import { GeneratorProps } from '../../structs/generatorinterface';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', // Your API base URL
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    },
  });

export const generateIdea=()=>{
    var data: GeneratorProps;

    axiosInstance.get('/api/generate/')
    
  .then(function (response:any) {
    // handle success
    // console.log(response.data);
    data=response.data[0];    
  })
  .catch(function (error: any) {
    // handle error
    console.log(error);
    data={
        "project_name":"",
        "project_desc":"",
        "project_diff":"",
        "project_lang":""
    };
  })
  .finally(function () {
    // always executed
    return data;
  });  
 }