import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import MainLayout from '../layouts/MainLayout/MainLayout';

const mapStateToProps = (state)=>{
    return state.users;
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    logoutUser
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout);