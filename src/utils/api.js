import axios from 'axios';

export const baseURL = 'http://localhost:3001/api/v1';

const instance =  axios.create({
  baseURL,
});

export default instance;
