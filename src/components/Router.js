import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Home from '../Routes/Home';
import TV from '../Routes/TV/TVPresenter';
import Search from '../Routes/Search/SearchPresenter';
import Header from './Header/Header';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Router path="/" exact component={Home} />
                <Router path="/tv" component={TV} />
                <Router path="/search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)