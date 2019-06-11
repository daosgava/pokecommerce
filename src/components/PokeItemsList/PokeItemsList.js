import React from 'react';
import PokeItem from '../PokeItem/PokeItem';
import './PokeItemsList.css';

class PokeItemsList extends React.Component{
    componentDidMount(){
        this.props.fetchPokeItems();
    }
    render(){
        const pokeItems = this.props.pokeItems;
        return( <div class='pokelist-container'>
                    {
                       pokeItems && pokeItems.map((item)=><PokeItem key={item.id} {...item}/>)
                    }
                </div> );
    }
}

export default PokeItemsList;