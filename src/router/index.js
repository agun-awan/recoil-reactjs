import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import NotFound from "../views/errors/404";
import Login from "../views/auth/Login";
import UserIndex from "../views/users/Index";
import UserShow from "../views/users/Show";
import NavBar from "../components/NavBar";

function Router(props) {
    return (
        <Switch>
            <Route exact path='/'>
                <NavBar>
                    <Home />
                </NavBar>
            </Route>
            <Route path='/about'>
                <NavBar>
                    <About />
                </NavBar>
            </Route>
            <Route path='/contact'>
                <NavBar>
                    <Contact />
                </NavBar>
            </Route>
            <Route exact path='/users'>
                <NavBar>
                    <UserIndex />
                </NavBar>
            </Route>
            <Route path='/users/:identifier'>
                <NavBar>
                    <UserShow />
                </NavBar>
            </Route>

            <Route path='/login' component={Login} />
            <Route path='*' component={NotFound} />
        </Switch>
    );
}

export default Router;