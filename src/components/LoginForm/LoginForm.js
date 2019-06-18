import React from 'react';
import BaseForm from '../BaseForm/BaseForm';
import {LOGIN_FORM_CONFIG} from './LoginFormConfig';
import { Redirect } from "react-router-dom";
import Dialog from '../Dialog/Dialog';
import './LoginForm.css';


class LoginForm extends React.Component{
    loginUser = (data)=>{
        const {users} = this.props;
        const existingUser = users.registeredUsers.find((user)=>user.username === data.username && user.password === data.password);
        if(existingUser){
            this.props.loginUser(data)
        }else{
            document.getElementById('dialog-rounded').showModal(); 
        }

    }
    render(){
        const {users} = this.props;
        const loggedInUser = Object.keys(users.loggedInUser).length > 0;
        return( !loggedInUser ?
                <React.Fragment>
                    <BaseForm title='LOGIN' configFormData={LOGIN_FORM_CONFIG} buttonText='Enter' handleData={this.loginUser}/>
                    <Dialog text='Invalid users, Try again!' buttonText='close' />
                </React.Fragment> : <Redirect to='/'></Redirect>);
    }
}

export default LoginForm;