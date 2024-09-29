import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "./navigation/Routing.tsx";
import { AppContainer } from "./context/ThemeContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routing />
        </AuthProvider>
      </QueryClientProvider>
    </AppContainer>
  </StrictMode>
);
