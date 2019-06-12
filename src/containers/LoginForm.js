import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import LoginForm from '../components/LoginForm/LoginForm';

const mapStateToProps = (state)=>{
    return state.users;
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    loginUser
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);