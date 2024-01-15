import { createContext, useContext } from 'react';

const ReservationContext = createContext();

const ReservationProvider = ({ children }) => {
  return (
    <ReservationContext.Provider value={{ test1: 'test', test2: 'test2' }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ReservationContext);
};

export default ReservationProvider;
