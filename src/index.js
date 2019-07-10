import React from 'react';
import ReactDOM from 'react-dom';
import  './style/ui.scss';
import App from './App';
import { Page404 } from './components/Page404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/:platform" exact component={App}/>
            <Route path="/:platform/name/:name" exact component={App}/>
            <Route path="/:platform/error" exact component={App}/>
            <Route path="*" component={Page404}/>
        </Switch>
    </Router>, 
    document.getElementById('root')
);