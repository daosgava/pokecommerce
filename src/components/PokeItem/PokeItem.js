import React from 'react';
import MainButton from '../MainButton/MainButton';
import './PokeItem.css';

class PokeItem extends React.Component{
    render(){
        const {id, name, description, image, cost, addToCart, removeFromCart} = this.props;
        return( <div className='cell nes-container with-title is-centered'>
                    <p className="title">{name}  <img src={image} alt={name}/></p>
                    <p>{description.short_effect}</p>
                    <p className='price'>{cost} <i className="nes-icon coin is-small"></i></p>
                    {
                        addToCart ? <MainButton text='Add' extraClasses='is-success  bottom-down' onClickMethod={()=>addToCart({id:id, name:name, description:description, image:image, cost:cost})}/> : <MainButton text='Remove' extraClasses='is-warning bottom-down' onClickMethod={()=>removeFromCart({id:id})}>Remove</MainButton>
                    }
                </div> );
    }
}

export default PokeItem;