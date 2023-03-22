import React from "react";
import { Link } from "react-router-dom";

export class MovieView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const movie = this.props.movie;
        return (
            <Link to={`/movies/` + movie.id} className="image-container movieItem" flim={movie}>
                <img src={movie.logo} style={{ height: "25vh", maxWidth: "100%" }} alt={movie.name} />
                <div className="overlay movie-item mr-2">
                    <span className="movie-title">{movie.name}</span>
                </div>
            </Link >
        );
    }
}

export default MovieView;