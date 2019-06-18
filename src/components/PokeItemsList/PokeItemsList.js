import React, {lazy, Suspense} from 'react';
import MainButton from '../MainButton/MainButton';
import './PokeItemsList.css';
const PokeItem = lazy(() => import('../PokeItem/PokeItem'));

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
        let total = 0;
        return( <Suspense fallback={<i className="fa fa-cog fa-spin fa-3x fa-fw"></i>}>
                        <div className="section-container outer-container">
                            <div id="content">
                                <p className='section-title'>ITEMS AVAILABLE</p>
                                <div className='pokelist-container'>
                                    {
                                        pokeItems.map((item)=><PokeItem key={item.id} {...item} addToCart={this.handleAddToCart}/>)
                                    }
                                </div>
                            </div>
                            {   
                                addedToCart.length > 0 &&
                                <div id="sidebar">
                                    <p className='section-title'>CART</p>
                                    <div className='cart-container'>
                                        {
                                            addedToCart.length > 0 ? addedToCart.map((item, index)=>{
                                                                    total +=item.cost; 
                                                                    return<PokeItem key={index} {...item} removeFromCart={this.handleRemoveFromCart} /> }) 
                                                                    : ''
                                        }
                                    </div>
                                    <p className='fixed'>Total: {total} <i className="nes-icon coin is-small"></i> <MainButton text='Pay' extraClasses='is-success'/></p>
                                </div> 
                            }
                        </div>
                    </Suspense> );
    }
}

export default PokeItemsList;