import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  proxy: {
    protocol: "https",
    host: "allorigins.win",
    port: 8886,
  },
});

export default apiInstance;
