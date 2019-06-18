const initialUser = {
    firstname: "",
    surname: "",
    username: "daosgava",
    email: "daosgava.garcia@gmail.com",
    password: "123",
  };
const users = (state = {registeredUsers:[initialUser], loggedInUser:{}, error:[]}, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            const newUser = {firstname : action.payload.results.firstname,
                surname : action.payload.results.surname,
                username : action.payload.results.username,
                email : action.payload.results.email,
                password : action.payload.results.password };
            return { ...state, registeredUsers: [...state.registeredUsers, newUser],  loggedInUser:newUser, loggedIn:true };
        case 'LOGIN_USER':
            const userFound = state.registeredUsers.filter((user)=>{
                if(user.username === action.payload.results.username && user.password === action.payload.results.password){
                    return {firstname : user.firstname,
                            surname : user.surname,
                            username : user.username,
                            email : user.email };
                }
                return null;
            });
            return { ...state, loggedInUser: userFound.length > 0 ? {...userFound[0], loggedIn:true } : {}};
        case 'LOGOUT_USER':
            return { ...state, loggedInUser: {} };
        default:
            return state;
    }
}

export default users;