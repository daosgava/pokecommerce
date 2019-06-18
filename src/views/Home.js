import React from 'react';
import PokeItemsList from '../containers/PokeItemsList';
import { Redirect } from 'react-router-dom';

class Home extends React.Component{
    render (){
        const loggedInUser = Object.keys(this.props.users.loggedInUser).length > 0;
        if (!loggedInUser) return <Redirect to={'/login'} />;
        return( <React.Fragment>
                { 
                    loggedInUser && <PokeItemsList/>
                }
                </React.Fragment>);
        }
}

export default Home;