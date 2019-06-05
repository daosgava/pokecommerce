import React from 'react';
import User from '../../entities/User';
import MainButton from '../MainButton/MainButton';
import MainInput from '../MainInput/MainInput';
import FormValidation from '../../utils/FormValidation';
import ShowErrors from '../ShowErrors/ShowErrors';
import './RegisterForm.css';

class RegisterForm extends React.Component{
    state = {
        firstname: '',
        surname: '',
        username:'',
        email:'',
        password: '',
        confirmPassword: '',
        errorsLog : null
    }
    handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const formValidation = new FormValidation();
        const errors = formValidation.validate(e.target);
        if(errors.length === 0){
            this.setState({
                errorsLog : null
            });
            const user = new User(this.state.firstname, 
                                this.state.surname, 
                                this.state.username, 
                                this.state.email, 
                                this.state.password);

            this.props.saveUser(user);
        }else{
            this.setState({
                errorsLog : errors
            });
        }
    }
    render(){
        const { title } = this.props;
        const registerFormData = [
            { 
                labelText:'First Name:', 
                inputName:'firstname', 
                inputValue:this.state.firstname, 
                onChangeMethod:this.handleChange, 
                inputType:'text'
            },
            {
                labelText:'Surname:', 
                inputName:'surname',
                inputValue:this.state.surname,
                onChangeMethod:this.handleChange,
                inputType:'text'
            },
            {
                labelText:'Username:', 
                inputName:'username',
                inputValue:this.state.username, 
                onChangeMethod:this.handleChange,
                inputType:'text', 
                isRequired:true
            },
            {   labelText:'Email:',
                inputName:'email',
                inputValue:this.state.email,
                onChangeMethod:this.handleChange,
                inputType:'text',
                isRequired:true
            },
            {
                labelText:'Password:',
                inputName:'password',
                inputValue:this.state.password,
                onChangeMethod:this.handleChange,
                inputType:'password',
                isRequired:true
            },
            {    
                labelText:'Confirm Password:',
                inputName:'confirmPassword',
                inputValue:this.state.confirmPassword, 
                onChangeMethod:this.handleChange,
                inputType:'password',
                isRequired:'true'
            }
        ];
        return( <div className='nes-container is-rounded login-container'>
                    <p className='title'>{title}</p>
                    <form onSubmit={this.handleSubmit} noValidate>
                        {   
                            registerFormData.map((input, index)=><MainInput key={index} {...input} />)
                        }
                        <ShowErrors errors = {this.state.errorsLog} />
                        <MainButton text='Submit'/>
                    </form>
                </div> );
    }
}

export default RegisterForm;