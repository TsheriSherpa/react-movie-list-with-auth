import React from "react";
import { history } from '../_helpers';

export class MovieView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const movie = this.props.movie;
        return (
            <div className="image-container movieItem" onClick={() => { history.push('/movies/' + movie.id) }}>
                <img src={movie.logo} style={{ height: "25vh" }} alt={movie.name} />
                <div className="overlay movie-item mr-2">
                    <span className="movie-title">{movie.name}</span>
                </div>
            </div>
        );
    }
}

export default MovieView;