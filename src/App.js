import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './_components/views/LandingPage';
import RegisterPage from './_components/views/RegisterPage';
import LoginPage from './_components/views/LoginPage';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;