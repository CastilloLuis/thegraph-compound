import React from 'react';
import { ThemeProvider } from 'styled-components';

const styleTheme = {
  colors: {
    primary: '#141E27',
    white: '#FFF',
    black: '#000',
    gray1: '#e9ebec',
    gray2: '#72767b'
  },
  fonts: {
    light: 'font-weight: 300;',
    regular: 'font-weight: 400;',
    bold: 'font-weight: 500;',
  },
};

interface ThemeProps {};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={styleTheme}>{children}</ThemeProvider>
);

export default Theme;
