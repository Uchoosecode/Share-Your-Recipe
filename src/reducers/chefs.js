const chefs = (state = { chefs: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOAD_CHEFS':
        return {
          ...state,
          chefs: [...state.chefs],
          loading: true
        }
      case 'ADD_CHEFS':
        return {
          ...state,
          chefs: action.chefs,
          loading: false
        }
      default:
        return state;
    }
  }

export default chefs;