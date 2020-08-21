function setupAxios(axios, token) {
    
    if (token) {

        axios.interceptors.request.use(
            config => {
                config.headers.Authorization = `Bearer ${token}`;

                return config;
            },
            err => Promise.reject(err)
        );
    }
}
export default setupAxios