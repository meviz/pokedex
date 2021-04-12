import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 0,
      retry: 3,
      retryDelay: 2000,
    }
  }
}) 

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
    ,
  document.getElementById('root')
);
