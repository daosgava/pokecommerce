import React from 'react';
import './MainButton.css'

class MainButton extends React.Component {
    render(){
        const {text, extraClasses} = this.props;
        return( 
            <button className={extraClasses ? `main-button nes-btn ${extraClasses}` : 'main-button nes-btn'}>{text}</button>
        );
    }
}

export default MainButton;