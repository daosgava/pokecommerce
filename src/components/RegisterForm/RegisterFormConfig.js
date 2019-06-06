export const REGISTER_FORM_CONFIG = [
    { 
        label:'First Name:', 
        name:'firstname', 
        type:'text'
    },
    {
        label:'Surname:', 
        name:'surname',
        type:'text'
    },
    {
        label:'Username:', 
        name:'username',
        type:'text', 
        isRequired:true
    },
    {   label:'Email:',
        name:'email',
        type:'text',
        isRequired:true
    },
    {
        label:'Password:',
        name:'password',
        type:'password',
        isRequired:true
    },
    {    
        label:'Confirm Password:',
        name:'confirmPassword',
        type:'password',
        isRequired:true
    }
];