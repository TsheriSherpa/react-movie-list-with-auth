import React from "react";
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    
    constructor(props) {
        super(props);
    }


    render(){
        const { user } = this.props;
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark" style={{ "fontSize": "1.3rem" }}>
                <a className="navbar-brand" href="#"><img src="https://mnmdev.truestreamz.com/momo.png"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"><strong>Home </strong><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/movies"><strong>Movies </strong> <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <form className="form-inline navbar-nav mr-auto ">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    { user ? 
                        <li className="nav-item dropdown navbar-nav my-2 my-lg-0" style={{"textAlign": "left"}}>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {user.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Profile</a>
                                <Link className="dropdown-item" to="/login">Logout</Link>
                                {/* <div className="dropdown-divider"></div> */}
                                {/* <a className="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </li>
                    : 
                        <ul className="nav-item dropdown navbar-nav my-2 my-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        );
    };
}

function mapState(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user };
}

const actionCreators = {
    logout: userActions.logout,
}

const connectedNavbar = connect(mapState, actionCreators)(Navbar);
export { connectedNavbar as Navbar };