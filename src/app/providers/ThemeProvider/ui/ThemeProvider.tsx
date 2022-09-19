import { FC, useMemo, useState } from "react";
import {
  themeContext,
  THEME,
  LOCAL_STORAGE_THEME_KEY,
} from "../lib/ThemeContext";

type ThemeProviderProps = {
  children: React.ReactElement;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <themeContext.Provider value={defaultProps}>
      {children}
    </themeContext.Provider>
  );
};
