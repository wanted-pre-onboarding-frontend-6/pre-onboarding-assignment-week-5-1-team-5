import { useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/Global';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Themes';
import Routes from './router';

export default function App() {
  const queryClient = new QueryClient();
  const routes = useRoutes(Routes());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RecoilRoot>{routes}</RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
