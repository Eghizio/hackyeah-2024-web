import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { AppContainer } from "./context/ThemeContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContainer>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppContainer>
  </StrictMode>
);
