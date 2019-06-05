class FormValidation {
    validate = (form)=>{
        const errors = [];
        let id = 0;
        for(let i = 0; i < form.length; i++){
            if(form[i].type !== 'submit' && form[i].required === true){
                if(!form[i].value){
                    id++;
                    errors.push({key:id, text:`${form[i].name} is required!`})
                }
                if(form[i].name === 'email' && form[i].value && !this.validateEmail(form[i].value)){
                    id++;
                    errors.push({key:id,text:'The Email is not valid!'});
                }
                if(form[i].name === 'password' && form[i+1].name === 'confirmPassword' && form[i].value && form[i+1].value && form[i].value !== form[i+1].value){
                    id++;
                    errors.push({key:id, text:'Passwords don\'t match!'});
                }
            }
        }
        return errors;
    }
    validateEmail = (email) => {
        const re = /[^@]+@[^@]+\.[^@]+/;
        return re.test(email);
    }
}

export default FormValidation;