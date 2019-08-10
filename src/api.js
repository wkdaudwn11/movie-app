import axios from "axios";

// 이거 안됨...
// const api = axios.create({
//     baseURL: "https://api.themoviedb.org/3/",
//     params: {
//         api_key: "ae61da0a1b03db56e103056851b7e551",
//         language: "en-US"
//     }
// });

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing?api_key=ae61da0a1b03db56e103056851b7e551"),
    upcoming: () => api.get("movie/upcoming?api_key=ae61da0a1b03db56e103056851b7e551"),
    popular: () => api.get("movie/popular?api_key=ae61da0a1b03db56e103056851b7e551"),
    movieDetail: id =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
}

export const tvApi = {
    topRated: () => api.get("tv/top_rated?api_key=ae61da0a1b03db56e103056851b7e551"),
    popular: () => api.get("tv/popular?api_key=ae61da0a1b03db56e103056851b7e551"),
    airingToday: () => api.get("tv/airing_today?api_key=ae61da0a1b03db56e103056851b7e551"),
    showDetail: id =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
}

export default api;