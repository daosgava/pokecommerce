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
    handleUpdatePokeItemInCart = (item)=>{
        this.props.updatePokeItemInCart(item);
    }
    render(){
        const {pokeItems, areFetched} = this.props;
        const addedToCart = this.props.addedToCart;
        let totalItemsAddedToCart = 0;
        return( <Suspense fallback={<i className="fa fa-cog fa-spin fa-3x fa-fw"></i>}>
                        <div className="section-container outer-container">
                            {
                                !areFetched ?    <div className='loading'>
                                                            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                
                                                    :   <div id="content">
                                                            <p className='section-title'>ITEMS AVAILABLE</p>
                                                            <div className='pokelist-container'>
                                                                {
                                                                    pokeItems.map((item)=><PokeItem key={item.id} {...item} addToCart={this.handleAddToCart}/>)
                                                                }
                                                            </div>
                                                        </div>
                            }

                            {   
                                addedToCart.length > 0 &&
                                <div id="sidebar">
                                    <p className='section-title'>CART</p>
                                    <div className='cart-container'>
                                        {
                                            addedToCart.length > 0 ? addedToCart.map((item, index)=>{
                                                                    totalItemsAddedToCart +=item.cost*item.quantity; 
                                                                    return<PokeItem key={index} {...item} removeFromCart={this.handleRemoveFromCart} updateCart={this.handleUpdatePokeItemInCart}/> }) 
                                                                    : ''
                                        }
                                    </div>
                                    <p className='fixed'>Total: {totalItemsAddedToCart} <i className="nes-icon coin is-small"></i> <MainButton text='Pay' icon={<><i className="fa fa-money" aria-hidden="true"></i></>} extraClasses='is-success'/></p>
                                </div> 
                            }
                        </div>
                    </Suspense> );
    }
}

export default PokeItemsList;