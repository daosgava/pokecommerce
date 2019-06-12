import React from 'react';
import { Link } from "react-router-dom";
import './MainLayout.css';

class MainLayout extends React.Component {
    componentDidMount(){
        window.onscroll = function() {fixedHeader()};
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function fixedHeader() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
    render(){
        const {found} = this.props;
        console.log(this.props);
        return( <React.Fragment>
                    <div className='top-container'>
                        <p className='header-title'><i className='nes-pokeball'></i> Bootcamp <i className="nes-bulbasaur"></i></p>
                    </div>
                    
                    <div className='header' id='myHeader'>
                        <p className='main-title'>Pokemart </p>
                        
                        <div className='navbar'>
                            {!found ? <><Link to='/Register'> Register</Link> <Link to='/Login'>Login</Link></> : <Link onClick={()=>this.props.logoutUser()}> Logout</Link>}
                            
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