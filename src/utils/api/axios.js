import axios from 'axios';
import { toast } from 'react-toastify';

let baseURL="https://bikeindex.org/api/v3/";
//search?page=1&per_page=10&location=IP&distance=10&stolenness=stolen&access_token=H-KcfyLFjcOKcazkgJZ2Uwtxdt-BcVwJoj-9ortygjw

const axiosPublic = axios.create({
    baseURL,
    }
);


axiosPublic.interceptors.request.use(
    (config) => {

        return config;
    },
    (error) => {
        // return Promise.reject(error);
        console.log(Promise.reject(error));
        // return Promise.reject(error);
    }
);

axiosPublic.interceptors.response.use(
    (response) => {

        return response;
    },

    (error) => {

        toast.error(error.message, {
            position: "bottom-right",
            autoClose: 1800,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            className : 'toast-message',
            progressClassName: 'toast-message-progress',
        })

        return Promise.reject(error);
    }
);

export {axiosPublic}