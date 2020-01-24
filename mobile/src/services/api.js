import axios from 'axios';

const api = axios.create({

  //Android simulador  
  //baseURL: '//10.0.2.2:3333'
  //Iphone simulador
  //baseURL: '//localhost:3333'

  //Android smartphone 
  baseURL: 'http://192.168.1.6:3333',
});

export default api;