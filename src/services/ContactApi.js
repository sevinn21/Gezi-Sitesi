import axios from 'axios';

const instance = axios.create({
    baseURL:'https://5fbb89d6c09c200016d40a56.mockapi.io/api',
})

export const postInformations = (data) => {
    return instance.post('/contactInformations',data)
}
export default instance