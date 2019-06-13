import React from 'react';
import './MainButton.css'

class MainButton extends React.Component {
    render(){
        const {text, extraClasses, onClickMethod} = this.props;
        return( 
            <button className={extraClasses ? `main-button nes-btn ${extraClasses}` : 'main-button nes-btn'} onClick={onClickMethod}>{text}</button>
        );
    }
}

export default MainButton;