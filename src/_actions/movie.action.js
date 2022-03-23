import { movieConstants } from '../_constants';
import { movieService } from '../_services';

function getMovies() {
    return dispatch => {
        dispatch(request());
        movieService.getAll()
            .then(
                movies => dispatch(success(movies)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: movieConstants.GETALL_REQUEST } }
    function success(movies) { return { type: movieConstants.GETALL_SUCCESS, movies } }
    function failure(error) { return { type: movieConstants.GETALL_FAILURE, error } }
}

function getMovie(movieId) {
    return dispatch => {
        dispatch(request());
        movieService.getDetail(movieId)
            .then(
                movie => dispatch(success(movie)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: movieConstants.GETDETAIL_REQUEST } }
    function success(movie) { return { type: movieConstants.GETDETAIL_SUCCESS, movie } }
    function failure(error) { return { type: movieConstants.GETDETAIL_FAILURE, error } }
}
export const movieActions = {
    getMovies, getMovie
};

