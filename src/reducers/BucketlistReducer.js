const initialState = {
  listToRender: [],
  searchTerm: '',
  totalItems: 0,
  limit: 5,
  currentPage: 1,
  totalPages: 1
};

const bucketlistReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'STORE_BUCKETLISTS':
      return {
        ...state,
        listToRender: action.payload.listToRender,
        totalPages: action.payload.totalPages
      }

    case 'SET_BUCKETLIST_TOTAL':
      return {
        ...state,
        totalItems: action.payload
      }

    case 'SET_BUCKETLIST_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload
      }

      case 'SET_BUCKETLIST_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload.searchTerm,
          currentPage: action.payload.currentPage
        }

    default:
      return state;
  }
}

export default bucketlistReducer;
