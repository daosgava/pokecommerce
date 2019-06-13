import React from 'react';
import BaseForm from '../BaseForm/BaseForm';
import {REGISTER_FORM_CONFIG} from './RegisterFormConfig';
import './RegisterForm.css';

class RegisterForm extends React.Component{
    saveData = (data)=>{
        this.props.registerUser(data);
        this.props.redirect('/login');
    }
    render(){ 
        return( <React.Fragment>
                    <BaseForm title='REGISTER' configFormData={REGISTER_FORM_CONFIG} buttonText='Submit' handleData={this.saveData}/>
                </React.Fragment> );
    }
}

export default RegisterForm;