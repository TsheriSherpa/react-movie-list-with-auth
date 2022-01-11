import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        // this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user } = this.props;
        return (
            <div className="row" style={{ "margin": "0 auto" }}>
                <div className="col d-flex justify-content-center  vertical-center">
                    <h1>Hi {user.name}! &nbsp;&nbsp;</h1><br/>
                    <p>
                        <Link to="/login"><strong>Logout</strong></Link>
                    </p>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    console.log(state)

    const { authentication } = state;
    const { user } = authentication;
    return { user };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };