import { useState, createContext } from "react";

const themeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const context = {
    theme,
    toggleTheme,
  };

  return (
    <themeContext.Provider value={context}>{children}</themeContext.Provider>
  );
}

export { themeContext, ThemeProvider };
