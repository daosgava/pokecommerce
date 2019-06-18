import React from 'react';
import MainLayout from './containers/MainLayout';
import Routes from './routes/Routes';
import MyErrorBoundary from './utils/MyErrorBoundary';

function App() {
  return( <MyErrorBoundary>
            <MainLayout/>
            <Routes/>
          </MyErrorBoundary> );
}

export default App;
