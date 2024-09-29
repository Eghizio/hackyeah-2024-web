import { ReactNode, createContext, useContext } from "react";
import {
  useLoginMutation,
  useMeMutation,
  useRegisterMutation,
} from "../api/queries/auth";
import { useLocalStorage } from "../hooks/useLocalStorage";

type User = {
  access_token: string;
  refresh_token: string;
  _id: string;
  email: string;
  district: string;
  full_name: string;
  role: string;
};

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    pesel: string;
    full_name: string;
    district: string;
  }) => Promise<void>;
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
  const registerMutation = useRegisterMutation();
  const meMutation = useMeMutation();

  console.log({ user });

  const login = async (email: string, password: string) => {
    const tokens = await loginMutation.mutateAsync({ email, password });
    const userDetails = await meMutation.mutateAsync({
      access_token: tokens["access_token"],
    });
    setUser({ ...tokens, ...userDetails });
  };

  const logout = async () => {
    setUser(null);
  };

  const register = async (data: {
    email: string;
    password: string;
    pesel: string;
    full_name: string;
    district: string;
  }) => {
    const tokens = await registerMutation.mutateAsync(data);
    const userDetails = await meMutation.mutateAsync({
      access_token: tokens["access_token"],
    });
    setUser({ ...tokens, ...userDetails });
  };

  const value = {
    user,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
