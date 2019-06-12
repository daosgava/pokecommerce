import {consumePokeItems,getItemDetail} from '../api/pokeItems';

export const getAllPokeItems = (data) => {
  return {
    type: 'GET_ALL_POKEITEMS',
    payload: {
      results: data
    }
  }
}

export const addPokeItemToCart = (data) => {
  return {
    type: 'ADD_POKEITEM_TO_CART',
    payload: {
      results: data
    }
  }
}

export const removePokeItemFromCart = (data) => {
  return {
    type: 'REMOVE_POKEITEM_FROM_CART',
    payload: {
      results: data
    }
  }
}

export const catchPokeItems = (error)=>{
  return{
    type:'ERROR_POKEITEMS',
    payload:error
  }
}

export const fetchPokeItems = ()=> {
  let promises = [];
  let data = [];
  return (dispatch)=>{
    consumePokeItems()
    .then((items)=>{
      promises = items.map((item)=>getItemDetail(item.url))
      Promise.all(promises)
      .then((item)=>{
        data = item.map((details)=>({id:details.id, name:details.name, description:details.effect_entries[0], image:details.sprites.default}))
        dispatch(getAllPokeItems(data));
      })
    })
    .catch((err)=>dispatch(catchPokeItems(err)))
  }
}

export const registerUser = (data) => {
  return {
    type: 'REGISTER_USER',
    payload: {
      results: data
    }
  }
}

export const loginUser = (data) => {
  return {
    type: 'LOGIN_USER',
    payload: {
      results: data
    }
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGIN_USER',
    payload: {
      results: ''
    }
  }
}