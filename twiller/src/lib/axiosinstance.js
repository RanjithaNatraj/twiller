import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BACKEND_URL ,
    headers: {
        'Content-type': 'application/json',
    },
});
export default axiosInstance;