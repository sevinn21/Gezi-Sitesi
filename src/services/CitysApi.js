import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://5fbb89d6c09c200016d40a56.mockapi.io/api',
  
});
 
export const getCitys = () => {
  return instance.get('/citys');
};

export const postCity = (data) => {
  return instance.post('/citys',data);
};

export const getCityById = (id) => {
  return instance.get(`/citys/${id}`);
};

export const putCity = (id,data) => {
  return instance.put(`/citys/${id}`,data); 
};

export const deleteCity = (id) => {
    return instance.delete(`/citys/${id}`);
  };

export default instance;