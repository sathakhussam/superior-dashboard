import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.superiorrental.app/api/v1/`
  // baseURL: `https://api.superiorrental.app/api/v1/`
});

// api.defaults.headers.common["Referer"] = "dashboard.superiorrental.app"

export default api 