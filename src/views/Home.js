import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import registeredUsers from '../data/Users.json';
import MainLayout from '../layouts/MainLayout/MainLayout';
import SignUpLayout from '../layouts/SignUpLayout/SignUpLayout';
import PokeItemsList from '../containers/PokeItemsList'

class Home extends React.Component{
    state = {
        users:registeredUsers
    }
    render (){
        return( <MainLayout>
                    <SignUpLayout login={ <LoginForm/> } register={ <RegisterForm/> } /> 
                    <PokeItemsList/>
                </MainLayout> );
    }
}

export default Home;