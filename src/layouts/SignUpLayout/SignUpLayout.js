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
                    <div className={`${this.state.showOrHide ? 'hide' : 'show'}`}>
                        {this.props.login}
                    </div>
                    <div className={`${this.state.showOrHide ? 'show' : 'hide'}`}>
                        {this.props.register}
                    </div>  
                    <div className='option'>                  
                        <button className='nes-badge' onClick={this.showOrHide}>
                            <span className='is-primary'>{this.state.showOrHide ? 'Go to LOGIN' : 'Go to REGISTER'}</span>
                        </button>
                    </div>
                </div> );
    }
}

export default SignUpLayout;