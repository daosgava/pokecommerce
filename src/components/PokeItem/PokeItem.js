import React from 'react';
import MainButton from '../MainButton/MainButton';
import './PokeItem.css';

class PokeItem extends React.Component{
    render(){
        let {name, description, image} = this.props;
        return( <div class='cell nes-container with-title is-centered'>
                    <p class="title">{name}  <img src={image} alt={name}/></p>
                    <small>{description.short_effect}</small>
                    <MainButton extraClasses='bottom-down' text='Add'/>
                </div> );
    }
}

export default PokeItem;