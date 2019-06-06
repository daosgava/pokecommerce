import React from 'react';
import BaseForm from '../BaseForm/BaseForm';
import {LOGIN_FORM_CONFIG} from './LoginFormConfig';
import './LoginForm.css';

class LoginForm extends React.Component{
    state = {
        username:'',
        password: '',
        errorsLog : null
    }
    loginUser = (data)=>{
        console.log('Login',data);
    }
    render(){
        return( <React.Fragment>
                    <BaseForm title='LOGIN' onSubmitMethod={this.handleSubmit} configFormData={LOGIN_FORM_CONFIG} errorsLog={this.state.errorsLog} buttonText='Enter' handleData={this.loginUser}/>
                </React.Fragment> );
    }
}

export default LoginForm;