import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children: ReactNode;
  redirectPath?: string;
}

export const PrivateRoute = ({ redirectPath = "/auth", children }: Props) => {
  const { user } = useAuth();

  if (!user) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
};
