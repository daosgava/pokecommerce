import React from 'react';
import LoginForm from '../containers/LoginForm';
import SignUpLayout from '../layouts/SignUpLayout/SignUpLayout';
import { withRouter } from 'react-router-dom';

class Login extends React.Component{
    render (){
        return( <React.Fragment>
                    <SignUpLayout>
                        <LoginForm/>
                    </SignUpLayout>
                </React.Fragment> );
    }
}

export default withRouter(Login);