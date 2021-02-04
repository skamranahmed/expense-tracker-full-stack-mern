import React, { createContext, useContext, useReducer } from "react";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Movie Ticket", amount: "-180" },
    { id: 2, text: "Snacks", amount: "-100" },
    { id: 3, text: "Freelance Gig", amount: "+2000" },
  ],
};

// Create context
export const GlobalContext = useContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
