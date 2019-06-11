const pokeItems = (state = {}, action) => {
    switch (action.type) {
      case 'GET_ALL_POKEITEMS':
        return{ ...state,               
                data: action.payload.results };
      case 'ERROR_POKEITEMS':
        return{ ...state, 
                data: action.payload.errors };
      default:
        return state;
    }
}
  
export default pokeItems;