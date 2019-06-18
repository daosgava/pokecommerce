import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    registerUser
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);