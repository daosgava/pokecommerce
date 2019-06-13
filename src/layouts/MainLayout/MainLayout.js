import React from 'react';
import { Link } from "react-router-dom";
import './MainLayout.css';

class MainLayout extends React.Component {
    componentDidMount(){
        window.onscroll = () => this.fixedHeader();
    }
    fixedHeader = () => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    render(){
        const {found} = this.props;
        return( <React.Fragment>
                    <div className='top-container'>
                        <p className='header-title'><i className='nes-pokeball'></i> Pokemart <i className="nes-bulbasaur"></i></p>
                    </div>
                    
                    <div className='header' id='myHeader'>
                        <div className='logo'><i className="nes-logo"></i></div>
                        
                        <div className='navbar'>
                            {!found ? <><Link to='/Register'> Register</Link> <Link to='/Login'><i className="fa fa-user" aria-hidden="true"></i> Login</Link></> : <Link to='/login' onClick={()=>{this.props.logoutUser();this.props.removeAllPokeItemsFromCart();} }><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link>}
                            
                            {found ? <Link to='/'><i className="fa fa-fw fa-home"></i> Pokeitems</Link> :''}
                        </div>
                    </div>
                    
                    <div className='content'>
                        {this.props.children}
                    </div>
                </React.Fragment> );
    }
}

export default MainLayout;