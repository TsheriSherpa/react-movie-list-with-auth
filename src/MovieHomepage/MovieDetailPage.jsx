import React from 'react';
import { movieActions } from '../_actions';
import { connect } from 'react-redux';
import { MovieView } from './MovieView';
import { DislikeButton, LikeButton } from '../_components';

class MovieDetailPage extends React.Component {

    constructor(props) {
        super(props);
    }

    async getStreamingLink(movieId) {
        await fetch('https://mnm.truestreamz.com/api/net-tv/movies/liveurl/' + movieId + '/movie/sd')
            .then((res) => {
                return res.json();
            })
            .then((text) => {
                var video = document.getElementById('my-vid');
                var source = document.createElement('source');

                source.setAttribute('src', "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
                source.setAttribute('type', 'video/mp4');

                video.appendChild(source);
                video.play();
            });
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.getMovie(this.props.match.params.id);
    }

    render() {
        var movie = this.props.movies.movie;
        if (typeof movie == 'undefined' || movie == [] || this.props.movies.loading) {
            return (
                <div className='row'>
                    <span className="col d-flex justify-content-center vertical-center" >
                        Loading...
                    </span>
                </div>
            )
        } else {
            this.getStreamingLink(this.props.match.params.id);
            return (
                <div className="col-md-12" style={{ display: "grid", justifyContent: "center", alignContent: "center", margin: "1em" }}>
                    <div className="col-md-12">
                        <video
                            id="my-vid"
                            className="video-js"
                            controls
                            preload="auto"
                            width="1480"
                            height="600"
                            poster={movie.movie.logo}
                            data-setup="{ }"
                        >
                            {/* <source src="" type="video/mp4" controls /> */}
                        </video>
                    </div>

                    <div className='clearfix' style={{ margin: '1em' }}></div>
                    <div className='col-md-12' style={{ display: "grid", gridAutoFlow: "column", gridTemplateColumns: "13% 718px 36%", gridGap: "1em" }}>
                        <div className="first"><img src={movie.movie.logo} style={{ borderRadius: "5%", height: "280px", maxHeight: "320px" }} alt="horizontal_logo" /></div>
                        <div className='second' style={{ padding: "1em" }}>
                            <div className='desc-header' style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div>
                                        <strong style={{ fontFamily: "serif", fontSize: "1.5rem" }}>{movie.movie.name}</strong>
                                    </div>
                                    <div>
                                        <span style={{ marginRight: "1rem", backgroundColor: "#27ccdc", borderRadius: '3px', padding: '4px' }}>HD</span>
                                        <img src="https://www.pngfind.com/pngs/m/14-148866_free-png-download-stars-png-images-background-png.png" alt="rating-logo" style={{ height: "25px", width: "26px" }}></img>
                                        <span style={{ paddingRight: "6px", fontFamily: "system-ui", paddingLeft: "6px" }}>9.7</span> {movie.movie.duration} min
                                    </div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                    <div>
                                        <strong style={{ fontFamily: "ui-monoscope", fontSize: "1rem" }}>Score:
                                            <span style={{ color: "yellow" }}>  9.6</span>
                                            <span style={{ color: "darkgoldenrod", padding: "1rem" }}>/323 rated</span>
                                        </strong>
                                    </div>
                                    <div className='clearfix' style={{ margin: '2px' }}></div>
                                    <div style={{ display: 'flex' }}>
                                        <LikeButton isLiked={false} />
                                        <div style={{ marginRight: "7px" }}></div>
                                        <DislikeButton isLiked={false}/>
                                    </div>
                                </div>
                            </div>
                            <div className='clearfix' style={{ margin: '1em' }}></div>
                            <div className='desc-body'>
                                <div className='paragraph' dangerouslySetInnerHTML={{ __html: movie.movie.description }} style={{ lineHeight: "2em" }} />
                            </div>
                            <div className='desc-footer' style={{ backgroundColor: "pink", }}></div>
                        </div>
                        <div className='third'>
                            <span style={{ fontSize: "26px", lineHeight: "34px" }}>You May Also Like</span>
                            <div className='clearfix' style={{ margin: "1em" }}></div>
                            <div className='third' style={{ display: "grid", gridTemplateColumns: "repeat(3, 32%)", gap: "1rem" }}>
                                {movie.Similar_Movies.map(movie => <MovieView movie={movie} key={movie.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
// export { MovieDetailPage };
function mapState(state) {
    const { authentication, movies } = state;
    const { user } = authentication;
    return { user, movies };
}

const actionCreators = {
    getMovie: movieActions.getMovie
}


const connectedMovieDetailPage = connect(mapState, actionCreators)(MovieDetailPage);
export { connectedMovieDetailPage as MovieDetailPage };
