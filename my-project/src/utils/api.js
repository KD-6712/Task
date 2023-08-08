
import store from '../redux/store';
import errorHandle from './errorHandler'
// import { setLoading, unsetLoading } from '../components/common/Loader/actions';
import {setLoading, unsetLoading} from '../components/common/redux/Actions'
const BASE_URL = "https://jsonplaceholder.typicode.com"

const api = {
  get: async (endpoint) => {
    try {
      store.dispatch(setLoading())
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      store.dispatch(unsetLoading())
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return response.json();
    } catch (error) {
      errorHandle(error);
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return response.json();
    } catch (error) {
      errorHandle(error);
      throw error;
    }
  },
};

export default api

