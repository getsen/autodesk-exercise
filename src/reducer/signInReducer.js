const initialState = {
  username: '',
  newAccountCreated: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return { ...state, newAccountCreated: action.newAccountCreated };
    case 'SET_USERNAME':
      return { ...state, username: action.username };
    default:
      return state;
  }
};

export default signInReducer;
