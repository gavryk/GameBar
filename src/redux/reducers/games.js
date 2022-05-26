const initState = {
  items: [],
};

const games = (state = initState, action) => {
    switch(action.type) {
        case 'SET_GAMES':
          return {
            ...state,
            item: action.payload
          }
        default: 
          return state;
    }
}

export default games;
