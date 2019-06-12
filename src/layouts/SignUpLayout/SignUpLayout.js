import React from 'react';
import './SignUpLayout.css';

class SignUpLayout extends React.Component {
    render(){
        return( <div className='sign-up-container'>
                    <div className='login-form-container nes-container is-rounded with-title'>
                        {this.props.children}
                    </div>
                </div> );
    }
}

export default SignUpLayout;