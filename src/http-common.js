import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://api-grades-almoreno.herokuapp.com:8081/',
  headers: {
    'Content-type': 'application/json',
  },
});
