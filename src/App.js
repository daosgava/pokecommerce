import React from 'react';
import MainLayout from './containers/MainLayout';
import Routes from './routes/Routes';

function App() {
  return( 
          <React.Fragment>
            <MainLayout/>
            <Routes/>
          </React.Fragment> );
}

export default App;
