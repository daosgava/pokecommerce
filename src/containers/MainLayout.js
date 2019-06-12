import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser, removeAllPokeItemsFromCart } from '../actions';
import MainLayout from '../layouts/MainLayout/MainLayout';

const mapStateToProps = (state)=>{
    return state.users;
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    logoutUser,
    removeAllPokeItemsFromCart
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout);