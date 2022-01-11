import { movieConstants } from '../_constants';

export function movies(state = {}, action) {
    switch (action.type) {
        case movieConstants.GETALL_REQUEST:
            return {
                loading: true,
                movies: []
            };
        case movieConstants.GETALL_SUCCESS:
            return {
                loading: false,
                movies: action.movies
            };
        case movieConstants.GETALL_FAILURE:
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