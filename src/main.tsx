import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Routing } from "./navigation/Routing.tsx";
import { AppContainer } from "./context/ThemeContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContainer>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </AppContainer>
  </StrictMode>
);
