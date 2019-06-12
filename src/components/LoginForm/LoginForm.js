import React from 'react';
import BaseForm from '../BaseForm/BaseForm';
import {LOGIN_FORM_CONFIG} from './LoginFormConfig';
import MainButton from '../MainButton/MainButton';
import { Link } from "react-router-dom";
import './LoginForm.css';

class LoginForm extends React.Component{
    loginUser = (data)=>{
        const {users} = this.props;
        const existingUser = users.find((user)=>user.username === data.username && user.password === data.password);
        if(existingUser){
            this.props.loginUser(data);
            this.props.redirect('/');
        } else{
            document.getElementById('dialog-rounded').showModal(); 
        }
    }
    render(){
        return( <React.Fragment>
                    <BaseForm title='LOGIN' configFormData={LOGIN_FORM_CONFIG} buttonText='Enter' handleData={this.loginUser}/>
                    <dialog className="nes-dialog is-rounded" id="dialog-rounded">
                        <form method="dialog">
                        <p className="title">Invalid user!</p>
                        <p>Register for free!</p>
                        <menu className="dialog-menu">
                            <MainButton text='Cancel'/>
                            <Link className="nes-btn is-primary" to='/Register'>Register</Link>
                        </menu>
                        </form>
                    </dialog>
                </React.Fragment> );
    }
}

export default LoginForm;