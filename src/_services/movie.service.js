import CONFIG from "../config"
import { authHeader } from '../_helpers';

export const movieService = {
    getAll, getDetail
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${CONFIG.API_URL}/api/net-tv/movies`, requestOptions).then(handleResponse);
};

function handleResponse(response) {
    return response.json().then(text => {
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (text && text.message) || response.statusText;
            return Promise.reject(error);
        }
        return text;
    });
}

function getDetail(movieId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch('https://mnm.truestreamz.com/api/net-tv/movies/' + movieId + '/detail', requestOptions).then(handleResponse);
}