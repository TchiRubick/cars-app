import React, { useState, useMemo, createContext } from 'react';

export const UserContext = createContext(null);

const UserProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(null);

  const getterSetter = useMemo(() => [user, setUser], [user]);

  return (
    <UserContext.Provider value={getterSetter}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
