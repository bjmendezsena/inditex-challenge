import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  proxy: {
    protocol: process.env.REACT_APP_PROXI_PROTOCOL,
    host: String(process.env.REACT_APP_PROXI_HOST),
    port: Number(process.env.REACT_APP_PROXI_PORT),
  },
});

export default apiInstance;
