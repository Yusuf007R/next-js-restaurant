import React, {useContext} from 'react';
import {ThemeContext} from 'src/theme/theme-provider';
import {Container} from './style';

export default function DarkThemeToggler() {
  const themeContext = useContext(ThemeContext);
  return (
    <Container onClick={themeContext.toggleTheme}>
      {themeContext.theme === 'dark' ? '🌑' : '☀️'}
    </Container>
  );
}
