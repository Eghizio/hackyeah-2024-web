import { ReactNode, createContext, useContext } from "react";
import { useLoginMutation } from "../api/queries/auth";
import { useLocalStorage } from "../hooks/useLocalStorage";

type User = {
  access_token: string;
  refresh_token: string;
};

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("AuthContext should be used within AuthProvider.");
  }

  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>("hy-user", null);
  const loginMutation = useLoginMutation();

  console.log({ user });

  // Todo: Add callbacks and memoization
  const login = async (email: string, password: string) => {
    // setUser({ dupa: "jaja" });
    await loginMutation.mutateAsync({ email, password }).then(setUser);
  };

  const logout = async () => {
    setUser(null);
  };

  const register = async () => {
    setUser({ dupa: "jaja" });
  };

  const value = {
    user,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
