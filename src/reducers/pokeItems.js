const pokeItems = (state = {all:[],addedToCart:[],error:[]}, action) => {
    switch (action.type) {
      case 'GET_ALL_POKEITEMS':
        return{ ...state,               
                all: action.payload.results };
      case 'ADD_POKEITEM_TO_CART':
        return{ ...state,
                addedToCart: [...state.addedToCart, action.payload.results] };
      case 'REMOVE_POKEITEM_FROM_CART':
          let newAddedToCart = state.addedToCart.filter((item)=>{
            if(item.id !== action.payload.results.id){
              return item;
            }
            return null;
          });
          return{ ...state,
                  addedToCart: [...newAddedToCart] };
      case 'ERROR_POKEITEMS':
        return{ ...state, 
                error: action.payload.errors };
      default:
        return state;
    }
}
  
export default pokeItems;