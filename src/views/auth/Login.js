import React from 'react';
import {NavLink} from "react-router-dom";

function Login(props) {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4">
                    <div className="text-center mb-4">
                        Go to <NavLink to="/"> Home </NavLink>
                    </div>
                    <div className="card">
                        <div className="card-header">Login Page</div>
                        <div className="card-body">
                            <div className="mb-4">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" className="form-control"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;