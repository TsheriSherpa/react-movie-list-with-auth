import React from "react";
import { MovieView } from './MovieView';
import { MovieListHeading } from './MovieListHeading';

export class MovieList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const category = this.props.category;
        return (
            <div className="col-lg-12">
                <MovieListHeading title={category.name} />
                <div className="movieList">
                    {
                        category.movies.movies.map(movie =>
                            <MovieView movie={movie} key={movie.id} />
                        )
                    }
                </div>
            </div>
        );
    }
}