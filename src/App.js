import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Routes from './components/routes/routes.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
    );
}

export default App;