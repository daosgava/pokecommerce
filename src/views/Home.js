import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import registeredUsers from '../data/Users.json';
import MainLayout from '../layouts/MainLayout/MainLayout';
import SignUpLayout from '../layouts/SignUpLayout/SignUpLayout';

class Home extends React.Component{
    state = {
        users:registeredUsers
    }
    handleSaveUser = (data)=>{
        console.log('user data: ',data);
    }
    handleLoginUser = (data)=>{
        console.log('user data: ',data);
    }
    componentDidMount(){
        //console.log(this.state.users);
    }
    render (){
        return( <MainLayout>
                    <SignUpLayout login={ <LoginForm title='LOGIN' loginUser={this.handleLoginUser}/> } register={ <RegisterForm saveUser={this.handleSaveUser}/> } /> 
                </MainLayout> );
    }
}

export default Home;