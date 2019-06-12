const pokeItems = (state = {all:[],addedToCart:[],error:[]}, action) => {
    switch (action.type) {
      case 'GET_ALL_POKEITEMS':
        return{ ...state,               
                all: action.payload.results };
      case 'ADD_POKEITEM_TO_CART':
        return{ ...state,
                addedToCart: [...state.addedToCart, action.payload.results]};
      case 'REMOVE_POKEITEM_FROM_CART':
          let addedToCart = [...state.addedToCart]
          let idArray = addedToCart.map((item)=>item.id);
          const index = idArray.findIndex((id)=>id === action.payload.results.id);
          addedToCart.splice(index, 1);
          return{ ...state,
                  addedToCart: [...addedToCart] };
      case 'REMOVE_ALL_POKEITEMS_FROM_CART':
          return{ ...state,
                  addedToCart: [] };                  
      case 'ERROR_POKEITEMS':
        return{ ...state, 
                error: action.payload.errors };
      default:
        return state;
    }
}
  
export default pokeItems;