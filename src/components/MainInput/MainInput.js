import React from 'react';
import './MainInput.css'

class MainInput extends React.Component{
    render(){
        const { labelText, inputType, inputName, onChangeMethod, inputValue, defaultValue, isRequired } = this.props;
        return( <div className='main-input nes-field'>
                    <label>{labelText}</label>
                    {!onChangeMethod && !defaultValue &&
                        <p>Error, not enought properties!</p>
                    }
                    <input className='nes-input' type={inputType} name={inputName} onChange={onChangeMethod} value={!onChangeMethod ? (!defaultValue ? 'A defaultValue is required or a onChangeMethod' : defaultValue ) : inputValue} readOnly={onChangeMethod ? false : true} required={isRequired ? true: false}/>
                </div> );
    }
}

export default MainInput;