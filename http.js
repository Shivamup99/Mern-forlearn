import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api/data',
  });


  export default http