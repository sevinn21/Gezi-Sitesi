import axios from 'axios';

const instance = axios.create({
    baseURL:'https://5fbb89d6c09c200016d40a56.mockapi.io/api',
});

export const getCityPlaces = () => {
    return instance.get('/cityPlaces');
};

export const getCityPlaceById = (id) => {
    return instance.get(`/cityPlaces/${id}`);
}

export const postCityPlace = (data) => {
 return instance.post('/cityPlaces',data);
};

export const putCityPlace = (id,data) => {
    return instance.put(`/cityPlaces/${id}`,data);
};

export const deleteCityPlace = (id) => {
    return instance.delete(`/citys/${id}`);
}

export default instance;