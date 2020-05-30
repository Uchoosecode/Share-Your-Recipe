const chefs = (state = { chefs: [], loading: false }, action) => {

    switch(action.type) {
      case 'LOADING_CHEFS':
        return {
          ...state,
          chefs: [...state.chefs],
          loading: true
        }
        
      case 'LOAD_CHEFS':
        return {
          ...state,
          chefs: action.chefs,
          loading: false
        }

      case 'ADD_CHEF':      
        return {
          ...state,
          chefs: state.chefs.concat(action.chefs),
          loading: false
        }

      default:
        return state;
    }
  }

export default chefs;