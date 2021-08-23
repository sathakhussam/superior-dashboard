import axios from 'axios';

const api = axios.create({
  // baseURL: `http://127.0.0.1:3000/api/v1/`
  baseURL: `https://api.superiorrental.app/api/v1/`
});

// api.defaults.headers.common["Referer"] = "dashboard.superiorrental.app"

export default api 