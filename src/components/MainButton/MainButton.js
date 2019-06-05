import React from 'react';
import './MainButton.css'

class MainButton extends React.Component {
    render(){
        const {text} = this.props;
        return( 
            <button className='main-button nes-btn'>{text}</button>
        );
    }
}

export default MainButton;