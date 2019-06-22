import React from 'react';
import MainButton from '../MainButton/MainButton';
import './PokeItem.css';

class PokeItem extends React.Component{
    state = {
        quantity: 0
    }
    componentDidMount(){
        const {quantity} = this.props;
        this.setState((state) => {
                const newQuantity = quantity > 0 ? quantity : state.quantity;
                return { quantity: newQuantity }
            });
    }
    handleMinusButton = () => {
        const {id, removeFromCart} = this.props;
        this.setState((state)=>{
            const newQuantity = state.quantity > 0 ? state.quantity-1: state.quantity;
            if (removeFromCart){
                this.props.updateCart({id:id, quantity:newQuantity})
            }
            return { quantity: newQuantity }
        });

    }
    handlePlusButton = () => {
        const {id, removeFromCart} = this.props;
        this.setState((state)=>{
            const newQuantity = state.quantity+1;
            if (removeFromCart){
                this.props.updateCart({id:id, quantity:newQuantity})
            }
            return { quantity: newQuantity }
        });
    }
    componentDidUpdate(prevProps){
        const {id, quantity, removeFromCart} = this.props;
        if(this.state.quantity === 0 && removeFromCart){
            removeFromCart({id:id});
        }
        if(prevProps.quantity !== quantity){
            this.setState((state) => {
                return { quantity: quantity }
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.quantity !== nextProps.quantity) {
          return true;
        }
        if (this.state.quantity !== nextState.quantity) {
          return true;
        }
        return false;
      }
    render(){
        const {id, name, description, image, cost, addToCart, removeFromCart} = this.props;
        return( <div className='cell nes-container with-title is-centered'>
                    <p className="title">{name}  <img src={image} alt={name}/></p>
                    <p>{description.short_effect}</p>
                    <p className='price'>{cost} <i className="nes-icon coin is-small"></i></p>
                    <div className='quantity-container'>
                        <button className='plus-button' onClick={this.handlePlusButton}><i className='fa fa-plus' aria-hidden='true'></i></button>
                        <p className='quantity-description'>{this.state.quantity}</p>
                        <button className='minus-button' onClick={this.handleMinusButton}><i className='fa fa-minus' aria-hidden='true'></i></button>
                    </div>
                    {
                        addToCart ? <MainButton text='Add' icon={<><i className='fa fa-cart-plus' aria-hidden='true'></i></>} extraClasses={this.state.quantity > 0 ? 'bottom-down is-success' :'bottom-down is-disabled'} onClickMethod={()=>addToCart({id:id, name:name, description:description, image:image, cost:cost, quantity:this.state.quantity})}/> : <MainButton text='Remove' extraClasses='is-warning bottom-down' onClickMethod={()=>removeFromCart({id:id})}>Remove</MainButton>
                    }
                </div> );
    }
}

export default PokeItem;