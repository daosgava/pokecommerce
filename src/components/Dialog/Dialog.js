import React from 'react';
import MainButton from '../MainButton/MainButton';
import './Dialog.css';

class Dialog extends React.Component{
    render(){
        const { text, buttonText } = this.props;
        return( <dialog className="nes-dialog is-rounded" id="dialog-rounded">
                    <form method="dialog">
                    <p className="title">{text}</p>
                    <menu className="dialog-menu">
                        <MainButton text={buttonText}/>
                    </menu>
                    </form>
                </dialog> );
    }
}

export default Dialog;