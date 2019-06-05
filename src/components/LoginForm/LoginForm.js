import React from 'react';
import MainButton from '../MainButton/MainButton';
import MainInput from '../MainInput/MainInput';
import FormValidation from '../../utils/FormValidation';
import ShowErrors from '../ShowErrors/ShowErrors';
import './LoginForm.css';

class LoginForm extends React.Component{
    state = {
        username:'',
        password: '',
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
                errorsLog: null
            });
            const userData = {
                username: this.state.username, 
                password: this.state.password
            }
            this.props.loginUser(userData);
        }else{
            this.setState({
                errorsLog: errors
            });
        }
    }
    render(){
        const { title } = this.props;
        const loginFormData = [
            { 
                labelText:'Username:', 
                inputName:'username', 
                inputValue:this.state.username, 
                onChangeMethod:this.handleChange, 
                inputType:'text', 
                isRequired:true
            },
            {
                labelText:'Password:', 
                inputName:'password',
                inputValue:this.state.surname,
                onChangeMethod:this.handleChange,
                inputType:'password',
                isRequired:true
            }
        ];
        return( <div className='login-form-container nes-container is-rounded with-title'>
                    <p className="title">{title}</p>
                    <form onSubmit={this.handleSubmit} noValidate>
                        {
                            loginFormData.map((input, index)=><MainInput key={index} {...input} />)
                        }
                        <ShowErrors errors = {this.state.errorsLog} />
                        <MainButton text='Enter'/>
                    </form>
                </div> );
    }
}

export default LoginForm;