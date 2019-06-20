const pokeItems = (state = {all:[],addedToCart:[],error:[]}, action) => {
    switch (action.type) {
      case 'GET_ALL_POKEITEMS':
        return{ ...state,               
                all: action.payload.results };
      case 'ADD_POKEITEM_TO_CART':
        let newAddedToCart = state.addedToCart;
        if(newAddedToCart.length > 0){
          const itemFound = newAddedToCart.find((item)=>item.id === action.payload.results.id);
          if(itemFound){
            newAddedToCart = newAddedToCart.map((item) =>{
              if(item.id === itemFound.id){
                item.quantity += action.payload.results.quantity;
              }
              return item;
            });
          }else{
            newAddedToCart.push(action.payload.results);
          }
        }else{
          newAddedToCart.push(action.payload.results);
        }
        return{ ...state,
          addedToCart: [...newAddedToCart]};
      case 'UPDATE_POKEITEM_IN_CART':
        const updatedItems = state.addedToCart.map((item) =>{
          if(item.id === action.payload.results.id){
            item.quantity = action.payload.results.quantity;
          }
          return item;
        });
        return{ ...state,
                addedToCart: [...updatedItems]};
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