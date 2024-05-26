import React, { createContext, useContext, useReducer } from 'react';
import { toast } from 'react-toastify';

const QuoteContext = createContext();

const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.id !== action.payload.id,
        ),
      };
    case 'EDIT_QUOTE':
      return {
        ...state,
        favorites: state.favorites.map((quote) => {
          const isMatching = quote.id === action.payload.id;
          return isMatching ? action.payload : quote;
        }),
      };

    case 'LOGOUT':
      return {
        ...state,
        favorites: [],
      };

    default:
      return state;
  }
};

const initialState = {
  favorites: [],
};

export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);

  const addFavorite = (quote) => {
    toast.success('Quote added');
    dispatch({ type: 'ADD_FAVORITE', payload: quote });
  };

  const removeFavorite = (quote) => {
    toast.error('Quote removed ');
    dispatch({ type: 'REMOVE_FAVORITE', payload: quote });
  };

  const editQuote = (updatedQuote) => {
    toast.success('Quote edited');
    dispatch({ type: 'EDIT_QUOTE', payload: updatedQuote });
  };
  const logout = (quote) => {
    dispatch({ type: 'LOGOUT', payload: quote });
  };

  return (
    <QuoteContext.Provider
      value={{ ...state, addFavorite, removeFavorite, editQuote, logout }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteContext = () => useContext(QuoteContext);
