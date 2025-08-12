import axios from "axios";
const api=axios.create(
    {
        baseURL:"https://demoapi.ritechpune.com/api/"
    }
);

export default api;