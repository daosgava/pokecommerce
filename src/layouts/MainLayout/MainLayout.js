import React from 'react';
import './MainLayout.css';

class MainLayout extends React.Component {
    render(){
        return( <div>
                    <p className='main-title'>Pokemart <i className="nes-pokeball"></i>
                    </p>
                    {this.props.children}
                </div> );
    }
}

export default MainLayout;