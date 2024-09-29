import { ReactNode, createContext, useContext, useState } from "react";
import { useLoginMutation } from "../api/queries/auth";

type User = {
  dupa: string;
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
  const [user, setUser] = useState<User | null>(null);
  const loginMutation = useLoginMutation();
  // const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState<User | null>({ dupa: "jaja" });

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
