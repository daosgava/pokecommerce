import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPokeItems } from '../actions';
import PokeItemsList from '../components/PokeItemsList/PokeItemsList';

const mapStateToProps = (state)=>{
    return {
        pokeItems:state.pokeItems.data
    }
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    fetchPokeItems
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PokeItemsList);