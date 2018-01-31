const initialState = {
  listToRender: [],
  searchTerm: '',
  bucketlistName: '',
  totalItems: 0,
  limit: 3,
  currentPage: 1,
  totalPages: 1
}

const itemReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'STORE_LIST':
      return {
        ...state,
        listToRender: action.payload.listToRender,
        bucketlistName: action.payload.bucketlistName,
        totalPages: action.payload.totalPages
      }
    case 'SET_TOTAL':
      return {
        ...state,
        totalItems: action.payload
      }

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload
      }

    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        currentPage: action.payload.currentPage
      }

    default:
      return state;
  }
}

export default itemReducer;
