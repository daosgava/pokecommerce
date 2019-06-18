import React from 'react';
import PokeItemsList from '../containers/PokeItemsList';

class Home extends React.Component{
    render (){
        const {users} = this.props;
        const loggedInUser = Object.keys(users.loggedInUser).length > 0;
        return( <React.Fragment>
                { 
                    loggedInUser ? <PokeItemsList/> : this.props.history.push('/login')
                }
                </React.Fragment>);
        }
}

export default Home;