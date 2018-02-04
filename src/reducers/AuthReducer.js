const initialState = {
  userName: '',
  ACCESSTOKEN: '',
  userHasAuthenticated: false
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'STORE_ACCESSTOKEN':
      return {
        ...state,
        userName: action.payload.userName,
        ACCESSTOKEN: action.payload.ACCESSTOKEN,
        userHasAuthenticated: action.payload.userHasAuthenticated
      }
    
    default:
      return state;
  }
}

export default authReducer;
