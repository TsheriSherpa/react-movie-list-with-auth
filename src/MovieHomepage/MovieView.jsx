import React from "react";

export class MovieView extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        const movie = this.props.movie;
        return (
            <div className="image-container mr-3" style={{ "margin": "0 .4% 2%", "width": "11.7%" }}>
                <img src={movie.logo} style={{height:"25vh"}} alt={movie.name}/>
                <div className="overlay movie-item mr-2">
                    <span className="movie-title">{movie.name}</span>
                </div>
            </div>
        );
    }
}