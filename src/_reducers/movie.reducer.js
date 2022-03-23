import { movieConstants } from '../_constants';

export function movies(state = {}, action) {
    switch (action.type) {
        case movieConstants.GETALL_REQUEST:
            return {
                loading: true,
                movies: []
            };
        case movieConstants.GETALL_SUCCESS:
            console.log(action.movies);
            return {
                loading: false,
                movies: action.movies
            };
        case movieConstants.GETALL_FAILURE:
            return {
                loading: false,
                movies: []
            };
        case movieConstants.GETDETAIL_REQUEST:
            return {
                loading: true,
                movie: []
            };
        case movieConstants.GETDETAIL_SUCCESS:
            return {
                loading: false,
                movie: action.movie
            };
        case movieConstants.GETDETAIL_FAILURE:
            return {
                loading: false,
                movie: []
            };
        case movieConstants.CLEAR:
            return {};
        default:
            return state
    }
}