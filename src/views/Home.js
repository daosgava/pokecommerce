import React from 'react';
import PokeItemsList from '../containers/PokeItemsList';

class Home extends React.Component{
    render (){
        const {found} = this.props;
        return( <React.Fragment>
                { 
                    found ? <PokeItemsList/> : this.props.history.push('/login')
                }
                </React.Fragment>);
        }
}

export default Home;