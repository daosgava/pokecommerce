import React from 'react';
import './ShowErrors.css';

class ShowErrors extends React.Component{
    render(){
        const { errors } = this.props;
        if(errors){
            return( <div className="lists">
                    <ul className="nes-list is-disc">
                        { 
                            errors.map(
                                (error)=> <li key={error.key} className='nes-text is-error'><small>{error.text}</small></li>
                            )
                        }
                    </ul>
                </div> );
        }   
        return null;
    }
}

export default ShowErrors;