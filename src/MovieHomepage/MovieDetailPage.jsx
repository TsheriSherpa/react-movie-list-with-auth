import React from 'react' 
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import {MovieList}  from './MovieList';

class MovieDetailPage extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render () {        
        return (
            <div className="row">
                <div className="cover">

                </div>
            </div>
        );

    }
}

export { MovieDetailPage };
