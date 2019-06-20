import React from 'react';
import './MainButton.css'

class MainButton extends React.Component {
    render(){
        const {text, icon, extraClasses, onClickMethod} = this.props;
        return( 
            <button className={extraClasses ? `main-button nes-btn ${extraClasses}` : 'main-button nes-btn'} onClick={onClickMethod}>{text}{icon}</button>
        );
    }
}

export default MainButton;