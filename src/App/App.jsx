import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { MovieDetailPage, MovieHomepage } from '../MovieHomepage';
import { Navbar } from '../NavbarPage';
import '../styles/index.css';
import { withRouter } from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        return (
            <div className="container-fluid movie-app">
                <Router history={history}>
                    <Navbar />
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <PrivateRoute exact path="/movies/:id" component={withRouter(MovieDetailPage)} />
                        <PrivateRoute path="/movies" component={MovieHomepage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };