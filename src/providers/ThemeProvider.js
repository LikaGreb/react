import { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

const getTheme = () => {
  const theme = window.localStorage.getItem('theme')
  if (Object.values(themes).includes(theme)) {
    return theme;
  };

  return themes.light;
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;