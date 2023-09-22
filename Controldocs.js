import React, { createContext, useContext, useState } from 'react';

const ControldocsContext = createContext({});

function ControldocsProvider ({ children }) {
  const [vamshi, setVamshi] = useState([]);
  const [increment,setIncrement]=useState(0)
  const [orderItem,setOrderItem]=useState([])

  return (
    <ControldocsContext.Provider value={[vamshi, setVamshi,increment,setIncrement,orderItem,setOrderItem]}>
      {children}
    </ControldocsContext.Provider>
  );
};

const useCart = () => {
  return useContext(ControldocsContext);
};

export { ControldocsProvider, useCart };
