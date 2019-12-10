import axios from "axios";

export const createAPI = () => {
  return axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });
};

