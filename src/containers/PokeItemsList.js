import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPokeItems, addPokeItemToCart, removePokeItemFromCart } from '../actions';
import PokeItemsList from '../components/PokeItemsList/PokeItemsList';

const mapStateToProps = (state)=>{
    return {
        pokeItems:state.pokeItems.all,
        addedToCart:state.pokeItems.addedToCart
    }
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    fetchPokeItems,
    addPokeItemToCart,
    removePokeItemFromCart
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PokeItemsList);