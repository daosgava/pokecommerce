import { combineReducers } from 'redux';
import pokeItems from './pokeItems';
import users from './users';

const reducers = combineReducers({
    pokeItems,
    users
})

export default reducers;