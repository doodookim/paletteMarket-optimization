import Router from './router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

const queryclient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
