import { createContext } from "react";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContext {
  theme?: THEME;
  setTheme?: (theme: THEME) => void;
}

export const themeContext = createContext<ThemeContext>({});
export const LOCAL_STORAGE_THEME_KEY = "theme";
