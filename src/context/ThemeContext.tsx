import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Theme } from "../types";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (ctx === undefined) {
    throw new Error(
      "ThemeContext must be used within the ThemeContainer Provider"
    );
  }

  return ctx;
};

const toggleNextTheme = (previousTheme: Theme): Theme => {
  switch (previousTheme) {
    case "light":
      return "dark";
    case "dark":
      return "contrast";
    case "contrast":
      return "light";
    default:
      throw new Error(`Unknown theme "${previousTheme}".`);
  }
};

// Tbh it should be just a custom hook.
export const AppContainer = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.body.dataset["theme"] = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme(toggleNextTheme), []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
