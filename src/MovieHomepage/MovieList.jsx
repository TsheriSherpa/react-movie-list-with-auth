import React from "react";
import { MovieView } from './MovieView';
import { MovieListHeading } from './MovieListHeading';

export class MovieList extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        const category = this.props.category;
        return (
            <div className="col-lg-12">
                <MovieListHeading title={category.name}/>
                <div className="d-flex justify-content-start">
                {
                    category.movies.movies.map(movie => 
                        <MovieView movie={movie} key={category.name+Math.random()}/>
                    )
                }   
                </div>
            </div>
        );
    }
}