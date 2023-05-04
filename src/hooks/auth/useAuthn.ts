import { createContext, useContext } from 'react';

type UsePrivyAuthOpts = {};

export const usePrivyAuth = (): UsePrivyAuthOpts => {
  return {};
};

export const AuthContext = createContext<UsePrivyAuthOpts | null>(null);

export const useAuthContext = () => useContext(AuthContext);
