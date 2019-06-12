import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../views/Login';
import Register from '../views/Register';

function Routes(){
    return( <React.Fragment>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
            </React.Fragment> );
}

export default Routes;
