import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FontSize, Theme } from "../types";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  fontSize: FontSize;
  toggleFontSize: () => void;
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

const toggleNextFont = (previousFont: FontSize): FontSize => {
  console.log({ previousFont });
  switch (previousFont) {
    case "normal":
      return "big";
    case "big":
      return "large";
    case "large":
      return "normal";
    default:
      throw new Error(`Unknown theme "${previousFont}".`);
  }
};

// Tbh it should be just a custom hook.
export const AppContainer = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  useEffect(() => {
    document.body.dataset["theme"] = theme;
    document.body.dataset["font"] = fontSize;
  }, [theme, fontSize]);

  const toggleTheme = useCallback(() => setTheme(toggleNextTheme), []);
  const toggleFontSize = useCallback(() => setFontSize(toggleNextFont), []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      fontSize,
      toggleFontSize,
    }),
    [theme, toggleTheme, fontSize, toggleFontSize]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
