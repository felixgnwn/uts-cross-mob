import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionHistory, setTransactionHistory] = useState([]);

  const addTransaction = (transaction) => {
    setTransactionHistory((prevHistory) => [...prevHistory, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactionHistory, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  return useContext(TransactionContext);
};
