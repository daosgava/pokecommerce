import React from 'react';
import BaseForm from '../BaseForm/BaseForm';
import {REGISTER_FORM_CONFIG} from './RegisterFormConfig';
import Dialog from '../Dialog/Dialog';
import './RegisterForm.css';

class RegisterForm extends React.Component{
    saveData = (data)=>{
        const {users} = this.props;
        const existingUser = users.registeredUsers.find((user)=>user.username === data.username && user.password === data.password);
        if(!existingUser){
            this.props.registerUser(data);
            this.props.redirect('/');
        }else{
            document.getElementById('dialog-rounded').showModal(); 
        }
    }
    render(){ 
        return( <React.Fragment>
                    <BaseForm title='REGISTER' configFormData={REGISTER_FORM_CONFIG} buttonText='Submit' handleData={this.saveData}/>
                    <Dialog text='This user is already registered!' buttonText='close' />
                </React.Fragment> );
    }
}

export default RegisterForm;