import axios from 'axios';
import {Platform} from 'react-native';

const api = axios.create({
  baseURL:
    Platform.OS === 'ios' ? 'http://127.0.0.1:8000' : 'http://10.0.2.2:8000', //URL DEV
});

export default api;
