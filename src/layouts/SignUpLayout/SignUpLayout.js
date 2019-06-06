import React from 'react';
import './SignUpLayout.css';

class SignUpLayout extends React.Component {
    state = {
        showOrHide: false
    }
    showOrHide = ()=>{
        this.setState(
            (state) => ({
                showOrHide: !state.showOrHide
            })
        )
    }
    render(){
        return( <div className='sign-up-container'>
                    <div className='login-form-container nes-container is-rounded with-title'>
                        {
                            this.state.showOrHide ? this.props.register : this.props.login 
                        }
                    </div>
                    <div className='option'>  
                        <button type="button" className="nes-btn is-primary" onClick={this.showOrHide}>{this.state.showOrHide ? 'Go to LOGIN' : 'Go to REGISTER'}</button>                
                    </div>
                </div> );
    }
}

export default SignUpLayout;