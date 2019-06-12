import React from 'react';
import PokeItem from '../PokeItem/PokeItem';
import './PokeItemsList.css';

class PokeItemsList extends React.Component{
    componentDidMount(){
        this.props.fetchPokeItems();
    }
    handleAddToCart = (item)=>{
        this.props.addPokeItemToCart(item);
    }
    handleRemoveFromCart = (item)=>{
        this.props.removePokeItemFromCart(item);
    }
    render(){
        const pokeItems = this.props.pokeItems;
        const addedToCart = this.props.addedToCart;
        return( <div className="section-container outer-container">
                    <div id="content">
                        <p className='section-title'>ITEMS AVAILABLE</p>
                        <div className='pokelist-container'>
                            {
                                pokeItems && pokeItems.map((item)=><PokeItem key={item.id} {...item} addToCart={this.handleAddToCart}/>)
                            }
                        </div>
                    </div>
                    {   
                        addedToCart.length > 0 &&
                        <div id="sidebar">
                            <p className='section-title'>CART</p>
                            <div className='cart-container'>
                                {
                                    addedToCart.length > 0 ? addedToCart.map((item)=><PokeItem key={item.id} {...item} removeFromCart={this.handleRemoveFromCart} />) : ''
                                }
                            </div>
                        </div> 
                    }
                </div> );
    }
}

export default PokeItemsList;