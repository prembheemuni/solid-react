import axios from "axios";

const Axios = axios.create({
  // baseURL: apiConstants.baseUrl,
  headers: { "Content-Type": "application/json" },
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => error
);
Axios.interceptors.request.use(
  (config) => config,
  (error) => error
);

export default Axios;
