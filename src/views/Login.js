import React from 'react';
import LoginForm from '../containers/LoginForm';
import SignUpLayout from '../layouts/SignUpLayout/SignUpLayout';
import { withRouter } from 'react-router-dom';

class Login extends React.Component{
    handleRedirect = (path) => {
        this.props.history.push(path);
    }
    render (){
        return( <React.Fragment>
                    <SignUpLayout>
                        <LoginForm redirect={this.handleRedirect}/>
                    </SignUpLayout>
                </React.Fragment> );
    }
}

export default withRouter(Login);