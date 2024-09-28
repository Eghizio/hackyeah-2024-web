import { useTheme } from "./context/ThemeContext";
import { TopBar } from "./components/TopBar/TopBar";
import { useAuth } from "./context/AuthContext";
import { Auth } from "./pages/Auth/Auth";

export const App = () => {
  // Could be extracted to ThemeProvider wrapper component
  const { theme } = useTheme();
  const { user } = useAuth();

  return (
    <div className="app" data-theme={theme}>
      <TopBar />
      {user ? <>User logged in content</> : <Auth />}
    </div>
  );
};
