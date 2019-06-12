const initialUser = {
    "firstname": "",
    "surname": "",
    "username": "daosgava",
    "email": "daosgava.garcia@gmail.com",
    "password": "123",
  };
const users = (state = {users:[initialUser], found:0, error:[]}, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return{ ...state,               
                users: [...state.users, action.payload.results] };
        case 'LOGIN_USER':
            const userFound = state.users.filter((user)=>{
            if(user.username === action.payload.results.username && user.password === action.payload.results.password){
                return user;
            }
            return null;
            });
            let found = false;
            if(userFound.length > 0){
                found = true;
            }
            return{ ...state, found: found };
        case 'LOGOUT_USER':
                return{ ...state, found: false };
        default:
            return state;
    }
}

export default users;