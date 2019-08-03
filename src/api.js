import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "ae61da0a1b03db56e103056851b7e551",
        language: "en-US"
    }
});

export default api;