import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/Themes';
import GlobalStyle from 'styles/Global';
import { RecoilRoot } from 'recoil';
import SearchBar from 'components/SearchBar/indes';
import RecommendBar from 'components/RecommendBar';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SearchBar />
        <RecommendBar />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
