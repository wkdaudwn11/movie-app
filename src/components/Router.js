import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Home from '../Routes/Home';
import TV from '../Routes/TV/TVPresenter';
import Header from './Header/Header';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Router path="/" exact component={Home} />
                <Router path="/tv" component={TV} />
                <Router path="/search" component={Search} />

                <Router path="/movie/:id" component={Detail} />
                <Router path="/show/:id" component={Detail} />

                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)