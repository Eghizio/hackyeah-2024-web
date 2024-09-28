import { TopBar } from "./components/TopBar/TopBar";
import { useAuth } from "./context/AuthContext";
import { Auth } from "./pages/Auth/Auth";

export const App = () => {
  const { user } = useAuth();

  return (
    <div className="app">
      <TopBar />
      {user ? <>User logged in content</> : <Auth />}
    </div>
  );
};
