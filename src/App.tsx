import { useRoutes } from 'react-router-dom';
import GlobalStyle from './styles/Global';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Themes';
import Routes from './router';

export default function App() {
  const routes = useRoutes(Routes());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>{routes}</RecoilRoot>
    </ThemeProvider>
  );
}
