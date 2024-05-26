import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'test' && password === 'password') {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
