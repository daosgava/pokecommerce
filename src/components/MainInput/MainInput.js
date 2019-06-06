import React from 'react';
import './MainInput.css'

class MainInput extends React.Component{
    render(){
        const { label, type, name, isRequired, onChangeMethod, inputValue } = this.props;
        return( <div className='main-input nes-field'>
                    <label>{label}</label>
                    <input className='nes-input' type={type} name={name} onChange={onChangeMethod} value={inputValue} required={isRequired ? true: false}/>
                </div> );
    }
}

export default MainInput;