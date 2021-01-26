import React from 'react';
import { NavLink } from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import {authUser, theme} from "../store";

function NavBar({children}) {
    const {user} = useRecoilValue(authUser)
    const [currentTheme, setCurrentTheme] = useRecoilState(theme)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">My Apps</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>
                        </ul>

                        <div className="d-flex text-white">
                            <div className="me-3">
                                {user.name}
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input shadow-none" value={ currentTheme === 'light' ? 'dark' : 'light'} onChange={(e) => setCurrentTheme(e.target.value)} type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="py-4">
                {children}
            </div>
        </div>
    );
}

export default NavBar;