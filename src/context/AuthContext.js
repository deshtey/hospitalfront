import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

// type User = {
//   email: string;
//   name: string;
// } | null;
// type AuthState = {
//   authenticated: boolean;
//   user: User;
//   loading: boolean;
// };
// type Action =
//   | { type: 'LOGIN'; payload: User }
//   | { type: 'POPULATE'; payload: User }
//   | { type: 'LOGOUT' }
//   | { type: 'STOP_LOADING' };
// type Dispatch = React.Dispatch<Action>;

export const StateContext = createContext({
  authenticated: false,
  user: null,
  loading: true,
});
export const DispatchContext = createContext();

const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case 'POPULATE':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error('Unknown action type');
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, {
    user: {email:"", name:""},
    authenticated: false,
    loading: true,
  });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token === null || token === undefined) {
          return;
        }
        const res = await axios.get('/profile', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const user = res.data.user;
        dispatch({ type: 'LOGIN', payload: user });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        localStorage.removeItem('token');
      } finally {
        dispatch({ type: 'STOP_LOADING' });
      }
    };

    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

