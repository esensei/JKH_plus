const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
}


const authReducer =  (state = initialState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
      case 'REHYDRATE_TOKEN':
        return {
          ...prevState,
          userToken: action.token
        }
      default:
        return state;
    }
  }

