import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Header from './Header/Header';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Router path="/" exact component={Home} />
                <Router path="/tv" exact component={TV} />
                <Router path="/search" exact component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)