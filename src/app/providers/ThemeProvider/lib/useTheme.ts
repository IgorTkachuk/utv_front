import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, THEME, themeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: THEME;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(themeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    if (setTheme) {
      setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
  };

  return {
    theme: theme || THEME.LIGHT,
    toggleTheme,
  };
};
