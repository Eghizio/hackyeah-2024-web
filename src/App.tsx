import { Outlet } from "react-router-dom";
import { TopBar } from "./components/TopBar/TopBar";
import { AppContainer } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

export const App = () => {
  return (
    <AppContainer>
      <AuthProvider>
        <TopBar />
        <Outlet />
      </AuthProvider>
    </AppContainer>
  );
};
