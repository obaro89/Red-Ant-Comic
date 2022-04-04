const axios = require("axios");
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  toast.error(error);
  return Promise.reject(error);
});
