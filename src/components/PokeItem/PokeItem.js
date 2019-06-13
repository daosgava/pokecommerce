import React from 'react';
import './PokeItem.css';

class PokeItem extends React.Component{
    render(){
        const {id, name, description, image, cost, addToCart, removeFromCart} = this.props;
        return( <div className='cell nes-container with-title is-centered'>
                    <p className="title">{name}  <img src={image} alt={name}/></p>
                    <small>{description.short_effect}</small>
                    <br></br>
                    <p className='price'>{cost} <i className="nes-icon coin is-small"></i></p>
                    {
                        addToCart ? <button className='main-button nes-btn is-success bottom-down' onClick={()=>addToCart({id:id, name:name, description:description, image:image, cost:cost})}>Add</button> : <button className='main-button is-warning nes-btn bottom-down' onClick={()=>removeFromCart({id:id})}>Remove</button>
                    }
                </div> );
    }
}

export default PokeItem;