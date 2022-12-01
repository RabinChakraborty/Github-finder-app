import React, { createContext, useReducer } from 'react';
import GithubReducers from './GithubReducers';

const GithubContext = createContext();

const Github_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Tokken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    uuser: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducers, initialState);

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  const clearResults = () => {
    dispatch({ type: 'DELETE_USERS' });
  };

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${Github_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${Github_Tokken}`,
      },
    });
    const { items } = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };
  //userLogin
  const UserLogin = async (login) => {
    setLoading();

    const response = await fetch(`${Github_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${Github_Tokken}`,
      },
    });

    if (response.status === 404) {
      window.location = '/notFound';
    } else {
      const data = await response.json();
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.users,
        uuser: state.uuser,
        loading: state.loading,
        searchUsers,
        clearResults,
        UserLogin,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
