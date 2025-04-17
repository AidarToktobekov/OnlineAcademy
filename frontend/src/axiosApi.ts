import axios from "axios";
import { Store } from "redux";
import { toast } from "react-toastify";
import { apiURL } from '@/constants';
import { RootState } from '@/redux/store';
import { unsetUser } from '@/redux/slices/userSlice';

const axiosApi = axios.create({
  baseURL: apiURL,
});

console.log(apiURL);

let isToastVisible = false;

export const addInterceptors = (store: Store<RootState>) => {
  axiosApi.interceptors.request.use((request) => {
    const token = store.getState().user.user?.token;
    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`);
    }
    return request;
  });

  axiosApi.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        store.dispatch(unsetUser());
        if (!isToastVisible) {
          toast.error("Произошла ошибка пройдите авторизацию");
          isToastVisible = true;
        }
      }
      return Promise.reject(error);
    },
  );
};

export default axiosApi;
