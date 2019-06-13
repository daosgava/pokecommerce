import React from 'react';
import MainButton from '../MainButton/MainButton';
import MainInput from '../MainInput/MainInput';
import ShowErrors from '../ShowErrors/ShowErrors';
import FormValidation from '../../utils/FormValidation';

class BaseForm extends React.Component{
    constructor(props) {
        super(props);
        const model = this.createModel();
        this.state = { 
            data : model,
            errorsLog : null
        }
    }
    createModel = () => {
        const fields = this.props.configFormData.map((item)=>item.name);
        let model = null;
        for(let i = 0; i < fields.length; i++){
            const field = fields[i];
            model = {...model,[field]:''};
        }
        return model;
    }
    handleChange = (e)=>{;
        const {name, value} = e.target;
        this.setState((state)=>{
            const newState = {
                data : { ...state.data, [name]:value }
            }
            return newState;
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const formValidation = new FormValidation();
        const errors = formValidation.validate(e.target);
        if(errors.length === 0){
            this.setState({
                errorsLog : null
            });
            this.props.handleData(this.state.data);
        }else{
            this.setState({
                errorsLog : errors
            });
        }
    }
    render(){
        const {title, configFormData, buttonText} = this.props;
        return( <React.Fragment>
                    <p className="title">{title}</p>
                    <form onSubmit={this.handleSubmit} noValidate>
                        {
                            configFormData.map((input, index)=><MainInput key={index} {...input} onChangeMethod={this.handleChange} inputValue={this.state.data[input.name]}/>)
                                                                
                        }
                        <ShowErrors errors = {this.state.errorsLog} />
                        <MainButton extraClasses='is-primary' text={buttonText}/>
                    </form>
                </React.Fragment> );
    }
}

export default BaseForm;