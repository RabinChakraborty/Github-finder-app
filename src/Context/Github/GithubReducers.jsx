const GithubReducers = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER':
      return {
        ...state,
        uuser: action.payload,
        loading: false,
      };
    case 'DELETE_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default GithubReducers;
