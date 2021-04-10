import React from 'react';

import Dashboard from './pages/Dashboard/Dashboard';
import StoreProvider from './store/provider';
import GlobalStyle from './styles/global';
import StyledTheme from './styles/theme';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    
    <>
      <StyledTheme>
        <StoreProvider>
          <Dashboard />
        </StoreProvider>
      </StyledTheme>
      <GlobalStyle />
    </>
  )
}

export default App;
