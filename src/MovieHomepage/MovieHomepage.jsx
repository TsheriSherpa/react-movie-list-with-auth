import React from 'react'
import { movieActions } from '../_actions';
import { connect } from 'react-redux';
import { MovieList } from './MovieList';

class MovieHomepage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        var movies = this.props.movies.movies;

        if (typeof movies == 'undefined' || movies == [] || this.props.movies.loading) {
            return (
                <div className='row'>
                    <span className="col d-flex justify-content-center vertical-center" >
                        Loading...
                    </span>
                </div>
            )
        } else {
            return (
                <div className="row list">
                    {
                        movies.categories.map(category =>
                            <MovieList category={category} key={category.name} />
                        )
                    }
                </div>
            );
        }

    }
}


function mapState(state) {
    const { authentication, movies } = state;
    const { user } = authentication;
    return { user, movies };
}

const actionCreators = {
    getMovies: movieActions.getMovies
}

const connectedMovieHomePage = connect(mapState, actionCreators)(MovieHomepage);
export { connectedMovieHomePage as MovieHomepage };

