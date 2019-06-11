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
        return( <div className="section-container">
                    <h3>ITEMS AVAILABLE</h3>
                    <div className='pokelist-container'>
                        {
                            pokeItems && pokeItems.map((item)=><PokeItem key={item.id} {...item} addToCart={this.handleAddToCart}/>)
                        }
                    </div>
                    <h3>ITEMS ADDED TO CART</h3>
                    <div className='pokelist-container'>
                        {
                            addedToCart.length > 0 ? addedToCart.map((item)=><PokeItem key={item.id} {...item} removeFromCart={this.handleRemoveFromCart} />) : <h4>There are not items.</h4>
                        }
                    </div>
                </div> );
    }
}

export default PokeItemsList;