import React, {createContext, ReactNode, useEffect, useState} from 'react';

export type themeValues = 'dark' | 'light';

type themeContextType = {
  theme: themeValues;
  toggleTheme: () => void;
};

type themeProviderType = {
  children: ReactNode;
};

export const ThemeContext = createContext<themeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const getInitialTheme = (): themeValues => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedValue = window.localStorage.getItem('themeValue');
    if (
      typeof storedValue === 'string' &&
      (storedValue === 'dark' || storedValue === 'light')
    ) {
      return storedValue;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export default function ThemeProvider({children}: themeProviderType) {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const updateTheme = (currentTheme: themeValues) => {
    const root = window.document.documentElement;
    const isDark = currentTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(currentTheme);
    localStorage.setItem('themeValue', currentTheme);
  };

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
